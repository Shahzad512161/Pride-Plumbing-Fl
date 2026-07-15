/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from 'next/router';
import '../index.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <div id="app-shell" className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Page Content wrapper with Motion page transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
          className="flex-grow flex flex-col"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
