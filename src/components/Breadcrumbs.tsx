/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from './Link';
import { LucideIcon } from './LucideIcon';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs sm:text-sm text-gray-500 font-medium">
        <Link to="/" className="flex items-center gap-1.5 text-gray-400 hover:text-blue-600 transition-colors">
          <LucideIcon name="Home" className="h-4 w-4" />
          <span>Home</span>
        </Link>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <React.Fragment key={index}>
              <LucideIcon name="ArrowRight" className="h-3.5 w-3.5 text-gray-300" />
              {isLast || !item.path ? (
                <span className="text-gray-850 font-semibold truncate max-w-[200px]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-gray-500 hover:text-blue-600 hover:font-medium transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
