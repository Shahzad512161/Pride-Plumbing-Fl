/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

// Let's create a custom event/helper for routing
export function navigateTo(path: string) {
  if (typeof window !== 'undefined') {
    window.location.href = path;
  }
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
  key?: string | number;
}

export function Link({ to, children, className = '', ...props }: LinkProps) {
  const router = useRouter();
  const isActive = router ? router.pathname === to : false;

  return (
    <NextLink
      href={to}
      className={`${className} ${isActive ? 'text-blue-600 font-semibold' : ''}`}
      {...props}
    >
      {children}
    </NextLink>
  );
}

