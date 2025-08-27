"use client";

import FaqItem from "@/components/CustomComponets/FaqItem";
import { faqs } from "@/lib/data";
import Link from "next/link";

const FaqSection = () => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-5xl mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold text-gray-900 mb-12'>
          Frequently Asked Questions
        </h2>

        <div className='space-y-6 text-left'>
          {faqs.slice(0, 4).map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className='mt-10'>
          <Link
            href='public/all-faqs'
            className='inline-block px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md transition'
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
