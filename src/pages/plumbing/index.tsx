/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Head from 'next/head';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { JsonLd } from '../../components/JsonLd';
import { LucideIcon } from '../../components/LucideIcon';
import { ServiceCard } from '../../components/ServiceCard';
import { CallToAction } from '../../components/CallToAction';
import { BUSINESS_INFO, SERVICE_CATEGORIES, DETAILED_SERVICES } from '../../data';

export default function Plumbing() {
  const seoTitle = `Plumbing Services | ${BUSINESS_INFO.name}`;
  const seoDescription = `Browse all residential, commercial, and emergency plumbing services offered by ${BUSINESS_INFO.name}. Licensed plumbers in Florida. Upfront quotes, 24/7 service.`;

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://prideplumbingfl.com';

  const breadcrumbItems = [
    { label: 'All Plumbing Services' }
  ];

  const schemaCrumbs = [
    { name: 'Home', url: origin + '/' },
    { name: 'Plumbing', url: origin + '/plumbing' }
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

      <main id="plumbing-services-index" className="flex-grow">
        {/* Schema */}
        <JsonLd type="Breadcrumbs" breadcrumbs={schemaCrumbs} />

        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Header */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
            <span className="text-blue-300 font-bold tracking-widest uppercase text-xs">Pride Plumbing FL</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Complete Plumbing Services
            </h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              From quick residential repairs to high-capacity commercial construction and immediate 24/7 emergency dispatches, we do it all with transparency and care.
            </p>
          </div>
        </section>

        {/* Main categories overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                Our Core Divisions
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                Select one of our specialized divisions below to explore detailed services, licensing certifications, and response guarantees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICE_CATEGORIES.map((cat) => (
                <ServiceCard
                  key={cat.id}
                  title={cat.title}
                  description={cat.description}
                  iconName={cat.iconName}
                  path={cat.path}
                  accent={cat.id === 'emergency'}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Detailed services list with features */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                A-Z Plumbing Capabilities
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                Our Florida licensed plumbers possess the training and master-level equipment to execute any task:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {DETAILED_SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4"
                >
                  <div className="flex-shrink-0 bg-blue-50 text-blue-600 p-2.5 rounded-lg h-10 w-10 flex items-center justify-center">
                    <LucideIcon name={srv.iconName} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-800 text-sm mb-1">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust factors callout */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex p-3 rounded bg-blue-50 text-blue-600">
              <LucideIcon name="Shield" className="h-7 w-7" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-800">
              Every Plumber is Licensed & Background Checked
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
              We hold ourselves to strict standards. When a Pride Plumbing FL technician enters your home or business, you can rest assured they are clean, courteous, state-certified, and highly vetted.
            </p>
            <div className="pt-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors active:scale-95 text-sm"
              >
                <LucideIcon name="Phone" className="h-4.5 w-4.5" />
                <span>Request Quote: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CallToAction variant="primary" />
      </main>
    </>
  );
}
