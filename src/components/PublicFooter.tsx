"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">MultiRole App</h2>
            <p className="mt-3 text-sm text-gray-400">
              Empowering administrators, employees, and customers with a
              seamless, multi-role experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-indigo-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/public/about"
                  className="hover:text-indigo-400 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/public/contact"
                  className="hover:text-indigo-400 transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/public/pricing"
                  className="hover:text-indigo-400 transition"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <p className="text-sm text-gray-400">Email: support@multiroleapp.com</p>
            <p className="text-sm text-gray-400">Phone: +1 (234) 567-890</p>
            <p className="text-sm text-gray-400">Address: New York, USA</p>
          </div>

          {/* Social Media */}
          {/* <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <a
                href="#"
                className="hover:text-indigo-400 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-indigo-400 transition"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-indigo-400 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-indigo-400 transition"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div> */}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MultiRole App. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
