import React from 'react';
import { Phone, AlertTriangle, Flame, Shield, Droplets } from 'lucide-react';
import { CallToAction } from '../../../components/CallToAction';
import { JsonLd } from '../../../components/JsonLd';

const BUSINESS_INFO = {
  name: "Pride Plumbing FL",
  phone: "+1 (844) 973-6611",
  phoneRaw: "8449736611",
};

const EMER_SERVICES = [
  { title: "Burst Pipes & Flooding", description: "Active pipe bursts can damage structural drywall. We dispatch water extraction and bypass equipment.", icon: AlertTriangle },
  { title: "Dangerous Gas Leaks", description: "Smell gas? Evacuate and call 911, then contact our team to isolate and repair gas lines safely.", icon: Flame },
  { title: "Severe Sewer Backups", description: "Raw sewage backing up into baths or basins. High-powered mechanical snakes to clear lines.", icon: Shield },
  { title: "Clogged Main Drains", description: "When multiple drains fail simultaneously, we scope and clear main sewers 24/7.", icon: Droplets },
  { title: "Water Heater Failures", description: "Leaking tanks or thermostat failures. Quick standard or tankless system replacements.", icon: Flame },
  { title: "Active Slab Leaks", description: "Water leaking beneath tile or concrete floors. Precision location and repair.", icon: AlertTriangle }
];

export default function EmergencyPlumbingPage() {
  const schemaCrumbs = [
    { name: 'Home', url: 'https://prideplumbingfl.com' },
    { name: 'Plumbing', url: 'https://prideplumbingfl.com/plumbing' },
    { name: 'Emergency', url: 'https://prideplumbingfl.com/plumbing/emergency' }
  ];

  return (
    <>
      <JsonLd type="Breadcrumbs" breadcrumbs={schemaCrumbs} />

      <section className="bg-red-600 text-white py-16 px-4 relative">
        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-black/20 rounded-full text-xs font-bold uppercase">
          <span className="h-2 w-2 rounded-full bg-white animate-ping"></span>
          <span>Live Dispatcher Available</span>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-4">
            <span className="text-red-100 font-bold uppercase tracking-wider text-xs">Emergency dispatch</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Emergency Plumbing Services</h1>
            <p className="text-red-100 max-w-2xl leading-relaxed">
              Active leaks, flooding, gas, or sewer backups. Pride Plumbing FL runs a 24/7 localized dispatch fleet across Florida.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-red-600 font-black text-lg shadow-xl">
              <Phone className="h-5 w-5 animate-bounce" />
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EMER_SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl border border-red-100 bg-white">
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-red-50 text-red-600 mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CallToAction variant="emergency" />
    </>
  );
}
