"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Wrench,
  Phone,
  Menu,
  X
} from 'lucide-react';

const BUSINESS_INFO = {
  name: "Pride Plumbing FL",
  phone: "+1 (844) 973-6611",
  phoneRaw: "8449736611",
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/plumbing' },
    { label: 'Residential', path: '/plumbing/residential' },
    { label: 'Commercial', path: '/plumbing/commercial' },
    { label: 'Emergency', path: '/plumbing/emergency' }
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-100'
          : 'bg-white border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group focus:outline-none">
              <div className="bg-blue-600 text-white p-2 rounded-lg transition-transform group-hover:scale-105 shadow-md shadow-blue-200">
                <Wrench className="h-6 w-6 transform group-hover:rotate-12 transition-transform" />
              </div>
              <span className="font-bold text-xl sm:text-2xl tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
                Pride Plumbing <span className="text-blue-600">FL</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const active = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-blue-600 ${
                    active
                      ? 'text-blue-600 bg-blue-50/50 font-semibold'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-100 hover:bg-blue-700 hover:shadow-blue-200 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Phone className="h-4 w-4" />
              <span>Call Us: {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-blue-600 hover:bg-gray-50 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100 ${
          isOpen ? 'max-h-96 opacity-100 bg-white' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  active
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 pb-2 px-4 border-t border-gray-100 mt-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
