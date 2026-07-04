/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LucideIcon } from './LucideIcon';
import { Link } from './Link';

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  path?: string;
  accent?: boolean;
  key?: string | number;
}

export function ServiceCard({ title, description, iconName, path, accent = false }: ServiceCardProps) {
  const cardContent = (
    <div className={`h-full flex flex-col justify-between p-6 rounded-xl border transition-all duration-300 ${
      accent
        ? 'bg-red-50 text-red-800 border-red-100 shadow-sm hover:border-red-300 hover:shadow-md hover:-translate-y-0.5'
        : 'bg-white text-slate-800 border-slate-200 shadow-sm hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5'
    }`}>
      <div>
        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 transition-colors ${
          accent ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
        }`}>
          <LucideIcon name={iconName} className="h-5 w-5" />
        </div>
        <h3 className={`font-display text-base font-bold tracking-tight mb-2 ${accent ? 'text-red-800' : 'text-slate-800'}`}>
          {title}
        </h3>
        <p className={`text-xs leading-relaxed mb-4 ${accent ? 'text-red-600' : 'text-slate-500'}`}>
          {description}
        </p>
      </div>
      
      {path && (
        <div className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors mt-auto ${
          accent ? 'text-red-600 hover:text-red-700' : 'text-blue-600 hover:text-blue-700'
        }`}>
          <span>Explore Service</span>
          <LucideIcon name="ArrowRight" className="h-3.5 w-3.5" />
        </div>
      )}
    </div>
  );

  if (path) {
    return (
      <Link to={path} className="block h-full group focus:outline-none">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
