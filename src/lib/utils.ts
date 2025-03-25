export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(date);
}

export function classNames(
    ...classes: (string | boolean | undefined)[]
): string {
    return classes.filter(Boolean).join(" ");
}
