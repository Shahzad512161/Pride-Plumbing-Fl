/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Head from 'next/head';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { JsonLd } from '../../components/JsonLd';
import { LucideIcon } from '../../components/LucideIcon';
import { CallToAction } from '../../components/CallToAction';
import { BUSINESS_INFO } from '../../data';

export default function Commercial() {
  const seoTitle = `Commercial Plumbing Services Florida | ${BUSINESS_INFO.name}`;
  const seoDescription = `High-capacity commercial plumbing solutions for Florida businesses. Office, restaurant, retail, and industrial facilities. Licensed & certified team. Call ${BUSINESS_INFO.phone}.`;

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://prideplumbingfl.com';

  const breadcrumbItems = [
    { label: 'Services', path: '/plumbing' },
    { label: 'Commercial Plumbing' }
  ];

  const schemaCrumbs = [
    { name: 'Home', url: origin + '/' },
    { name: 'Plumbing', url: origin + '/plumbing' },
    { name: 'Commercial', url: origin + '/plumbing/commercial' }
  ];

  const commServices = [
    {
      title: "Office Plumbing Systems",
      description: "Restroom maintenance, water fountains, breakroom sinks, drainage systems, and certified backflow preventer installations for office complexes.",
      icon: "Building2"
    },
    {
      title: "Restaurant & Kitchen Plumbing",
      description: "Grease trap cleanouts, high-velocity commercial dishwasher lines, floor drain cleanings, and emergency backup mitigation to avoid health inspection shut downs.",
      icon: "Wrench"
    },
    {
      title: "Retail & Multi-Tenant Complexes",
      description: "Rapid plumbing installations, multi-floor sewage lines, utility hookups, and preventative maintenance agreements for malls, plazas, and shopping complexes.",
      icon: "Shield"
    },
    {
      title: "Industrial & Manufacturing Systems",
      description: "Heavy-duty piping, high-capacity water heaters, backflow testing, chemical-resistant lines, and pressure regulating valves designed for high demand.",
      icon: "HardHat"
    },
    {
      title: "Commercial Hydro Jetting",
      description: "Using heavy machinery to scour sewer mains with 4000 PSI of high-pressure water, dissolving hard scale and baked grease completely.",
      icon: "Droplets"
    },
    {
      title: "Precision Slab Leak Detection",
      description: "Locating hidden pipe leaks under concrete slab foundations with non-destructive thermal imaging, acoustic gear, and electronic tracers.",
      icon: "AlertTriangle"
    }
  ];

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

      <main id="commercial-plumbing-detail" className="flex-grow">
        {/* Schema */}
        <JsonLd type="Breadcrumbs" breadcrumbs={schemaCrumbs} />

        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Header */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left md:flex md:items-center md:justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <span className="text-blue-300 font-bold uppercase tracking-wider text-xs">Commercial Facility Solutions</span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Commercial Plumbing Services
              </h1>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                Minimizing corporate downtime and ensuring strict building code compliance. Our Florida certified master plumbers handle high-capacity lines, complex sewer networks, and preventative system servicing.
              </p>
            </div>
            <div className="mt-8 md:mt-0 flex-shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-blue-900 font-bold shadow-lg hover:bg-blue-50 transition-all active:scale-95 text-sm"
              >
                <LucideIcon name="Phone" className="h-4.5 w-4.5 text-blue-700" />
                <span>Contact Commercial Team: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Specific Commercial services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                Our Specific Commercial Plumbing Capabilities
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                We coordinate closely with property managers, building engineers, and facility coordinators to schedule repairs during off-peak hours and minimize business interruption.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {commServices.map((service, idx) => (
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

        {/* Commercial trust elements */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">Preventative Care</span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-800 leading-tight tracking-tight">
                  Minimize Facility Disruption with Custom Maintenances
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Emergency shutdowns cost time and revenue. Pride Plumbing FL offers customized commercial maintenance contracts that include regular line scoping, grease trap servicing, and backflow certification.
                </p>
                <ul className="space-y-3.5">
                  {[
                    "Annual or bi-annual backflow preventer certifications.",
                    "Preventative commercial grease trap & drain water treatments.",
                    "Priority emergency response limits (sub-2 hour dispatch).",
                    "Dedicated account coordinators for easy paperless billing."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <LucideIcon name="CheckCircle" className="h-4.5 w-4.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 sm:p-10 rounded-xl border border-slate-200 shadow-sm space-y-6">
                <h3 className="font-display font-extrabold text-lg text-slate-800">
                  Authorized Commercial Plumbing Contractor
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We carry extensive liability insurance, full worker's comp, and specialized commercial endorsements. Our technicians are fully background checked and trained on occupational safety guidelines (OSHA).
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-100 text-center">
                    <span className="block font-display font-black text-2xl text-blue-600">100%</span>
                    <span className="text-xs font-semibold text-slate-600">Licensed Plumbers</span>
                  </div>
                  <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-100 text-center">
                    <span className="block font-display font-black text-2xl text-blue-600">OSHA</span>
                    <span className="text-xs font-semibold text-slate-600">Compliant Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CallToAction variant="primary" />
      </main>
    </>
  );
}
