import { Plus_Jakarta_Sans, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Md. Shakil Mahmud | Senior Software Engineer & Portfolio",
  description:
    "Portfolio and Engineering Resume of Md. Shakil Mahmud — Senior Software Engineer specializing in Next.js, React, and Enterprise E-Commerce platforms at Echologyx Limited.",
  keywords: [
    "Md. Shakil Mahmud",
    "Shakil Mahmud",
    "Senior Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Magento 2 Engineer",
    "Fullstack Engineer",
    "Echologyx Limited",
    "Competitive Programming",
  ],
  authors: [{ name: "Md. Shakil Mahmud", url: "https://shakilmahmud.com" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body>
        {/* Ambient background glow matching blog editorial dark palette */}
        <div className="ambient-bg" aria-hidden="true">
          <div className="ambient-glow-1"></div>
          <div className="ambient-glow-2"></div>
          <div className="ambient-glow-3"></div>
          <div className="ambient-grid"></div>
        </div>

        <div className="app-wrapper">
          <Navigation />
          
          <main className="main-content">
            {children}
          </main>

          <footer className="app-footer">
            <div className="footer-content">
              <div className="footer-brand">
                <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span>Md. Shakil Mahmud</span>
                  <span style={{ fontSize: "0.75rem", padding: "0.15rem 0.5rem", borderRadius: "9999px", background: "var(--accent-light)", color: "var(--accent-color)", border: "1px solid rgba(255, 122, 69, 0.2)" }}>Senior Software Engineer</span>
                </div>
                <div className="footer-copyright">
                  &copy; {new Date().getFullYear()} Md. Shakil Mahmud. High performance, clean architecture & engineering excellence.
                </div>
                <div className="footer-stack">
                  Next.js 16 (Turbopack) &bull; React 19 &bull; Editorial Design System
                </div>
              </div>

              <div className="footer-links">
                <a
                  href="https://shakilmahmud.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ color: "var(--accent-color)", fontWeight: 600 }}
                >
                  Essays &amp; Publication &rarr;
                </a>
                <a
                  href="https://github.com/shakilmahmudshazal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/md-shakil-37352918b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
                <a
                  href="/contact"
                  className="footer-link"
                >
                  Contact Form
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
