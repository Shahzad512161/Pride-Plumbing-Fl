import React from 'react';
import { Phone, Wrench, Droplets, Flame, Shield, HardHat, CreditCard, Clock } from 'lucide-react';
import { CallToAction } from '../../../components/CallToAction';
import { JsonLd } from '../../../components/JsonLd';

const BUSINESS_INFO = {
  name: "Pride Plumbing FL",
  phone: "+1 (844) 973-6611",
  phoneRaw: "8449736611",
};

const RES_SERVICES = [
  { title: "Pipe Repair & Replacement", description: "Fast fix for copper, PEX, and PVC pipes. We diagnose slab leaks and handle repiping.", icon: Wrench },
  { title: "Drain Cleaning", description: "Clearing kitchen, shower, and toilet blockages. Restoring original water flow.", icon: Droplets },
  { title: "Water Heater Services", description: "Installing and repairing standard gas/electric water heaters as well as high-efficiency tankless units.", icon: Flame },
  { title: "Bathroom & Kitchen Plumbing", description: "Faucets, sinks, garbage disposals, luxury shower valves, water lines, and appliance hookups.", icon: Wrench },
  { title: "Sewer Line Services", description: "Video scopes, main drain clears, and trenchless pipe repairs for residential waste sewers.", icon: Shield },
  { title: "Water Filtration Systems", description: "Whole-house filtration systems and water softeners to protect from hard Florida minerals.", icon: Droplets }
];

export default function ResidentialPlumbingPage() {
  const schemaCrumbs = [
    { name: 'Home', url: 'https://prideplumbingfl.com' },
    { name: 'Plumbing', url: 'https://prideplumbingfl.com/plumbing' },
    { name: 'Residential', url: 'https://prideplumbingfl.com/plumbing/residential' }
  ];

  return (
    <>
      <JsonLd type="Breadcrumbs" breadcrumbs={schemaCrumbs} />

      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-4">
            <span className="text-blue-300 font-bold uppercase tracking-wider text-xs">Homeowner Solutions</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Residential Plumbing Services</h1>
            <p className="text-blue-100 max-w-2xl leading-relaxed">
              Reliable, clean, and comprehensive plumbing services designed to protect your Florida home and family.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-blue-900 font-bold shadow-lg">
              <Phone className="h-5 w-5 text-blue-600" />
              <span>Call Local Team: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RES_SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl border border-gray-100 bg-white">
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-blue-50 text-blue-600 mb-5">
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

      <CallToAction variant="primary" />
    </>
  );
}
