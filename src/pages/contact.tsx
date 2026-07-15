/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Head from 'next/head';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { JsonLd } from '../components/JsonLd';
import { BUSINESS_INFO } from '../data';
import { LucideIcon } from '../components/LucideIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Residential',
    isEmergency: false,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  const breadcrumbItems = [{ label: 'Contact Us' }];

  const seoTitle = `Contact Us | ${BUSINESS_INFO.name}`;
  const seoDescription = `Contact Pride Plumbing FL. Request an appointment or quote for residential and commercial plumbing. Call ${BUSINESS_INFO.phone} for 24/7 emergency help.`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      
      if (name === 'isEmergency' && checked) {
        setShowEmergencyModal(true);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending data to API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: 'Residential',
        isEmergency: false,
        message: '',
      });
    }, 1200);
  };

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

      <div id="contact-page" className="bg-white min-h-screen">
        <JsonLd type="LocalBusiness" />
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
            <span className="text-blue-300 font-bold tracking-widest uppercase text-xs">Get In Touch</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Contact Pride Plumbing FL
            </h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Need an estimate, inspection, or custom commercial maintenance account? Reach our dispatch office directly.
            </p>
          </div>
        </section>

        {/* Critical Quick Response Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-lg text-red-600 shrink-0">
                <LucideIcon name="AlertTriangle" className="h-6 w-6 animate-pulse" />
              </div>
              <div>
                <h3 className="font-display font-black text-red-800 text-base">
                  Have an Active Leak, Burst Pipe, or Sewer Flooding?
                </h3>
                <p className="text-xs text-red-600 mt-1 leading-relaxed">
                  Online messages are reviewed within 2 hours. For immediate 15-minute dispatch and 24/7 emergency service, <strong>bypassing the form and calling now is highly recommended.</strong>
                </p>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <a
                id="contact-quick-call-cta"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 text-white font-bold rounded-lg text-sm uppercase tracking-wider shadow-lg shadow-red-200 hover:bg-red-700 transition-all active:scale-95 w-full md:w-auto"
              >
                <LucideIcon name="Phone" className="h-4 w-4" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Grid Layout: Form and Info + Map */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-8 relative">
              
              {isSuccess && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 rounded-xl flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
                  <div className="h-14 w-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                    <LucideIcon name="CheckCircle" className="h-8 w-8" />
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-slate-800 mb-2">
                    Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed mb-6">
                    Thank you for contacting Pride Plumbing FL. Our Florida dispatchers have routed your inquiry to our service manager. We will reach back to you within 2 hours to confirm your appointment.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-lg text-xs uppercase tracking-wider hover:bg-blue-700 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              )}

              <h2 className="font-display text-xl font-bold text-slate-800 mb-2">
                Online Appointment & Quote Request
              </h2>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Fill out this form to schedule a non-emergency appointment. For commercial preventative maintenance contracts or residential updates, we'll coordinate around your hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[10px] uppercase font-bold text-slate-600 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[10px] uppercase font-bold text-slate-600 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(954) 555-0199"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase font-bold text-slate-600 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="johndoe@example.com"
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-[10px] uppercase font-bold text-slate-600 mb-1.5">
                    Service Division
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Residential">Residential Plumbing (repairs, fixtures, cleanouts)</option>
                    <option value="Commercial">Commercial Facilities (inspection, jetting, grease traps)</option>
                    <option value="Emergency">Emergency Callout (active leaks, bursts)</option>
                  </select>
                </div>

                <div className="p-3 bg-red-50/50 border border-red-100 rounded-lg flex items-center gap-3">
                  <input
                    id="isEmergency"
                    name="isEmergency"
                    type="checkbox"
                    checked={formData.isEmergency}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-slate-300 rounded shrink-0"
                  />
                  <label htmlFor="isEmergency" className="text-xs font-bold text-red-800 cursor-pointer">
                    Yes, this is an urgent 24/7 plumbing emergency
                  </label>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] uppercase font-bold text-slate-600 mb-1.5">
                    Describe the Plumbing Issue
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please specify location of leaks, fixtures affected, or custom maintenance details..."
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg text-xs uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-md shadow-blue-100 flex items-center justify-center gap-2 disabled:bg-slate-400 disabled:shadow-none"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending details...</span>
                    </>
                  ) : (
                    <>
                      <LucideIcon name="Wrench" className="h-4 w-4" />
                      <span>Submit Appointment Request</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info + Map Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white border border-slate-200 p-6 rounded-xl space-y-6">
                <h3 className="font-display font-bold text-slate-800 text-base">
                  Corporate Office Info
                </h3>
                
                <ul className="space-y-4 text-xs">
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-50 p-2 rounded text-blue-600 shrink-0">
                      <LucideIcon name="Phone" className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="uppercase text-[10px] font-bold text-slate-400">Toll-Free Helpline</p>
                      <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-slate-800 font-bold hover:text-blue-600 transition-colors">
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="bg-blue-50 p-2 rounded text-blue-600 shrink-0">
                      <LucideIcon name="Mail" className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="uppercase text-[10px] font-bold text-slate-400">Corporate Email desk</p>
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-800 font-bold hover:text-blue-600 transition-colors">
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="bg-blue-50 p-2 rounded text-blue-600 shrink-0">
                      <LucideIcon name="MapPin" className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="uppercase text-[10px] font-bold text-slate-400">Dispatch Headquarters</p>
                      <p className="text-slate-600 font-medium leading-relaxed">
                        {BUSINESS_INFO.address}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="bg-blue-50 p-2 rounded text-blue-600 shrink-0">
                      <LucideIcon name="Clock" className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="uppercase text-[10px] font-bold text-slate-400">Office Working Hours</p>
                      <p className="text-slate-600 font-medium">
                        Mon - Sun, 24 Hours (including holidays)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Google Map Iframe Container */}
              <div className="bg-white border border-slate-200 p-2 rounded-xl shadow-sm overflow-hidden flex flex-col">
                <div className="p-3 text-xs flex items-center justify-between border-b border-slate-100 bg-slate-50/50 rounded-t-lg">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <LucideIcon name="MapPin" className="h-4 w-4 text-red-600" />
                    Fort Lauderdale Headquarters
                  </span>
                  <span className="text-[10px] text-green-600 font-semibold uppercase">Active Region</span>
                </div>
                <div className="relative w-full h-64 sm:h-72 bg-slate-100">
                  <iframe
                    title="Pride Plumbing FL Office Location Map"
                    src="https://maps.google.com/maps?q=5711%20NE%2014th%20Ave%20Ste%20200,%20Fort%20Lauderdale,%20FL%2033334&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 w-full h-full border-0 rounded-b-lg"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Emergency Modal Alert */}
        {showEmergencyModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white rounded-xl border border-red-200 max-w-md w-full p-6 shadow-2xl relative">
              <button
                onClick={() => setShowEmergencyModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <LucideIcon name="X" className="h-5 w-5" />
              </button>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded bg-red-100 text-red-600 flex items-center justify-center">
                  <LucideIcon name="Phone" className="h-6 w-6" />
                </div>

                <h3 className="font-display font-black text-slate-800 text-lg">
                  🚨 Bypass the Form & Call Immediately!
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  Active plumbing leaks can cause thousands of dollars in water damage in minutes. Our master plumbers are fully loaded with equipment and ready to roll. 
                </p>

                <div className="bg-red-50 border border-red-100 rounded-lg p-3 w-full text-center">
                  <p className="text-[10px] text-red-600 font-bold uppercase tracking-wider">Toll-Free 24/7 Dispatch Hotline</p>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="block text-xl font-black text-red-600 hover:text-red-700 transition-colors mt-0.5"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>

                <div className="flex gap-3 w-full pt-2">
                  <button
                    onClick={() => setShowEmergencyModal(false)}
                    className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg text-xs transition-colors"
                  >
                    Continue Form
                  </button>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xs text-center flex items-center justify-center gap-1.5 shadow-lg shadow-red-200"
                  >
                    <LucideIcon name="Phone" className="h-4 w-4" />
                    <span>Call Dispatch</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
