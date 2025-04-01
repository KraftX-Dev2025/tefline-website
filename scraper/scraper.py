import asyncio
import os
from typing import List
from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig
from crawl4ai.markdown_generation_strategy import DefaultMarkdownGenerator
import requests
from xml.etree import ElementTree
from datetime import datetime

async def crawl_sequential(urls: List[str], output_file: str = "all_content.md"):
    print(f"\n=== Sequential Crawling with Session Reuse ===")
    print(f"All content will be saved to: {output_file}")

    # Create directory if it doesn't exist
    os.makedirs(os.path.dirname(output_file) if os.path.dirname(output_file) else '.', exist_ok=True)

    browser_config = BrowserConfig(
        headless=True,
        # For better performance in Docker or low-memory environments:
        extra_args=["--disable-gpu", "--disable-dev-shm-usage", "--no-sandbox"],
    )

    crawl_config = CrawlerRunConfig(
        markdown_generator=DefaultMarkdownGenerator()
    )

    # Create the crawler (opens the browser)
    crawler = AsyncWebCrawler(config=browser_config)
    await crawler.start()

    # Create or clear the output file with a header
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(f"# Web Crawl Results\n\n")
        f.write(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        f.write(f"Total URLs to crawl: {len(urls)}\n\n")

    try:
        session_id = "session1"  # Reuse the same session across all URLs
        successful_crawls = 0
        
        for i, url in enumerate(urls):
            print(f"Crawling [{i+1}/{len(urls)}]: {url}")
            
            result = await crawler.arun(
                url=url,
                config=crawl_config,
                session_id=session_id
            )
            
            # Append the result to our single output file
            with open(output_file, 'a', encoding='utf-8') as f:
                f.write(f"\n\n{'=' * 80}\n\n")
                f.write(f"## URL: {url}\n\n")
                
                if result.success:
                    f.write(result.markdown.raw_markdown)
                    successful_crawls += 1
                    print(f"✓ Successfully crawled: {url}")
                    print(f"  Content length: {len(result.markdown.raw_markdown)} characters")
                else:
                    f.write(f"**CRAWL FAILED**: {result.error_message}\n\n")
                    print(f"✗ Failed: {url} - Error: {result.error_message}")
        
        # Append summary at the end of the file
        with open(output_file, 'a', encoding='utf-8') as f:
            f.write(f"\n\n{'=' * 80}\n\n")
            f.write(f"# Summary\n\n")
            f.write(f"* Total URLs: {len(urls)}\n")
            f.write(f"* Successfully crawled: {successful_crawls}\n")
            f.write(f"* Failed: {len(urls) - successful_crawls}\n")
        
        print(f"\nCrawl complete. Results saved to: {output_file}")
        print(f"Successfully crawled: {successful_crawls}/{len(urls)} URLs")
        
    finally:
        # After all URLs are done, close the crawler (and the browser)
        await crawler.close()

def get_pydantic_ai_docs_urls():
    """
    Fetches all URLs from the RxLifeMed website.
    Uses the sitemap (https://www.rxlifemed.com/sitemap.xml) to get these URLs.
    
    Returns:
        List[str]: List of URLs
    """            
    sitemap_url = "https://www.rxlifemed.com/sitemap.xml"
    try:
        response = requests.get(sitemap_url)
        response.raise_for_status()
        
        # Parse the XML
        root = ElementTree.fromstring(response.content)
        
        # Extract all URLs from the sitemap
        # The namespace is usually defined in the root element
        namespace = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
        urls = [loc.text for loc in root.findall('.//ns:loc', namespace)]
        
        return urls
    except Exception as e:
        print(f"Error fetching sitemap: {e}")
        return []

async def main():
    urls = get_pydantic_ai_docs_urls()
    if urls:
        print(f"Found {len(urls)} URLs to crawl")
        await crawl_sequential(urls)
    else:
        print("No URLs found to crawl")

if __name__ == "__main__":
    asyncio.run(main())