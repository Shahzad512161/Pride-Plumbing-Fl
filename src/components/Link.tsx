/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

// Let's create a custom event for client-side routing
export function navigateTo(path: string) {
  window.history.pushState({}, '', path);
  const navEvent = new PopStateEvent('popstate');
  window.dispatchEvent(navEvent);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
  key?: string | number;
}

export function Link({ to, children, className = '', ...props }: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only handle left clicks, no modifier keys
    if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      navigateTo(to);
    }
  };

  const isActive = window.location.pathname === to;

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`${className} ${isActive ? 'text-blue-600 font-semibold' : ''}`}
      {...props}
    >
      {children}
    </a>
  );
}
