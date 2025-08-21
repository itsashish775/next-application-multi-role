"use client";

import Link from "next/link";
import { AuthService } from "@/lib/auth";
import PublicHeader from "@/components/PublicHeader";

export default function Home() {
  const user = AuthService.getCurrentUser();

  return (
    <div className='min-h-screen bg-gray-50'>
      <PublicHeader/>

      <main>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
              Welcome to MultiRole Application
            </h1>
            <p className='mt-5 max-w-xl mx-auto text-xl text-gray-500'>
              Experience different dashboards based on your role - Admin,
              Employee, or Customer.
            </p>
            <div className='mt-10 flex justify-center'>
              {!user && (
                <div className='rounded-md shadow'>
                  <Link
                    href='/auth/register'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
