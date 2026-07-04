import React from 'react';
import Link from 'next/link';
import {
  Wrench,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';

const BUSINESS_INFO = {
  name: "Pride Plumbing FL",
  phone: "+1 (844) 973-6611",
  phoneRaw: "8449736611",
  address: "5711 NE 14th Ave Ste 200, Fort Lauderdale, FL 33334, United States",
  email: "info@prideplumbingfl.com",
  hours: "24/7 Emergency Service",
  tagline: "Florida's Most Trusted Plumbing Professionals",
  description: "Pride Plumbing FL offers premium residential, commercial, and 24/7 emergency plumbing solutions across all of Florida. Our licensed and insured plumbers provide fast, transparent, and expert service when you need it most."
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Wrench className="h-5 w-5" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Pride Plumbing <span className="text-blue-500">FL</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {BUSINESS_INFO.description}
            </p>
            <div className="pt-2 flex items-center gap-4 text-gray-500">
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold tracking-wider text-sm uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/plumbing" className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link href="/plumbing/residential" className="hover:text-white transition-colors">Residential Plumbing</Link></li>
              <li><Link href="/plumbing/commercial" className="hover:text-white transition-colors">Commercial Plumbing</Link></li>
              <li><Link href="/plumbing/emergency" className="hover:text-white transition-colors">Emergency Plumbing</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold tracking-wider text-sm uppercase mb-6">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/plumbing/residential" className="hover:text-white transition-colors">Residential Pipe Repair</Link></li>
              <li><Link href="/plumbing/residential" className="hover:text-white transition-colors">Drain & Sewer Cleaning</Link></li>
              <li><Link href="/plumbing/commercial" className="hover:text-white transition-colors">Commercial Hydro Jetting</Link></li>
              <li><Link href="/plumbing/commercial" className="hover:text-white transition-colors">Slab Leak Detection</Link></li>
              <li>
                <Link href="/plumbing/emergency" className="text-red-400 hover:text-red-300 font-semibold transition-colors flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  24/7 Emergency Repairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-semibold tracking-wider text-sm uppercase mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">Call Toll-Free 24/7</p>
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white hover:text-blue-400 font-semibold transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">Email Address</p>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:text-blue-400 transition-colors">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">Corporate Address</p>
                  <p className="text-gray-405 leading-snug">{BUSINESS_INFO.address}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>&copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-gray-700">|</span>
            <span className="text-blue-600 font-semibold">Florida License Plumber State certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
