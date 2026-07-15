/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Head from 'next/head';
import { JsonLd } from '../components/JsonLd';
import { LucideIcon } from '../components/LucideIcon';
import { ServiceCard } from '../components/ServiceCard';
import { CallToAction } from '../components/CallToAction';
import { Link } from '../components/Link';
import {
  BUSINESS_INFO,
  FLORIDA_CITIES,
  SERVICE_CATEGORIES,
  DETAILED_SERVICES,
  TRUST_SIGNALS,
  TRUST_BADGES
} from '../data';

export default function Home() {
  const seoTitle = `${BUSINESS_INFO.name} | Florida's Premium Residential & Commercial Plumbing`;
  const seoDescription = `Need an expert plumber in Florida? ${BUSINESS_INFO.name} offers 24/7 emergency service, residential, and commercial plumbing. Fully licensed and insured. Call ${BUSINESS_INFO.phone}.`;

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
      </Head>

      <main id="homepage-content" className="flex-grow">
        {/* Schema Markup */}
        <JsonLd type="LocalBusiness" />

        {/* Split Top section matching 'Professional Polish' */}
        <section className="flex flex-col lg:flex-row min-h-[600px] border-b border-slate-200">
          {/* Left Column: Dark Blue Gradient Hero */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 sm:p-16 flex flex-col justify-center relative overflow-hidden">
            {/* Grid lines pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 100 100">
                <path d="M0 10h100M0 20h100M0 30h100M0 40h100M0 50h100M0 60h100M0 70h100M0 80h100M0 90h100" strokeWidth="0.5" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/30 rounded-full text-blue-100 text-xs font-semibold mb-6 uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                </span>
                <span>Available 24/7 Across Florida</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                Pride Plumbing <span className="text-blue-300">FL</span>
              </h1>
              
              <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-md leading-relaxed font-sans">
                {BUSINESS_INFO.tagline}. Quality residential and commercial plumbing solutions delivered with professional pride. From leaks to full installations.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  id="hero-call-cta"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="bg-white text-blue-900 px-6 py-3.5 rounded-xl font-bold shadow-xl hover:bg-blue-50 transition-all flex items-center gap-2 active:scale-95"
                >
                  <LucideIcon name="Phone" className="h-4.5 w-4.5 text-blue-700 animate-bounce" />
                  <span>Call Us: {BUSINESS_INFO.phone}</span>
                </a>
                <Link
                  to="/plumbing"
                  className="border-2 border-blue-400/50 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <span>Learn More</span>
                  <LucideIcon name="ArrowRight" className="h-4 w-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-4 border-t border-blue-400/20 pt-8">
                <div>
                  <p className="text-xl sm:text-2xl font-bold font-display">15+</p>
                  <p className="text-[10px] text-blue-200 uppercase font-semibold">Service Areas</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold font-display">Licensed</p>
                  <p className="text-[10px] text-blue-200 uppercase font-semibold">& Fully Insured</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold font-display">5-Star</p>
                  <p className="text-[10px] text-blue-200 uppercase font-semibold">Customer Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Specialties & Core Categories */}
          <div className="w-full lg:w-1/2 bg-slate-50 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="max-w-xl mx-auto w-full">
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Core Specialties</span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mt-1 mb-8">
                Professional Plumbing Solutions
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {SERVICE_CATEGORIES.map((category) => (
                  <ServiceCard
                    key={category.id}
                    title={category.title.split(' ')[0]} // e.g. "Residential" instead of "Residential Plumbing"
                    description={category.id === 'emergency' ? 'Immediate 24/7 help' : category.id === 'commercial' ? 'Business & Office care' : 'Home repairs & upkeep'}
                    iconName={category.iconName}
                    path={category.path}
                    accent={category.id === 'emergency'}
                  />
                ))}
              </div>

              <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 p-2 rounded text-white shrink-0">
                    <LucideIcon name="Shield" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Licensed & Insured</p>
                    <p className="text-[10px] text-slate-500">State of Florida Certification #CFC142856</p>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold text-slate-800">Pricing Guarantee</p>
                  <p className="text-[10px] text-slate-500 font-medium text-green-600">Transparent Upfront Costs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. DETAILED SERVICES GRID */}
        <section id="detailed-services" className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">Comprehensive Capabilities</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 mt-2 mb-4">
                Our Detailed Plumbing Services
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm">
                No plumbing job is too big or too small. Our highly equipped trucks carry the latest diagnostic cameras, hydro jetters, and repair components.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {DETAILED_SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all group"
                >
                  <div className="inline-flex items-center justify-center p-2.5 rounded-lg bg-blue-50 text-blue-600 mb-4 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <LucideIcon name={service.iconName} className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WHY CHOOSE US */}
        <section id="why-choose-us" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">The Pride Promise</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 mt-2 mb-4">
                Why Florida Chooses Pride Plumbing FL
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm">
                We hold our technicians to the highest standard. Experience the peace of mind that comes with certified master plumbing experts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {TRUST_SIGNALS.map((signal) => (
                <div key={signal.id} className="text-center p-4">
                  <div className="inline-flex items-center justify-center p-4 rounded-full bg-blue-50 text-blue-600 mb-5">
                    <LucideIcon name={signal.iconName} className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-800 mb-3">
                    {signal.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {signal.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SERVICE AREAS */}
        <section id="service-areas" className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">Florida Coverage</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 mt-2 mb-4">
                Our Professional Service Areas
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm">
                We cover all of Florida. Our mobile dispatch fleets are strategically located to guarantee prompt, localized response times in major Florida municipalities:
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-1.5 max-w-5xl mx-auto">
              {FLORIDA_CITIES.map((city) => (
                <div
                  key={city}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-white border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider hover:border-blue-500 hover:text-blue-600 hover:shadow-sm transition-all cursor-default"
                >
                  <MapPinWrapper city={city} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. TRUST SECTION BADGES */}
        <section id="trust-badges-section" className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge.id}
                  className="flex items-center gap-4 p-5 rounded-xl bg-slate-50 border border-slate-150"
                >
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3.5 rounded-lg">
                    <LucideIcon name={badge.iconName} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-800 text-sm">
                      {badge.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {badge.id === 'licensed' && 'Verified Florida state certified master licenses.'}
                      {badge.id === 'equipped' && 'Arriving with fully stocked parts and expert machinery.'}
                      {badge.id === 'transparent' && 'Upfront quotes and 0% hidden service diagnostic fees.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FINAL CALL TO ACTION */}
        <CallToAction variant="primary" />
      </main>
    </>
  );
}

// MapPin helper to prevent hydration mismatch for dynamic layout variables
function MapPinWrapper({ city }: { city: string }) {
  return (
    <>
      <LucideIcon name="MapPin" className="h-4 w-4 text-blue-600 flex-shrink-0" />
      <span>{city}</span>
    </>
  );
}
