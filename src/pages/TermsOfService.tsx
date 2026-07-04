/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { JsonLd } from '../components/JsonLd';
import { BUSINESS_INFO } from '../data';
import { LucideIcon } from '../components/LucideIcon';

export function TermsOfService() {
  const breadcrumbItems = [{ label: 'Terms of Service' }];

  return (
    <div id="terms-of-service-page" className="bg-white min-h-screen">
      <JsonLd type="LocalBusiness" />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-blue-300 font-bold tracking-widest uppercase text-xs">Pride Plumbing FL Legal Center</span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Terms of Service
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
            Effective Date: July 4, 2026. These terms govern all residential repair, commercial installation, and emergency service calls performed in the State of Florida.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-10 text-slate-700">
          
          <div className="border-l-4 border-blue-600 pl-4 py-1 bg-slate-50 rounded-r-lg">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              By requesting a dispatch or authorizing a digital service estimate from <strong>{BUSINESS_INFO.name}</strong>, you accept and agree to the following terms and guidelines.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg font-bold text-slate-800 flex items-center gap-2">
              <LucideIcon name="Shield" className="h-5 w-5 text-blue-600" />
              1. Upfront Pricing & Estimates
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
              We stand by transparent, ethical business pricing. Our dispatchers will outline any standard trip or service diagnostic fees prior to sending a truck. Upon inspection, your assigned Florida licensed plumber will provide a written, flat-rate estimate detailing all parts, labor, and compliance requirements. Work will not commence until you sign/consent to the estimate.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg font-bold text-slate-800 flex items-center gap-2">
              <LucideIcon name="Wrench" className="h-5 w-5 text-blue-600" />
              2. Work Authorization & Site Access
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
              To complete the authorized plumbing work:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-500 space-y-1.5">
              <li>The customer must provide unobstructed access to the service workspace (e.g. cleanouts, main water valves, crawlspaces, water heaters, and utility panels).</li>
              <li>An adult representative (18+ years old) authorized to make financial and structural decision approvals must remain present on-site during the duration of work.</li>
              <li>The client must ensure pets, children, and third-party contractors are kept safely clear of heavy equipment and workspace elements.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg font-bold text-slate-800 flex items-center gap-2">
              <LucideIcon name="Shield" className="h-5 w-5 text-blue-600" />
              3. Service Warranties & Guarantees
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
              We pride ourselves on master craftsmanship. All residential and commercial labor performed by Pride Plumbing FL includes a comprehensive warranty period. Standard warranties apply to our specific installations (e.g. drain cleaning, water heaters, pipe replacements, and fixtures). Our team will repair or replace any malfunctioning component caused by labor defects during the warranty window at 0% cost to you. Warranties do not cover client negligence, system abuse, or acts of God (floods, hurricanes, ground shifts, etc.).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg font-bold text-slate-800 flex items-center gap-2">
              <LucideIcon name="Clock" className="h-5 w-5 text-blue-600" />
              4. Emergency Dispatch Terms
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
              Emergency dispatches are available 24/7. Because emergency services involve real-time routing of highly specialized master technicians, cancellation fees may apply once a truck is in transit. Our dispatch team will clearly communicate all details on the intake call.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg font-bold text-slate-800 flex items-center gap-2">
              <LucideIcon name="Lock" className="h-5 w-5 text-blue-600" />
              5. State Regulations & Compliance
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
              All plumbing works comply with the Florida Building Code. When a municipal permit or administrative building inspection is legally required, we handle the document filings on your behalf.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg font-bold text-slate-800 flex items-center gap-2">
              <LucideIcon name="Phone" className="h-5 w-5 text-blue-600" />
              6. Get in Touch for Legal Inquiries
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
              If you have any questions, disputes, or feedback regarding our service agreements, please contact our administrative team:
            </p>
            <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-lg text-xs space-y-1">
              <p className="font-bold text-slate-800">{BUSINESS_INFO.name}</p>
              <p className="text-slate-500">Email: {BUSINESS_INFO.email}</p>
              <p className="text-slate-500">Phone: {BUSINESS_INFO.phone}</p>
              <p className="text-slate-500">Corporate Address: {BUSINESS_INFO.address}</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
