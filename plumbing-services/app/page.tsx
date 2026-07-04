import React from 'react';
import { Shield, Phone, ArrowRight, CheckCircle, MapPin, HardHat, Car, CreditCard, Award, Clock, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import { ServiceCard } from '../components/ServiceCard';
import { CallToAction } from '../components/CallToAction';
import { JsonLd } from '../components/JsonLd';

const BUSINESS_INFO = {
  name: "Pride Plumbing FL",
  phone: "+1 (844) 973-6611",
  phoneRaw: "8449736611",
  tagline: "Florida's Most Trusted Plumbing Professionals",
  description: "Pride Plumbing FL offers premium residential, commercial, and 24/7 emergency plumbing solutions across all of Florida."
};

const FLORIDA_CITIES = [
  "Miami", "Fort Lauderdale", "Orlando", "Tampa", "Jacksonville", 
  "West Palm Beach", "Naples", "Sarasota", "St. Petersburg", 
  "Tallahassee", "Gainesville", "Daytona Beach", "Melbourne", 
  "Pensacola", "Key West"
];

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

const DETAILED_SERVICES = [
  { id: "pipe-repair", title: "Pipe Repair & Replacement", description: "Fixing leaky, corroded, or burst pipes to protect your property from structural water damage." },
  { id: "drain-cleaning", title: "Drain Cleaning", description: "Clearing stubborn clogs and buildup using safe, high-powered methods to restore original pipe flows." },
  { id: "water-heaters", title: "Water Heater Services", description: "Expert installation, repair, and ongoing maintenance for standard and high-efficiency tankless water heaters." },
  { id: "bathroom-plumbing", title: "Bathroom Plumbing", description: "From fixing running toilets and clogged shower drains to complete custom fixture installations and upgrades." },
  { id: "kitchen-plumbing", title: "Kitchen Plumbing", description: "Handling garbage disposals, sink drains, commercial dishwashers, and professional ice maker line hookups." },
  { id: "gas-lines", title: "Gas Line Services", description: "Certified gas pipe installations, precision leak detection, and appliance hookups with focus on safety first." },
  { id: "sewer-lines", title: "Sewer Line Services", description: "Repairing, replacing, and cleaning underground main sewer lines to prevent hazardous backflows." },
  { id: "fixture-installation", title: "Fixture Installation", description: "Upgrading faucets, sinks, showers, and modern toilets to enhance utility and increase property value." },
  { id: "water-filtration", title: "Water Filtration Systems", description: "Installing whole-house water softeners and filtration systems for clean, pure, healthy tap water." },
  { id: "leak-detection", title: "Slab Leak Detection", description: "Locating hidden foundation slab leaks with high-tech acoustic and electronic tools, protecting your foundation." },
  { id: "hydro-jetting", title: "Hydro Jetting", description: "High-pressure water jetting to thoroughly scour sewer pipes clean of accumulated grease, roots, and debris." },
  { id: "camera-inspections", title: "Camera Inspections", description: "Using fiber-optic sewer line cameras to diagnose pipe conditions and pinpoint blockages with exact accuracy." }
];

export default function Home() {
  return (
    <>
      <JsonLd type="LocalBusiness" />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-blue-50 via-white to-white py-20 text-center border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase mb-6">
            <Shield className="h-4 w-4" />
            <span>State Certified, Licensed & Insured Plumbers</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Pride Plumbing <span className="text-blue-600">FL</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {BUSINESS_INFO.tagline}. Professional pipe repairs, drain cleanouts, water heating, and 24/7 urgent response.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all"
            >
              <Phone className="h-5 w-5 animate-bounce" />
              <span>Call Us: {BUSINESS_INFO.phone}</span>
            </a>
            <Link
              href="/plumbing"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-2xl bg-gray-50 text-gray-700 font-semibold text-lg border border-gray-200 hover:bg-gray-100 transition-colors"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Professional Plumbing Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.map((category) => (
              <ServiceCard
                key={category.id}
                title={category.title}
                description={category.description}
                iconName={category.iconName}
                path={category.path}
                accent={category.id === 'emergency'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Detailed Plumbing Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DETAILED_SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Pride Plumbing FL</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <Shield className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-sm text-gray-500">Fully compliant with Florida state codes protecting your property.</p>
            </div>
            <div className="p-4">
              <Clock className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">24/7 Service</h3>
              <p className="text-sm text-gray-500">Available day or night, weekends and holidays for emergencies.</p>
            </div>
            <div className="p-4">
              <Award className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Experienced</h3>
              <p className="text-sm text-gray-500">Master plumbers with years of local Florida expertise.</p>
            </div>
            <div className="p-4">
              <ThumbsUp className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Satisfaction Focused</h3>
              <p className="text-sm text-gray-500">We stand behind our work with standard service guarantees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Professional Service Areas</h2>
            <p className="text-gray-500 mt-2">Strategically located to guarantee prompt, localized response times:</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {FLORIDA_CITIES.map((city) => (
              <div key={city} className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-100 text-gray-700 font-semibold text-sm">
                <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                <span>{city}, FL</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 p-5 rounded-2xl bg-gray-50">
              <HardHat className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Licensed Plumbers</h3>
                <p className="text-xs text-gray-500">Certified Florida plumbing masters.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 p-5 rounded-2xl bg-gray-50">
              <Car className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Fully Equipped Trucks</h3>
                <p className="text-xs text-gray-500">Arriving with parts to complete the job.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 p-5 rounded-2xl bg-gray-50">
              <CreditCard className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Transparent Pricing</h3>
                <p className="text-xs text-gray-500">Quotes provided before starting any work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction variant="primary" />
    </>
  );
}
