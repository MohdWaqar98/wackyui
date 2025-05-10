import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/providers/theme-providers";
import { RootProvider } from 'fumadocs-ui/provider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WackyUI - Modern React UI Components",
  description: "A beautiful, customizable, and accessible React UI component library built with Next.js and Tailwind CSS",
  keywords: ["React", "UI components", "Next.js", "Tailwind CSS", "Web development", "Frontend", "UI library"],
  authors: [{ name: "Mohd Waqar Ahemed" }],
  creator: "Mohd Waqar Ahemed",
  publisher: "Mohd Waqar Ahemed",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://wackyui.vercel.app"),
  openGraph: {
    title: "WackyUI - Modern React UI Components",
    description: "A beautiful, customizable, and accessible React UI component library built with Next.js and Tailwind CSS",
    url: "https://wackyui.vercel.app",
    siteName: "WackyUI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WackyUI - Modern React UI Components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WackyUI - Modern React UI Components",
    description: "A beautiful, customizable, and accessible React UI component library built with Next.js and Tailwind CSS",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <RootProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            
            {children}
          </ThemeProvider>
          </RootProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
