// app/public/contact/page.js
"use client";

import Link from "next/link";
import { AuthService } from "@/lib/auth";

export default function Contact() {
  const user = AuthService.getCurrentUser();

  return (
    <main className='bg-gray-50 min-h-screen'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto'>
          {/* Title */}
          <h1 className='text-4xl font-extrabold text-gray-900 sm:text-5xl mb-8 text-center'>
            Contact Us
          </h1>

          <p className='text-lg text-gray-600 text-center mb-12'>
            We’d love to hear from you! Whether you have questions, need
            support, or want to explore partnership opportunities, our team is
            here to help.
          </p>

          {/* Contact Sections */}
          <div className='space-y-10'>
            {/* Get in Touch */}
            <div>
              <h2 className='text-2xl font-semibold text-indigo-700 mb-3 flex items-center gap-2'>
                📧 Get in Touch
              </h2>
              <p className='text-gray-600'>
                Email us at{" "}
                <a
                  href='mailto:support@multiroleapp.com'
                  className='text-indigo-600 font-medium hover:underline'
                >
                  support@multiroleapp.com
                </a>
                . Our team monitors this inbox during business hours and usually
                responds within 24 hours.
              </p>
            </div>

            {/* Office Hours */}
            <div>
              <h2 className='text-2xl font-semibold text-indigo-700 mb-3 flex items-center gap-2'>
                🕒 Office Hours
              </h2>
              <p className='text-gray-600'>
                Monday – Friday, 9:00 AM – 6:00 PM EST. For urgent matters,
                please include <span className='font-semibold'>“URGENT”</span>{" "}
                in the subject line.
              </p>
            </div>

            {/* Technical Support */}
            <div>
              <h2 className='text-2xl font-semibold text-indigo-700 mb-3 flex items-center gap-2'>
                🛠️ Technical Support
              </h2>
              <p className='text-gray-600'>
                Please include details like error messages, browser type, and OS
                when reporting issues. This helps us resolve problems faster.
              </p>
            </div>

            {/* Mailing Address */}
            <div>
              <h2 className='text-2xl font-semibold text-indigo-700 mb-3 flex items-center gap-2'>
                📍 Mailing Address
              </h2>
              <p className='text-gray-600 leading-relaxed'>
                MultiRole App Inc. <br />
                123 Technology Drive <br />
                San Francisco, CA 94103 <br />
                United States
              </p>
            </div>

            {/* Phone Support */}
            <div>
              <h2 className='text-2xl font-semibold text-indigo-700 mb-3 flex items-center gap-2'>
                ☎️ Phone Support
              </h2>
              <p className='text-gray-600'>
                Call us at{" "}
                <a
                  href='tel:+15551234567'
                  className='text-indigo-600 font-medium hover:underline'
                >
                  +1 (555) 123-4567
                </a>
                . Phone support is available for enterprise customers and
                account-related inquiries.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className='mt-12 text-center'>
            <a
              href='mailto:support@multiroleapp.com'
              className='inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition'
            >
              Send us a Message
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
