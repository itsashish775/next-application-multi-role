"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className='bg-amber-100 text-neutral-600'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14'>
        {/* Top Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8'>
          {/* Business Registration */}
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-3'>
              Business Registration
            </h3>
            <ul className='space-y-2 text-sm'>
              <li>Private Limited Company</li>
              <li>Limited Liability Partnership</li>
              <li>One Person Company</li>
              <li>Public limited Company</li>
              <li>Section 8 Company</li>
            </ul>
          </div>

          {/* Licenses */}
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-3'>Licenses</h3>
            <ul className='space-y-2 text-sm'>
              <li>FSSAI [Food License]</li>
              <li>FSSAI Renewal</li>
              <li>IEC [Import/Export Code]</li>
              <li>IEC Certificate Modification</li>
              <li>BIS Certificate</li>
            </ul>
          </div>

          {/* Registration */}
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-3'>
              Registration
            </h3>
            <ul className='space-y-2 text-sm'>
              <li>TM Registration</li>
              <li>TM Objection</li>
              <li>TM Renewal</li>
              <li>Copyright Registration</li>
            </ul>
          </div>

          {/* GST */}
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-3'>GST</h3>
            <ul className='space-y-2 text-sm'>
              <li>GST Registration</li>
              <li>GST Filing</li>
              <li>GST Modification</li>
              <li>GST Cancellation</li>
            </ul>
          </div>

          {/* Accounting & Tax */}
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-3'>
              Accounting & Tax
            </h3>
            <ul className='space-y-2 text-sm'>
              <li>PF-ESIC Registration</li>
              <li>PF-ESIC Return Filing</li>
              <li>Online Bookkeeping</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-700 mt-10 pt-6'>
          {/* Brand Info */}
          <div className='text-sm text-gray-400 mb-6'>
            <p className='font-semibold text-gray-800'>Legal Advice India</p>
            <p className='mt-2'>
              Legal Advice India is a part of Demo Legal Services Pvt Ltd,
              registered under the Companies Act, 2013.
            </p>
          </div>

          {/* Disclaimer */}
          <div className='text-xs text-gray-500 mb-6 leading-relaxed'>
            Disclaimer : This website is privately operated and not affiliated
            with any government entity. We do not represent or are affiliated
            with, endorsed by, or in any way connected to any government body or
            department. The form provided is not for official registration
            purposes; rather, it&apos;s designed to gather information from our
            clients to help us better understand their business or needs. By
            continuing to use this website, you acknowledge that we are a
            private company. We offer assistance based on customer requests, and
            the fees collected on this website are for consultancy services. We
            reserve the right to outsource cases/matters as deemed necessary. We
            are in the process of giving our brand a new name. Stay tuned for
            updates.
          </div>

          {/* Bottom Section */}
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
            {/* Social Links */}
            <div className='flex space-x-4'>
              <a href='#' className='hover:text-indigo-400 transition'>
                <Facebook size={18} />
              </a>
              <a href='#' className='hover:text-indigo-400 transition'>
                <Twitter size={18} />
              </a>
              <a href='#' className='hover:text-indigo-400 transition'>
                <Linkedin size={18} />
              </a>
              <a href='#' className='hover:text-indigo-400 transition'>
                <Instagram size={18} />
              </a>
              <a href='#' className='hover:text-indigo-400 transition'>
                <Youtube size={18} />
              </a>
              <a
                href='mailto:info@onlinelegalindia.com'
                className='hover:text-indigo-400 transition'
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Extra Links */}
            <div className='flex flex-wrap gap-4 text-xs text-gray-400'>
              <Link href='#'>Google Play</Link>
              <Link href='#'>App Store</Link>
              <Link href='#'>Careers</Link>
              <Link href='#'>Contact Us</Link>
              <Link href='#'>Blogs</Link>
              <Link href='#'>News</Link>
            </div>
          </div>

          {/* Grievance */}
          <p className='mt-6 text-xs text-gray-500'>
            For any grievance mail to:{" "}
            <a
              href='mailto:complain@example.com'
              className='text-indigo-400 hover:underline'
            >
              complain@example.com
            </a>
          </p>

          {/* Copyright */}
          <div className='mt-6 text-center text-xs text-gray-500'>
            © 2019 - {new Date().getFullYear()} Legal Advice India. Recognised
            by DPIIT, Government of India. |{" "}
            <Link href='#' className='hover:text-indigo-400'>
              Refund Policy
            </Link>{" "}
            |{" "}
            <Link href='#' className='hover:text-indigo-400'>
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href='#' className='hover:text-indigo-400'>
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
