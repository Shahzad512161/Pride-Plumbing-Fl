/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from './Link';
import { LucideIcon } from './LucideIcon';
import { BUSINESS_INFO } from '../data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-700 text-white p-2 rounded">
                <LucideIcon name="Wrench" className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                Pride Plumbing <span className="text-blue-500">FL</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {BUSINESS_INFO.description}
            </p>
            <div className="pt-2 flex items-center gap-4 text-slate-500">
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="Facebook">
                <LucideIcon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <LucideIcon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors" aria-label="Instagram">
                <LucideIcon name="Instagram" className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-white font-semibold tracking-wider text-xs uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/plumbing" className="text-sm text-slate-400 hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/plumbing/residential" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Residential Plumbing
                </Link>
              </li>
              <li>
                <Link to="/plumbing/commercial" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Commercial Plumbing
                </Link>
              </li>
              <li>
                <Link to="/plumbing/emergency" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Emergency Plumbing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Categories */}
          <div>
            <h3 className="font-display text-white font-semibold tracking-wider text-xs uppercase mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/plumbing/residential" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Residential Pipe Repair
                </Link>
              </li>
              <li>
                <Link to="/plumbing/residential" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Drain & Sewer Cleaning
                </Link>
              </li>
              <li>
                <Link to="/plumbing/commercial" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Commercial Hydro Jetting
                </Link>
              </li>
              <li>
                <Link to="/plumbing/commercial" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Slab Leak Detection
                </Link>
              </li>
              <li>
                <Link to="/plumbing/emergency" className="text-sm text-red-400 hover:text-red-300 font-semibold transition-colors flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  24/7 Emergency Repairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-display text-white font-semibold tracking-wider text-xs uppercase mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <LucideIcon name="Phone" className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Call Toll-Free 24/7</p>
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white hover:text-blue-400 font-semibold transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <LucideIcon name="Mail" className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Email Address</p>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-sm text-white hover:text-blue-400 transition-colors">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <LucideIcon name="MapPin" className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Corporate Address</p>
                  <p className="text-sm text-slate-400 leading-snug">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <LucideIcon name="Clock" className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Service Hours</p>
                  <p className="text-sm text-green-400 font-medium">
                    {BUSINESS_INFO.hours}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-slate-800">|</span>
            <span className="text-blue-500 font-semibold">Florida License Plumber State certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
