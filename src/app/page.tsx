"use client";

import Link from "next/link";
import { AuthService } from "@/lib/auth";
import PublicHeader from "@/components/PublicHeader";
import Slider, { Settings } from "react-slick";
const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  autoplaySpeed: 1500,
  arrows:false,
  autoplay:true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function Home() {
  const user = AuthService.getCurrentUser();

  return (
    <div className='min-h-screen bg-gray-50'>
      <PublicHeader />

      <main>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          {/* Hero Section */}
          <div className='text-center'>
            <h1 className='text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl'>
              Trusted Legal Consultancy Services
            </h1>
            <p className='mt-6 max-w-2xl mx-auto text-xl text-gray-600'>
              Expert legal advice for businesses and individuals. We simplify
              complex legal matters with practical solutions tailored to your
              needs.
            </p>
            <div className='mt-10 flex justify-center space-x-4'>
              {!user && (
                <>
                  <Link
                    href='/auth/register'
                    className='px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
                  >
                    Book a Consultation
                  </Link>
                  <Link
                    href='/auth/login'
                    className='px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10'
                  >
                    Client Login
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className='mt-20'>
            <h2 className='text-3xl font-bold text-gray-900 text-center mb-10'>
              What Our Clients Say
            </h2>
            <Slider {...settings}>
              <div className='p-6'>
                <div className='bg-white shadow rounded-xl p-6'>
                  <p className='text-gray-600'>
                    "The team was professional and supportive. They helped me
                    resolve my property dispute smoothly."
                  </p>
                  <p className='mt-4 font-semibold text-gray-900'>— Rohan S.</p>
                </div>
              </div>
              <div className='p-6'>
                <div className='bg-white shadow rounded-xl p-6'>
                  <p className='text-gray-600'>
                    "Thanks to their guidance, I navigated my divorce with
                    clarity and fairness."
                  </p>
                  <p className='mt-4 font-semibold text-gray-900'>— Neha K.</p>
                </div>
              </div>
              <div className='p-6'>
                <div className='bg-white shadow rounded-xl p-6'>
                  <p className='text-gray-600'>
                    "Their corporate law expertise helped my startup avoid legal
                    risks during funding."
                  </p>
                  <p className='mt-4 font-semibold text-gray-900'>— Priya M.</p>
                </div>
              </div>
              <div className='p-6'>
                <div className='bg-white shadow rounded-xl p-6'>
                  <p className='text-gray-600'>
                    "Very approachable and professional. They made complex legal
                    jargon easy to understand."
                  </p>
                  <p className='mt-4 font-semibold text-gray-900'>— Amit K.</p>
                </div>
              </div>
            </Slider>
          </div>

          {/* Services Section */}
          <div className='mt-20'>
            <h2 className='text-3xl font-bold text-gray-900 text-center'>
              Our Services
            </h2>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center'>
              <div className='p-6 bg-white shadow rounded-xl'>
                <h3 className='text-xl font-semibold text-gray-900'>
                  Corporate Law
                </h3>
                <p className='mt-3 text-gray-600'>
                  Assistance with contracts, compliance, mergers, acquisitions,
                  and governance.
                </p>
              </div>
              <div className='p-6 bg-white shadow rounded-xl'>
                <h3 className='text-xl font-semibold text-gray-900'>
                  Family Law
                </h3>
                <p className='mt-3 text-gray-600'>
                  Guidance on divorce, custody, adoption, and family disputes
                  with compassion.
                </p>
              </div>
              <div className='p-6 bg-white shadow rounded-xl'>
                <h3 className='text-xl font-semibold text-gray-900'>
                  Real Estate Law
                </h3>
                <p className='mt-3 text-gray-600'>
                  Legal due diligence, property disputes, and documentation
                  support.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className='mt-20 bg-indigo-50 py-12 px-6 rounded-2xl'>
            <h2 className='text-3xl font-bold text-gray-900 text-center'>
              Why Choose Us
            </h2>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center'>
              <div>
                <h3 className='text-lg font-semibold text-gray-900'>
                  Experienced Lawyers
                </h3>
                <p className='mt-2 text-gray-600'>
                  A dedicated team with 15+ years of expertise across diverse
                  legal fields.
                </p>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900'>
                  Client-Centered Approach
                </h3>
                <p className='mt-2 text-gray-600'>
                  We focus on your unique needs, offering personalized legal
                  solutions.
                </p>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900'>
                  Affordable & Transparent
                </h3>
                <p className='mt-2 text-gray-600'>
                  Fair pricing, no hidden fees, and complete transparency
                  throughout.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className='mt-20'>
            <h2 className='text-3xl font-bold text-gray-900 text-center'>
              What Our Clients Say
            </h2>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='p-6 bg-white shadow rounded-xl'>
                <p className='text-gray-600'>
                  "The team was professional and supportive. They helped me
                  resolve my property dispute smoothly."
                </p>
                <p className='mt-4 font-semibold text-gray-900'>— Rohan S.</p>
              </div>
              <div className='p-6 bg-white shadow rounded-xl'>
                <p className='text-gray-600'>
                  "Thanks to their guidance, I navigated my divorce with clarity
                  and fairness."
                </p>
                <p className='mt-4 font-semibold text-gray-900'>— Neha K.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className='mt-20 text-center'>
            <h2 className='text-3xl font-bold text-gray-900'>Get In Touch</h2>
            <p className='mt-4 text-gray-600'>
              Schedule a consultation with our legal experts today.
            </p>
            <div className='mt-6 flex justify-center'>
              <Link
                href='/contact'
                className='px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
