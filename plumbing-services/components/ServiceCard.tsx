import React from 'react';
import Link from 'next/link';
import {
  Wrench,
  Building2,
  Clock,
  Droplets,
  Flame,
  Shield,
  Award,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  Home: Wrench,
  Wrench,
  Building2,
  Clock,
  Droplets,
  Flame,
  Shield,
  Award,
  AlertTriangle
};

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  path?: string;
  accent?: boolean;
}

export function ServiceCard({ title, description, iconName, path, accent = false }: ServiceCardProps) {
  const IconComponent = iconMap[iconName as keyof typeof iconMap] || Wrench;

  const cardContent = (
    <div className={`h-full flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 ${
      accent
        ? 'bg-blue-600 text-white border-blue-700 shadow-lg shadow-blue-100 hover:shadow-blue-200 hover:-translate-y-1'
        : 'bg-white text-gray-900 border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1'
    }`}>
      <div>
        <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-5 ${
          accent ? 'bg-white/15 text-white' : 'bg-blue-50 text-blue-600'
        }`}>
          <IconComponent className="h-6 w-6" />
        </div>
        <h3 className={`text-xl font-bold tracking-tight mb-3 ${accent ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed mb-6 ${accent ? 'text-blue-100' : 'text-gray-500'}`}>
          {description}
        </p>
      </div>
      
      {path && (
        <div className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
          accent ? 'text-white hover:text-blue-200' : 'text-blue-600 hover:text-blue-700'
        }`}>
          <span>Explore Service</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      )}
    </div>
  );

  if (path) {
    return (
      <Link href={path} className="block h-full group focus:outline-none">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
