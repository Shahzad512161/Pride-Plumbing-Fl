import type { Metadata } from "next";
import "./globals.css";
import "./../../src/index.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Pride Plumbing FL | Florida's Premium Residential & Commercial Plumbing",
  description: "Professional residential, commercial, and 24/7 emergency plumbing services across Florida. Licensed and insured plumbers in Miami, Fort Lauderdale, Tampa, and Orlando.",
  alternates: {
    canonical: "https://prideplumbingfl.com",
  },
  openGraph: {
    title: "Pride Plumbing FL | Florida's Premium Plumbing Professionals",
    description: "Professional residential, commercial, and 24/7 emergency plumbing services across Florida.",
    url: "https://prideplumbingfl.com",
    siteName: "Pride Plumbing FL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pride Plumbing FL | Florida's Premium Plumbing Professionals",
    description: "Professional residential, commercial, and 24/7 emergency plumbing services across Florida.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body className="antialiased font-sans text-gray-900 bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
