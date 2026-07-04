/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { JsonLd } from '../components/JsonLd';
import { BUSINESS_INFO } from '../data';
import { LucideIcon } from '../components/LucideIcon';

export function PrivacyPolicy() {
  const breadcrumbItems = [{ label: 'Privacy Policy' }];

  return (
    <div id="privacy-policy-page" className="bg-white min-h-screen">
      <JsonLd type="LocalBusiness" />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-blue-300 font-bold tracking-widest uppercase text-xs">Pride Plumbing FL Legal Center</span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
            Effective Date: July 4, 2026. This policy explains how we collect, protect, and handle your data in compliance with Florida regulations and consumer protection frameworks.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-10 text-slate-700">
          
          <div className="border-l-4 border-blue-600 pl-4 py-1 bg-slate-50 rounded-r-lg">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              At <strong>{BUSINESS_INFO.name}</strong>, we are committed to defending your digital privacy with the same pride we bring to fixing your pipes. This document details our policies regarding user submission data, quote requests, and call transcripts.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg font-bold text-slate-800 flex items-center gap-2">
              <LucideIcon name="Shield" className="h-5 w-5 text-blue-600" />
              1. Information We Collect
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
              When you call us or request a plumbing service quote through our website, we may collect the following details:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-500 space-y-1.5">
              <li><strong>Contact Information:</strong> Your name, phone number, email address, and physical service address.</li>
              <li><strong>Plumbing Project Details:</strong> Description of the leakage, emergency status, or required commercial upgrades.</li>
              <li><strong>Technical Metadata:</strong> IP addresses, browser types, and access timestamps stored for security and fraud protection.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg font-bold text-slate-800 flex items-center gap-2">
              <LucideIcon name="CheckCircle" className="h-5 w-5 text-blue-600" />
              2. How We Use Your Information
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
              We process your personal information strictly to deliver reliable plumbing solutions:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-500 space-y-1.5">
              <li>To dispatch local Florida licensed plumbers directly to your doorstep.</li>
              <li>To answer emergency line queries and provide rapid-response advice.</li>
              <li>To send transparent upfront flat-rate quotes and process invoices.</li>
              <li>To comply with state regulatory building inspection codes and safety standards.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg font-bold text-slate-800 flex items-center gap-2">
              <LucideIcon name="Lock" className="h-5 w-5 text-blue-600" />
              3. Data Protection & Security
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
              We utilize production-grade administrative and digital security barriers (including SSL/TLS data transfer protection) to guard your personal credentials from unauthorized access. We never sell, lease, or rent customer call logs or location coordinates to third-party advertisers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg font-bold text-slate-800 flex items-center gap-2">
              <LucideIcon name="Info" className="h-5 w-5 text-blue-600" />
              4. Florida Privacy & CCPA Compliance
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
              Under the Florida Information Protection Act (FIPA) and similar consumer rights frameworks, you have the following privileges:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-500 space-y-1.5">
              <li>The right to request a summary of the contact coordinates and details we store.</li>
              <li>The right to request immediate erasure of your residential history or previous call-out logs.</li>
              <li>The right to be free from discrimination for exercising your digital privacy privileges.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg font-bold text-slate-800 flex items-center gap-2">
              <LucideIcon name="Phone" className="h-5 w-5 text-blue-600" />
              5. Privacy Questions & Opt-Out
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
              To update your details or request a copy of your customer records, please send an inquiry to our support email or call us toll-free:
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
