"use client";

import Link from "next/link";
import { AuthService } from "@/lib/auth";
import { Briefcase, Shield, UserCheck, Users } from "lucide-react";

export default function About() {
  const user = AuthService.getCurrentUser();

  return (
    <main className='bg-gray-50 min-h-screen'>
      <section className='relative bg-indigo-600 text-white py-20'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8 text-center'>
          <h1 className='text-4xl sm:text-5xl font-extrabold mb-4'>
            About Our Platform
          </h1>
          <p className='text-lg sm:text-xl max-w-3xl mx-auto text-indigo-100'>
            A multi-role application built for Administrators, Employees, and
            Customers. Empowering everyone with the right tools for success.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className='max-w-7xl mx-auto py-16 px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
              <Briefcase className='text-indigo-600' /> For Administrators
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              Administrators have full control over the system. They can manage
              users, view system analytics, configure settings, and monitor
              platform performance through a powerful dashboard.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
              <Users className='text-indigo-600' /> For Employees
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              Employees access tools to perform their jobs effectively — from
              managing tasks, interacting with customers, and tracking
              performance to accessing internal resources.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
              <UserCheck className='text-indigo-600' /> For Customers
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              Customers enjoy a personalized dashboard to manage accounts, view
              order history, make purchases, and access support with ease.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
              <Shield className='text-indigo-600' /> Our Technology
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              Built with Next.js, React, and Tailwind CSS, our platform delivers
              speed, responsiveness, and security. Every feature is crafted to
              enhance user experience across devices.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='bg-indigo-50 py-16'>
        <div className='max-w-4xl mx-auto text-center px-6'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Ready to experience our platform?
          </h2>
          <p className='text-lg text-gray-600 mb-6'>
            Join us today and explore the tailored dashboards designed for your
            role.
          </p>
          <button className='px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition'>
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
