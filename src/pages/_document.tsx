/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <body className="antialiased text-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
