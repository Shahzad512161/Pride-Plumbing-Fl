/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LucideIcon } from './LucideIcon';
import { BUSINESS_INFO } from '../data';

interface CallToActionProps {
  variant?: 'primary' | 'emergency';
  title?: string;
  description?: string;
}

export function CallToAction({
  variant = 'primary',
  title,
  description
}: CallToActionProps) {
  const isEmergency = variant === 'emergency';

  const defaultTitle = isEmergency
    ? "Need Emergency Plumbing Right Now?"
    : "Ready to Schedule Your Plumbing Service?";

  const defaultDescription = isEmergency
    ? "Active leaks, burst pipes, and backed-up sewers don't wait. Our dispatchers are standing by 24/7. Get a professional plumber sent to your Florida door immediately."
    : "Get transparent upfront pricing, certified technicians, and guaranteed satisfaction. Call our friendly local dispatch team to request booking.";

  const displayTitle = title || defaultTitle;
  const displayDescription = description || defaultDescription;

  return (
    <section
      id={isEmergency ? "emergency-cta" : "booking-cta"}
      className="py-16 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden rounded-3xl p-8 sm:p-12 border ${
          isEmergency
            ? 'bg-gradient-to-br from-red-600 to-red-700 border-red-700/20 text-white shadow-xl shadow-red-100'
            : 'bg-gradient-to-br from-blue-900 to-blue-700 border-blue-950/20 text-white shadow-xl shadow-blue-900/10'
        }`}>
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-48 h-48 bg-white/5 rounded-full blur-xl pointer-events-none" />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8 z-10">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10">
                <LucideIcon name={isEmergency ? "AlertTriangle" : "Shield"} className={`h-4 w-4 ${isEmergency ? 'text-red-200' : 'text-blue-200'}`} />
                <span>{isEmergency ? "24/7 Rapid Emergency Response" : "Quality Guaranteed"}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                {displayTitle}
              </h2>
              <p className={`text-base sm:text-lg leading-relaxed ${isEmergency ? 'text-red-100' : 'text-blue-100'}`}>
                {displayDescription}
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-3">
              <span className="text-xs uppercase tracking-wider text-white/60 font-semibold">
                Click to Call Dispatch:
              </span>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-bold shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] ${
                  isEmergency
                    ? 'bg-white text-red-600 hover:bg-red-50 hover:shadow-white/20'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/20'
                }`}
              >
                <LucideIcon name="Phone" className="h-5 w-5 animate-bounce" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <p className="text-xs text-white/50">
                Local, Licensed Plumbers • 100% Satisfaction Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
