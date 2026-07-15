/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Link, navigateTo } from './Link';
import { LucideIcon } from './LucideIcon';
import { BUSINESS_INFO } from '../data';

export function Header() {
  const router = useRouter();
  const currentPath = router ? router.asPath.split('?')[0] : '/';
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu on navigate
  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  // Track scroll position for subtle box-shadow / backdrop effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/plumbing' },
    { label: 'Residential', path: '/plumbing/residential' },
    { label: 'Commercial', path: '/plumbing/commercial' },
    { label: 'Emergency', path: '/plumbing/emergency', isEmergency: true },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200'
          : 'bg-white border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center gap-2 group focus:outline-none"
            >
              <div className="bg-blue-700 p-1.5 rounded transition-transform group-hover:scale-105 shadow-md shadow-blue-100">
                <LucideIcon name="Wrench" className="h-5 w-5 text-white transform group-hover:rotate-12 transition-transform" />
              </div>
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors">
                Pride Plumbing <span className="text-blue-600">FL</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-6 h-full">
            {navLinks.map((link) => {
              const active = currentPath === link.path;
              if (link.isEmergency) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-bold transition-all duration-200 py-1.5 border-b-2 ${
                      active
                        ? 'text-red-600 border-red-600'
                        : 'text-red-600 border-transparent hover:text-red-700 hover:border-red-200'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-200 py-1.5 border-b-2 ${
                    active
                      ? 'text-blue-600 border-blue-600'
                      : 'text-slate-600 border-transparent hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call CTA */}
          <div className="hidden md:flex items-center">
            <a
              id="cta-header-phone"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100 active:scale-[0.98]"
            >
              <LucideIcon name="Phone" className="h-4 w-4" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-blue-600 hover:bg-gray-50 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <LucideIcon name="X" className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <LucideIcon name="Menu" className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100 ${
          isOpen ? 'max-h-96 opacity-100 bg-white' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => {
            const active = currentPath === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
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
              <LucideIcon name="Phone" className="h-5 w-5" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
