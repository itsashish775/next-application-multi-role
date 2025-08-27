'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AuthService } from '@/lib/auth';
import { Menu, X } from 'lucide-react'; // hamburger + close icons
import ActiveLink from './ActiveLink';

export default function PublicHeader() {
  const user = AuthService.getCurrentUser();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Legal Advice</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/public/about">About</ActiveLink>
            <ActiveLink href="/public/contact">Contact</ActiveLink>
            <ActiveLink href="/public/pricing">Pricing</ActiveLink>
          </nav>

          {/* User Actions (Desktop) */}
          <div className="hidden md:flex items-center">
            {user ? (
              <div className="flex items-center">
                <span className="mr-4 text-sm text-gray-700">Hello, {user.name}</span>
                <Link
                  href={`/${user.role}/dashboard`}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    AuthService.logout();
                    window.location.href = '/';
                  }}
                  className="ml-4 text-gray-500 hover:text-gray-700 text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link
                  href="/auth/login"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Hamburger button (mobile only) */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-2">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/public/about">About</ActiveLink>
            <ActiveLink href="/public/contact">Contact</ActiveLink>
            <ActiveLink href="/public/pricing">Pricing</ActiveLink>
          </nav>

          {/* User Actions (Mobile) */}
          <div className="pt-4 border-t border-gray-200">
            {user ? (
              <div className="flex flex-col space-y-3">
                <span className="text-sm text-gray-700">Hello, {user.name}</span>
                <Link
                  href={`/${user.role}/dashboard`}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium text-center"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    AuthService.logout();
                    window.location.href = '/';
                  }}
                  className="text-gray-500 hover:text-gray-700 text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-3">
                <Link
                  href="/auth/login"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium text-center"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium text-center"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
