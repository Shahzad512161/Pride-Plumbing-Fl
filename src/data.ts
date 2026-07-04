/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceCategory, ServiceDetail, TrustSignal, TrustBadge } from './types';

export const BUSINESS_INFO = {
  name: "Pride Plumbing FL",
  phone: "+1 (844) 973-6611",
  phoneRaw: "8449736611",
  address: "5711 NE 14th Ave Ste 200, Fort Lauderdale, FL 33334, United States",
  email: "info@prideplumbingfl.com",
  hours: "24/7 Emergency Service",
  tagline: "Florida's Most Trusted Plumbing Professionals",
  description: "Pride Plumbing FL offers premium residential, commercial, and 24/7 emergency plumbing solutions across all of Florida. Our licensed and insured plumbers provide fast, transparent, and expert service when you need it most."
};

export const FLORIDA_CITIES = [
  "Miami", "Fort Lauderdale", "Orlando", "Tampa", "Jacksonville", 
  "West Palm Beach", "Naples", "Sarasota", "St. Petersburg", 
  "Tallahassee", "Gainesville", "Daytona Beach", "Melbourne", 
  "Pensacola", "Key West"
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "residential",
    title: "Residential Plumbing",
    description: "Keep your home running smoothly with our expert residential plumbing solutions. From pipe repairs to complete kitchen and bathroom overhauls, we do it all with care.",
    iconName: "Home",
    path: "/plumbing/residential",
    detailedServices: [
      "Pipe Repair & Replacement",
      "Drain Cleaning",
      "Water Heater Services",
      "Bathroom Plumbing",
      "Kitchen Plumbing",
      "Sewer Line Services",
      "Fixture Installation",
      "Water Filtration Systems"
    ]
  },
  {
    id: "commercial",
    title: "Commercial Plumbing",
    description: "Reliable plumbing systems for Florida businesses. We minimize downtime with commercial drain maintenance, industrial system repair, and professional installations.",
    iconName: "Building2",
    path: "/plumbing/commercial",
    detailedServices: [
      "Office Plumbing",
      "Restaurant Plumbing",
      "Retail Plumbing",
      "Industrial Plumbing",
      "Drain Cleaning",
      "Fixture Installation",
      "Slab Leak Detection",
      "Hydro Jetting"
    ]
  },
  {
    id: "emergency",
    title: "Emergency Plumbing",
    description: "Plumbing disasters don't wait for business hours. Our rapid response team is available 24/7 to tackle burst pipes, active flooding, and dangerous gas leaks.",
    iconName: "Clock",
    path: "/plumbing/emergency",
    detailedServices: [
      "24/7 Burst Pipes Repair",
      "Emergency Drain Clearing",
      "Flooding Mitigation",
      "Gas Leak Detection & Repair",
      "Sewer Backups",
      "Slab Leak Detection"
    ]
  }
];

export const DETAILED_SERVICES: ServiceDetail[] = [
  {
    id: "pipe-repair",
    title: "Pipe Repair & Replacement",
    description: "Fixing leaky, corroded, or burst pipes to protect your property from structural and cosmetic water damage.",
    iconName: "Wrench"
  },
  {
    id: "drain-cleaning",
    title: "Drain Cleaning",
    description: "Clearing stubborn clogs and buildup using safe, high-powered methods to restore fully functional drainage.",
    iconName: "Droplets"
  },
  {
    id: "water-heaters",
    title: "Water Heater Services",
    description: "Expert installation, repair, and ongoing maintenance for standard and high-efficiency tankless water heaters.",
    iconName: "Flame"
  },
  {
    id: "bathroom-plumbing",
    title: "Bathroom Plumbing",
    description: "From fixing running toilets and clogged shower drains to complete custom fixture installations and upgrades.",
    iconName: "Wrench"
  },
  {
    id: "kitchen-plumbing",
    title: "Kitchen Plumbing",
    description: "Handling garbage disposals, sink drains, commercial dishwashers, and professional ice maker line hookups.",
    iconName: "Wrench"
  },
  {
    id: "gas-lines",
    title: "Gas Line Services",
    description: "Certified gas pipe installations, precision leak detection, and appliance hookups with focus on safety first.",
    iconName: "Flame"
  },
  {
    id: "sewer-lines",
    title: "Sewer Line Services",
    description: "Repairing, replacing, and cleaning underground main sewer lines to prevent hazardous backflows.",
    iconName: "Shield"
  },
  {
    id: "fixture-installation",
    title: "Fixture Installation",
    description: "Upgrading faucets, sinks, showers, and modern toilets to enhance utility and increase property value.",
    iconName: "Award"
  },
  {
    id: "water-filtration",
    title: "Water Filtration Systems",
    description: "Installing whole-house water softeners and filtration systems for clean, pure, healthy tap water.",
    iconName: "Droplets"
  },
  {
    id: "leak-detection",
    title: "Slab Leak Detection",
    description: "Locating hidden foundation slab leaks with high-tech acoustic and electronic tools, protecting your foundation.",
    iconName: "AlertTriangle"
  },
  {
    id: "hydro-jetting",
    title: "Hydro Jetting",
    description: "High-pressure water jetting to thoroughly scour sewer pipes clean of accumulated grease, roots, and debris.",
    iconName: "Droplets"
  },
  {
    id: "camera-inspections",
    title: "Camera Inspections",
    description: "Using fiber-optic sewer line cameras to diagnose pipe conditions and pinpoint blockages with exact accuracy.",
    iconName: "Shield"
  }
];

export const TRUST_SIGNALS: TrustSignal[] = [
  {
    id: "licensed-insured",
    title: "Licensed & Insured",
    description: "Fully compliant with Florida state codes. Your property and peace of mind are always 100% protected.",
    iconName: "Shield"
  },
  {
    id: "service-247",
    title: "24/7 Rapid Service",
    description: "Day or night, weekend or holiday—our rapid dispatch teams are ready when you have a plumbing emergency.",
    iconName: "Clock"
  },
  {
    id: "highly-experienced",
    title: "Experienced Plumbers",
    description: "Highly trained, background-checked professional plumbing technicians with decades of combined local expertise.",
    iconName: "Award"
  },
  {
    id: "satisfaction-focused",
    title: "Satisfaction Focused",
    description: "We back our work with solid guarantees. We aren't finished until your system is functioning perfectly.",
    iconName: "ThumbsUp"
  }
];

export const TRUST_BADGES: TrustBadge[] = [
  {
    id: "licensed",
    title: "Licensed Plumbers",
    iconName: "HardHat"
  },
  {
    id: "equipped",
    title: "Fully Equipped Trucks",
    iconName: "Car"
  },
  {
    id: "transparent",
    title: "Transparent Pricing",
    iconName: "CreditCard"
  }
];
