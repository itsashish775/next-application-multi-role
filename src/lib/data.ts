// User data
export const users = [
  {
    id: 1,
    email: "admin@example.com",
    password: "admin123",
    name: "Admin User",
    role: "admin",
  },
  {
    id: 2,
    email: "employee@example.com",
    password: "employee123",
    name: "Employee User",
    role: "employee",
  },
  {
    id: 3,
    email: "customer@example.com",
    password: "customer123",
    name: "Customer User",
    role: "customer",
  },
];

// Dashboard data
export const adminDashboardData = {
  stats: [
    { title: "Total Users", value: 254, change: "+12%" },
    { title: "Revenue", value: "$12,540", change: "+8%" },
    { title: "Orders", value: 124, change: "+5%" },
    { title: "Tickets", value: 42, change: "-2%" },
  ],
  recentUsers: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      joined: "2023-04-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      joined: "2023-04-14",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      joined: "2023-04-13",
    },
  ],
};

export const employeeDashboardData = {
  stats: [
    { title: "Assigned Tasks", value: 12, change: "+2" },
    { title: "Completed Tasks", value: 8, change: "+3" },
    { title: "Pending Requests", value: 5, change: "-1" },
    { title: "Customer Rating", value: "4.8/5", change: "+0.2" },
  ],
  tasks: [
    {
      id: 1,
      title: "Customer Support Ticket #1254",
      status: "In Progress",
      priority: "High",
    },
    {
      id: 2,
      title: "Update Product Documentation",
      status: "Pending",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Follow up with Client",
      status: "Completed",
      priority: "Low",
    },
  ],
};

export const customerDashboardData = {
  stats: [
    { title: "Total Orders", value: 15, change: "+3" },
    { title: "Pending Orders", value: 2, change: "-1" },
    { title: "Wallet Balance", value: "$245.50", change: "+$45" },
    { title: "Wishlist Items", value: 8, change: "+2" },
  ],
  orders: [
    {
      id: 1,
      product: "Wireless Headphones",
      status: "Delivered",
      date: "2023-04-10",
      amount: "$89.99",
    },
    {
      id: 2,
      product: "Smart Watch",
      status: "Shipped",
      date: "2023-04-12",
      amount: "$199.99",
    },
    {
      id: 3,
      product: "Phone Case",
      status: "Processing",
      date: "2023-04-14",
      amount: "$24.99",
    },
  ],
};
export const services = [
  {
    id: 1,
    title: "Trademark Registration",
    description:
      "Get your Trademark registration from anywhere in India and protect your Brand Name/Logo/Slogan.",
    link: "/services/trademark-registration",
    isDisabled: true,
  },
  {
    id: 2,
    title: "Company Registration",
    description:
      "It includes all the forms of company registration, compliances, PAN and TAN, GST, change of Registered Address",
    link: "/services/company-registration",
    isDisabled: true,
  },
  {
    id: 3,
    title: "GST Services",
    description:
      "Outsource your GST compliance to Online Legal India. India’s fastest growing online corporate services.",
    link: "/services/gst",
    isDisabled: true,
  },
  {
    id: 4,
    title: "Import Export License",
    description:
      "Register your import export business under Directorate General of Foreign Trade, Ministry of Commerce ...",
    link: "/services/import-export-license",
    isDisabled: true,
  },
  {
    id: 5,
    title: "FSSAI Registration",
    description:
      "Get FSSAI certificate & license no. to utilize on your products and website as well.",
    link: "/services/fssai",
    isDisabled: true,
  },
  {
    id: 6,
    title: "ISO Registration",
    description:
      "Get your ISO Certification from anywhere in India and enhance your business credibility with globally recognized standard.",
    link: "/services/iso",
    isDisabled: true,
  },
  {
    id: 7,
    title: "Online Dispute Resolution",
    description:
      "Resolve disputes online with ease—fast, fair, and affordable Online Dispute Redressal services await you!",
    link: "/services/odr",
    isDisabled: true,
  },
  {
    id: 8,
    title: "PF & ESIC Return Filing",
    description:
      "File your PF & ESIC returns seamlessly from anywhere in India and ensure compliance with employee welfare regulations.",
    link: "/services/pf-esic",
    isDisabled: true,
  },
  {
    id: 9,
    title: "Consumer Dispute",
    description:
      "Say goodbye to long legal battles—Online Legal India brings you quick and smart consumer dispute resolution, online.",
    link: "/services/consumer-dispute",
    isDisabled: true,
  },
  {
    id: 10,
    title: "Legal (ODR)",
    description:
      "Solve legal problems smartly—anytime, anywhere, with Online Dispute Resolution experts.",
    link: "/services/legal-odr",
    isDisabled: true,
  },
];
export const bannerSlides = [
  {
    title: "Trusted Legal Consultancy Services",
    description:
      "Expert legal advice for businesses and individuals. We simplify complex legal matters with practical solutions tailored to your needs.",
    image: "https://picsum.photos/600/400",
  },
  {
    title: "Book Lawyers Anytime, Anywhere",
    description:
      "Get instant access to top legal professionals across India with just a few clicks.",
    image: "https://picsum.photos/600/400",
  },
  {
    title: "Secure & Confidential Consultations",
    description:
      "Your privacy is our priority. All consultations are encrypted and safe.",
    image: "https://picsum.photos/600/400",
  },
];
import {
  Shield,
  Clock,
  Zap,
  Users,
  Award,
  CheckCircle,
  TrendingUp,
  BadgeCheck,
  Wallet,
} from "lucide-react";

export const features = [
  { title: "Recognized", desc: "Recognized by Govt. of India", icon: Award },
  {
    title: "Happy Customers",
    desc: "1 Lakh+ Happy Customers Across India",
    icon: Users,
  },
  { title: "ISO", desc: "ISO Certified", icon: BadgeCheck },
  { title: "Data Security", desc: "Data Security & Trust", icon: Shield },
  {
    title: "Experts",
    desc: "Trained & Professional Experts",
    icon: CheckCircle,
  },
  { title: "On Time", desc: "On Time Service", icon: Clock },
  { title: "Quick", desc: "Super Fast Service", icon: Zap },
  { title: "Users OLI", desc: "Quick Response Team", icon: TrendingUp },
  {
    title: "Affordable",
    desc: "Affordable Than Other Professionals",
    icon: Wallet,
  },
];

export const faqs = [
  {
    question: "What types of legal services do you provide?",
    answer:
      "We provide services in family law, corporate law, property disputes, criminal defense, contract drafting, intellectual property, and more.",
  },
  {
    question: "How can I book a consultation with a lawyer?",
    answer:
      "You can schedule a consultation through our website’s booking form or by calling our office directly.",
  },
  {
    question: "Do you offer free initial consultations?",
    answer:
      "Yes, we provide a free 30-minute initial consultation to understand your case and suggest possible legal options.",
  },
  {
    question: "Are your lawyers licensed and experienced?",
    answer:
      "Yes, all our lawyers are licensed professionals with extensive experience in their respective practice areas.",
  },
  {
    question: "How much do your legal services cost?",
    answer:
      "Our fees depend on the complexity of the case. We provide transparent pricing and flexible payment options.",
  },
  {
    question: "Can you help with drafting and reviewing contracts?",
    answer:
      "Absolutely. Our legal team specializes in drafting, reviewing, and negotiating contracts to protect your interests.",
  },
  {
    question: "Do you handle property and real estate disputes?",
    answer:
      "Yes, we handle property disputes, title verifications, lease agreements, and real estate litigation.",
  },
  {
    question: "Can you represent me in court?",
    answer:
      "Yes, our lawyers are qualified to represent clients in civil, criminal, and family courts.",
  },
  {
    question: "Do you provide corporate legal services?",
    answer:
      "Yes, we offer services such as company registration, compliance, mergers & acquisitions, and legal advisory for businesses.",
  },
  {
    question: "Can you help with wills and estate planning?",
    answer:
      "Yes, we assist in drafting wills, setting up trusts, and estate planning to secure your family’s future.",
  },
  {
    question: "How do you ensure client confidentiality?",
    answer:
      "We strictly adhere to attorney-client privilege and maintain the highest level of confidentiality for all cases.",
  },
  {
    question: "Do you offer online legal consultations?",
    answer:
      "Yes, we provide consultations via phone, email, or video call for clients who cannot visit in person.",
  },
  {
    question: "What documents should I bring for my consultation?",
    answer:
      "It depends on your case, but generally you should bring identification documents, contracts, notices, or any legal papers related to your issue.",
  },
  {
    question: "Do you handle criminal defense cases?",
    answer:
      "Yes, our criminal defense lawyers handle bail applications, trial representation, and appeals.",
  },
  {
    question: "How can I get a quotation for legal services?",
    answer:
      "You can request a quotation by submitting your case details through our website or contacting us directly for a personalized estimate.",
  },
];
