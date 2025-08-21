// app/public/pricing/page.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { AuthService } from "@/lib/auth";

export default function Pricing() {
  const user = AuthService.getCurrentUser();

  const plans = [
    {
      title: "Basic",
      price: "$19/month",
      description:
        "Perfect for small teams who are just getting started. Includes core features, basic dashboard functionality, and email support.",
      features: ["Up to 5 users", "1GB storage", "Email support"],
      image: "/images/image1.jpg",
    },
    {
      title: "Professional",
      price: "$49/month",
      description:
        "Designed for growing businesses. Includes advanced analytics, priority support, custom branding, and API access.",
      features: ["Up to 20 users", "10GB storage", "Priority support", "API access"],
      image: "/images/image1.jpg",
    },
    {
      title: "Enterprise",
      price: "Custom Pricing",
      description:
        "Tailored for large organizations with specific requirements. Includes all features, unlimited users, and dedicated account management.",
      features: ["Unlimited users", "24/7 phone support", "Dedicated manager", "SSO integration"],
      image: "/images/image1.jpg",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center py-16 px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Simple Pricing, No Surprises</h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl opacity-90">
          Choose a plan that fits your team’s needs. All plans come with a 14-day free trial.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col hover:scale-105 transition-transform"
          >
            <div className="flex justify-center mb-6">
              <Image
                src={plan.image}
                alt={plan.title}
                width={120}
                height={120}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h2>
            <p className="text-xl font-semibold text-indigo-600">{plan.price}</p>
            <p className="text-gray-500 mt-4">{plan.description}</p>

            <ul className="mt-6 space-y-2 text-gray-600 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  ✅ <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={user ? "/dashboard" : "/signup"}
              className="mt-8 inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              {user ? "Upgrade Now" : "Start Free Trial"}
            </Link>
          </div>
        ))}
      </div>

      {/* Special Offers */}
      <div className="bg-gray-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Offers</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          We offer special pricing for educational institutions, non-profit organizations, and
          startups. Contact our sales team to learn more about our discounted rates.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block bg-purple-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-purple-700 transition"
        >
          Contact Sales
        </Link>
      </div>
    </main>
  );
}
