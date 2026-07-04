/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { JsonLd } from '../components/JsonLd';
import { LucideIcon } from '../components/LucideIcon';
import { CallToAction } from '../components/CallToAction';
import { BUSINESS_INFO, DETAILED_SERVICES } from '../data';

export function Residential() {
  // SEO Setup
  useSeo({
    title: `Residential Plumbing Services Florida | ${BUSINESS_INFO.name}`,
    description: `Expert residential plumbing services for Florida homeowners. Pipe repair, drain cleaning, water heaters, toilet/faucet fixtures. Fast response, transparent pricing.`,
    canonicalUrl: window.location.origin + '/plumbing/residential'
  });

  const breadcrumbItems = [
    { label: 'Services', path: '/plumbing' },
    { label: 'Residential Plumbing' }
  ];

  const schemaCrumbs = [
    { name: 'Home', url: window.location.origin + '/' },
    { name: 'Plumbing', url: window.location.origin + '/plumbing' },
    { name: 'Residential', url: window.location.origin + '/plumbing/residential' }
  ];

  // Specific Residential Services
  const resServices = [
    {
      title: "Pipe Repair & Replacement",
      description: "Fast fix for copper, PEX, and PVC pipes. We diagnose hidden slab or crawlspace pipe leaks with precision and offer complete house repipes.",
      icon: "Wrench"
    },
    {
      title: "Professional Drain Cleaning",
      description: "Clearing kitchen, shower, and toilet blockages. Our rooter machine and bio-safe drain cleaner restore original pipe flows without chemical damage.",
      icon: "Droplets"
    },
    {
      title: "Water Heater Installation & Repairs",
      description: "Expert servicing for standard gas/electric water heaters as well as high-efficiency tankless installations for endless hot water.",
      icon: "Flame"
    },
    {
      title: "Bathroom & Kitchen Plumbing",
      description: "Faucets, sinks, garbage disposals, luxury shower values, water lines, and professional plumbing hookups for washing machines and ice makers.",
      icon: "Wrench"
    },
    {
      title: "Sewer Line Inspections & Repairs",
      description: "Resolving backing-up residential sewer lines. We perform high-definition camera video scopes to target pipe breaks and roots accurately.",
      icon: "Shield"
    },
    {
      title: "Whole-Home Water Filtration",
      description: "Protecting your family and appliances from hard Florida water with whole-house filtration systems and high-efficiency water softeners.",
      icon: "Droplets"
    }
  ];

  return (
    <main id="residential-plumbing-detail" className="flex-grow">
      {/* Schema */}
      <JsonLd type="Breadcrumbs" breadcrumbs={schemaCrumbs} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200">
        {/* Subtle decorative grid/dots in background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left md:flex md:items-center md:justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <span className="text-blue-300 font-bold uppercase tracking-wider text-xs">Homeowner Plumbing Solutions</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Residential Plumbing Services
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Reliable, clean, and comprehensive plumbing services designed to protect your Florida home and family. From minor faucet drip fixes to complete sewer line reconstructions.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex-shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-blue-900 font-bold shadow-lg hover:bg-blue-50 transition-all active:scale-95 text-sm"
            >
              <LucideIcon name="Phone" className="h-4.5 w-4.5 text-blue-700" />
              <span>Call Local Team: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Service Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              Our Specific Home Plumbing Services
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Our residential plumbing specialists arrive in fully equipped, mobile trucks containing thousands of parts so we can resolve 95% of issues on the first visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {resServices.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center justify-center p-2.5 rounded-lg bg-blue-50 text-blue-600 mb-4">
                    <LucideIcon name={service.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signal Steps */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              A Service Experience Crafted with Pride
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              We treat your home with the utmost respect. Here is how we ensure a hassle-free service call:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative">
              <span className="absolute top-6 right-6 font-display font-extrabold text-3xl text-blue-100">01</span>
              <div className="inline-flex items-center justify-center p-2.5 rounded-lg bg-blue-50 text-blue-600 mb-6">
                <LucideIcon name="Clock" className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-slate-800 text-base mb-2">Punctual & Prepared</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We respect your busy schedule. We provide short appointment windows and call when we are on our way with GPS updates.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative">
              <span className="absolute top-6 right-6 font-display font-extrabold text-3xl text-blue-100">02</span>
              <div className="inline-flex items-center justify-center p-2.5 rounded-lg bg-blue-50 text-blue-600 mb-6">
                <LucideIcon name="HardHat" className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-slate-800 text-base mb-2">Clean Workspaces</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our technicians wear shoe boot covers, place defensive drop cloths, and thoroughly clean the work area before leaving your home.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative">
              <span className="absolute top-6 right-6 font-display font-extrabold text-3xl text-blue-100">03</span>
              <div className="inline-flex items-center justify-center p-2.5 rounded-lg bg-blue-50 text-blue-600 mb-6">
                <LucideIcon name="CreditCard" className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-slate-800 text-base mb-2">Upfront Transparent Pricing</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                No surprises. We diagnose the issue first and provide a flat-rate upfront quote before any wrench touches your pipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <CallToAction variant="primary" />
    </main>
  );
}
