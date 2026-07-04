/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Plumbing } from './pages/Plumbing';
import { Residential } from './pages/Residential';
import { Commercial } from './pages/Commercial';
import { Emergency } from './pages/Emergency';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const renderPage = () => {
    switch (path) {
      case '/':
        return <Home />;
      case '/plumbing':
        return <Plumbing />;
      case '/plumbing/residential':
        return <Residential />;
      case '/plumbing/commercial':
        return <Commercial />;
      case '/plumbing/emergency':
        return <Emergency />;
      case '/contact':
        return <Contact />;
      case '/privacy':
        return <PrivacyPolicy />;
      case '/terms':
        return <TermsOfService />;
      default:
        // Default route or fallback
        return <Home />;
    }
  };

  return (
    <div id="app-shell" className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Page Content wrapper with Motion page transitions */}
      <motion.div
        key={path}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32, ease: "easeOut" }}
        className="flex-grow flex flex-col"
      >
        {renderPage()}
      </motion.div>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
