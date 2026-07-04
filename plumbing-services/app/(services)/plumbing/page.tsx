import React from 'react';
import { Shield, Phone, ArrowRight, Wrench, Building2, Clock, Droplets, Flame } from 'lucide-react';
import Link from 'next/link';
import { ServiceCard } from '../../../components/ServiceCard';
import { CallToAction } from '../../../components/CallToAction';
import { JsonLd } from '../../../components/JsonLd';

const BUSINESS_INFO = {
  name: "Pride Plumbing FL",
  phone: "+1 (844) 973-6611",
  phoneRaw: "8449736611",
};

const SERVICE_CATEGORIES = [
  {
    id: "residential",
    title: "Residential Plumbing",
    description: "Keep your home running smoothly with our expert residential plumbing solutions. From pipe repairs to complete kitchen and bathroom overhauls, we do it all with care.",
    iconName: "Wrench",
    path: "/plumbing/residential"
  },
  {
    id: "commercial",
    title: "Commercial Plumbing",
    description: "Reliable plumbing systems for Florida businesses. We minimize downtime with commercial drain maintenance, industrial system repair, and professional installations.",
    iconName: "Building2",
    path: "/plumbing/commercial"
  },
  {
    id: "emergency",
    title: "Emergency Plumbing",
    description: "Plumbing disasters don't wait for business hours. Our rapid response team is available 24/7 to tackle burst pipes, active flooding, and dangerous gas leaks.",
    iconName: "Clock",
    path: "/plumbing/emergency"
  }
];

export default function PlumbingPage() {
  const schemaCrumbs = [
    { name: 'Home', url: 'https://prideplumbingfl.com' },
    { name: 'Plumbing', url: 'https://prideplumbingfl.com/plumbing' }
  ];

  return (
    <>
      <JsonLd type="Breadcrumbs" breadcrumbs={schemaCrumbs} />

      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-blue-300 font-semibold tracking-wider uppercase text-xs">Pride Plumbing FL</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2">
            Complete Plumbing Services
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-base sm:text-lg mt-4">
            From quick residential repairs to high-capacity commercial construction and immediate 24/7 emergency dispatches, we do it all with transparency and care.
          </p>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
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

      <CallToAction variant="primary" />
    </>
  );
}
