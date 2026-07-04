import React from 'react';
import { Phone, Building2, Wrench, Shield, HardHat, Droplets, AlertTriangle } from 'lucide-react';
import { CallToAction } from '../../../components/CallToAction';
import { JsonLd } from '../../../components/JsonLd';

const BUSINESS_INFO = {
  name: "Pride Plumbing FL",
  phone: "+1 (844) 973-6611",
  phoneRaw: "8449736611",
};

const COMM_SERVICES = [
  { title: "Office Plumbing Systems", description: "Restroom maintenance, breakroom sinks, drainage systems, and certified backflow preventers.", icon: Building2 },
  { title: "Restaurant & Kitchen Plumbing", description: "Grease traps, high-velocity dishwasher lines, floor drain cleanings, and emergency backups.", icon: Wrench },
  { title: "Retail & Multi-Tenant Complexes", description: "Plumbing installations, multi-floor sewer lines, and custom preventative maintenance agreements.", icon: Shield },
  { title: "Industrial & Manufacturing Systems", description: "Heavy-duty piping, high-capacity water heaters, backflow testing, and pressure regulators.", icon: HardHat },
  { title: "Commercial Hydro Jetting", description: "Using heavy machinery to scour sewer mains with 4000 PSI high-pressure water streams.", icon: Droplets },
  { title: "Slab Leak Detection", description: "Locating foundation leak pathways under concrete slabs with non-destructive thermal tools.", icon: AlertTriangle }
];

export default function CommercialPlumbingPage() {
  const schemaCrumbs = [
    { name: 'Home', url: 'https://prideplumbingfl.com' },
    { name: 'Plumbing', url: 'https://prideplumbingfl.com/plumbing' },
    { name: 'Commercial', url: 'https://prideplumbingfl.com/plumbing/commercial' }
  ];

  return (
    <>
      <JsonLd type="Breadcrumbs" breadcrumbs={schemaCrumbs} />

      <section className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-4">
            <span className="text-blue-400 font-bold uppercase tracking-wider text-xs">Commercial Facilities</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Commercial Plumbing Services</h1>
            <p className="text-blue-100 max-w-2xl leading-relaxed">
              Minimizing corporate downtime and ensuring strict building code compliance across all operations.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold shadow-lg">
              <Phone className="h-5 w-5" />
              <span>Contact Commercial Team: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMM_SERVICES.map((service, idx) => {
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
