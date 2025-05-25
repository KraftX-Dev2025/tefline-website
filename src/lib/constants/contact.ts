// lib/constants/contact.ts

import { Phone, Mail, MapPin, MessageSquare, Calendar, Building, Users } from "lucide-react";

export const contactOptions = [
    {
        icon: Phone,
        title: "Call Us",
        description: "Speak directly with our team",
        info: "+91 98451 71490",
        color: "primary-gradient",
        shadow: "shadow-teal-500/20",
    },
    {
        icon: Mail,
        title: "Email Us",
        description: "Send us an email anytime",
        info: "team@tefline.org",
        color: "primary-gradient",
        shadow: "shadow-cyan-500/20",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        description: "Come see us in person",
        info: "Embassy Golf Links, Bangalore",
        color: "primary-gradient",
        shadow: "shadow-amber-500/20",
    },
];

export const inquiryTypes = [
    {
        id: "general",
        label: "General Inquiry",
        icon: MessageSquare,
        description: "Ask us anything about our services and solutions",
    },
    {
        id: "demo",
        label: "Book a Demo",
        icon: Calendar,
        description: "Schedule a live demonstration of our platform",
    },
    {
        id: "corporate",
        label: "Corporate Wellness",
        icon: Building,
        description: "Learn about our enterprise wellness programs",
    },
    {
        id: "partnership",
        label: "Partnership Opportunities",
        icon: Users,
        description: "Explore collaboration and partnership options",
    },
];

export const masterclassFeatures = [
    "Evidence-based wellness principles",
    "AI-powered health optimization",
    "Actionable wellness strategies",
    "Q&A with wellness experts",
];

export const transportationOptions = [
    {
        title: "By Car",
        directions: "15 minutes from MG Road, parking available on-site.",
        icon: "🚗",
    },
    {
        title: "Public Transit",
        directions: "Bus routes 500E, 335E stop at Embassy Golf Links main entrance.",
        icon: "🚌",
    },
    {
        title: "From Airport",
        directions: "30-minute drive from Kempegowda International Airport.",
        icon: "✈️",
    },
];

export const faqs = [
    {
        question: "What happens after I submit a contact form?",
        answer: "Once you submit the form, our team will review your message and respond within 1-2 business days. For urgent inquiries, we recommend calling us directly at the number provided above.",
    },
    {
        question: "How do I book a wellness masterclass for my organization?",
        answer: "You can book a masterclass by selecting the 'Book a Masterclass' option in our contact form or by emailing us directly at team@tefline.org with details about your organization and preferred dates.",
    },
    {
        question: "Are there any costs associated with the initial consultation?",
        answer: "No, initial consultations are completely free. We believe in demonstrating our value before any commitment, allowing you to understand how our approach can benefit you or your organization.",
    },
    {
        question: "Can I visit your office without an appointment?",
        answer: "We recommend scheduling an appointment to ensure our team can properly welcome you and address your specific needs. However, if you're in the area, feel free to stop by, and we'll do our best to accommodate you.",
    },
    {
        question: "Do you offer remote wellness sessions?",
        answer: "Yes, we offer virtual wellness sessions and consultations for individuals and organizations not located in Bangalore. Our digital platform makes it easy to access our expertise from anywhere in the world.",
    },
    {
        question: "What makes Tefline different from other wellness companies?",
        answer: "Tefline stands out through our unique combination of evidence-informed wellness protocols, AI-powered personalization, and community accountability. We blend cutting-edge technology with proven wellness principles to deliver measurable health improvements.",
    },
];

export const locationInfo = {
    name: "Embassy Golf Links Business Park",
    address: "Cinnabar Hills, Bangalore - 560071, India",
    mapImage: "/tefline-image1.webp",
};