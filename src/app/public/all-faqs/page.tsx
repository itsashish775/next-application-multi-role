// app/faq/page.tsx
"use client";

import FaqItem from "@/components/CustomComponets/FaqItem";
import { faqs } from "@/lib/data";

export default function FaqPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-indigo-700 mb-10 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <FaqItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </main>
  );
}
