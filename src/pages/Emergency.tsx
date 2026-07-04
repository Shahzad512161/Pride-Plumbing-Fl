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
import { BUSINESS_INFO } from '../data';

export function Emergency() {
  // SEO Setup
  useSeo({
    title: `24/7 Emergency Plumbing Florida | ${BUSINESS_INFO.name}`,
    description: `Urgent 24/7 emergency plumbing response across Florida. We fix burst pipes, active flooding, gas leaks, and blocked sewers immediately. Licensed plumbers. Call ${BUSINESS_INFO.phone}.`,
    canonicalUrl: window.location.origin + '/plumbing/emergency'
  });

  const breadcrumbItems = [
    { label: 'Services', path: '/plumbing' },
    { label: 'Emergency Plumbing' }
  ];

  const schemaCrumbs = [
    { name: 'Home', url: window.location.origin + '/' },
    { name: 'Plumbing', url: window.location.origin + '/plumbing' },
    { name: 'Emergency', url: window.location.origin + '/plumbing/emergency' }
  ];

  const emerServices = [
    {
      title: "Burst Pipes & Flooding",
      description: "Active pipe bursts can ruin structural drywall, carpeting, and valuables in minutes. We dispatch our nearest truck with rapid water extraction and line bypass gear.",
      icon: "AlertTriangle"
    },
    {
      title: "Dangerous Gas Leaks",
      description: "Smell sulfur or gas? Evacuate immediately and dial 911 first, then call our certified gas technicians. We isolate gas mains, pinpoint leaks with vapor sniffer snouts, and repair lines.",
      icon: "Flame"
    },
    {
      title: "Severe Sewer Backups",
      description: "Raw sewage backing up into toilets and bathtubs is a hazardous health emergency. We use mechanical snakes and high-power hydro jetters to breach main blockage obstacles instantly.",
      icon: "Shield"
    },
    {
      title: "Clogged Main Drains",
      description: "When multiple drains fail to drain, your main waste line is obstructed. Our 24/7 plumbers scope lines and clear obstructions to prevent interior water damage.",
      icon: "Droplets"
    },
    {
      title: "Water Heater Failures",
      description: "Flooding water heater tanks can compromise flooring. We shut down elements/mains, drain tanks safely, and handle emergency standard or tankless system replacements.",
      icon: "Flame"
    },
    {
      title: "Active Slab Leaks",
      description: "Hearing running water behind walls or beneath tiles? Slab leaks weaken your foundation. Our rapid repair technicians isolate foundation leaks non-destructively.",
      icon: "AlertTriangle"
    }
  ];

  return (
    <main id="emergency-plumbing-detail" className="flex-grow">
      {/* Schema */}
      <JsonLd type="Breadcrumbs" breadcrumbs={schemaCrumbs} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Page Header - Staged with warning/emergency red accents */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-red-800/10">
        {/* Subtle decorative grid/dots in background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.05] pointer-events-none" />
        
        {/* Animated blinking beacon indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-black/20 rounded-full text-[10px] font-bold tracking-wider uppercase">
          <span className="h-2 w-2 rounded-full bg-white animate-ping"></span>
          <span>Live Dispatcher Available</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left md:flex md:items-center md:justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <span className="text-red-200 font-bold uppercase tracking-wider text-xs">Immediate 24/7 Response Fleet</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Emergency Plumbing Services
            </h1>
            <p className="text-red-700 bg-red-100 inline-block px-2.5 py-1 rounded text-[10px] font-black tracking-wider uppercase mb-1">
              CALL TOLL-FREE 24 HOURS A DAY • 365 DAYS A YEAR
            </p>
            <p className="text-red-100 text-sm sm:text-base leading-relaxed">
              Active flooding, raw sewage, and toxic gas leaks require professional, immediate action. Pride Plumbing FL maintains rapid-dispatch emergency trucks strategically spread across Florida.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex-shrink-0">
            <a
              id="emergency-header-phone-cta"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-red-600 font-bold shadow-lg hover:bg-red-50 transition-all active:scale-95 text-sm"
            >
              <LucideIcon name="Phone" className="h-4.5 w-4.5 animate-bounce" />
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Specific Emergency services list */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              We Solve These Plumbing Emergencies Immediately
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Do not wait. Left untreated, water and sewer backflows can multiply property restoration costs exponentially. Call our hotline to send a master plumber.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {emerServices.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-red-100 hover:border-red-300 hover:shadow-md transition-all bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center justify-center p-2.5 rounded-lg bg-red-50 text-red-600 mb-4">
                    <LucideIcon name={service.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-red-800 mb-2">
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

      {/* Emergency First Aid Guidelines */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-xl border border-slate-200 shadow-sm space-y-8">
            <div className="flex items-center gap-3 text-red-600">
              <LucideIcon name="AlertTriangle" className="h-7 w-7" />
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                Plumbing Emergency? Do This First:
              </h2>
            </div>
            
            <p className="text-slate-500 text-sm leading-relaxed">
              Before our plumber arrives at your Florida residence or facility, taking these preventative safety steps can heavily limit property destruction:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <h3 className="font-display font-bold text-slate-800 text-base flex items-center gap-2">
                  <span className="flex items-center justify-center h-6 w-6 rounded bg-red-100 text-red-600 text-xs font-bold">1</span>
                  Shut Off Water Mains
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Locate your residential main water valve (typically located outside under a plastic green lid or near the hose bib connection) and rotate clockwise until fully tightened.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-bold text-slate-800 text-base flex items-center gap-2">
                  <span className="flex items-center justify-center h-6 w-6 rounded bg-red-100 text-red-600 text-xs font-bold">2</span>
                  De-energize Electronics
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  If active leaks are pooling water near power strips, electrical panels, or appliances, turn off the corresponding breaker switches immediately at your main breaker panel.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-bold text-slate-800 text-base flex items-center gap-2">
                  <span className="flex items-center justify-center h-6 w-6 rounded bg-red-100 text-red-600 text-xs font-bold">3</span>
                  Do Not Use Fixtures
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  If you experience a main sewer blockage backup, do not flush toilets, use dishwashers, or run faucets as waste has nowhere to escape and will overflow interior basins.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-bold text-slate-800 text-base flex items-center gap-2">
                  <span className="flex items-center justify-center h-6 w-6 rounded bg-red-100 text-red-600 text-xs font-bold">4</span>
                  Clear the Pathway
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Help our emergency plumbers save crucial time by clearing boxes, vehicles, or items away from crawlspaces, cleanouts, water heaters, and utility doors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Red CTA */}
      <CallToAction variant="emergency" />
    </main>
  );
}
