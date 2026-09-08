import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Shakil Mahmud | Senior Software Engineer",
  description:
    "Portfolio and Engineering Resume of Shakil Mahmud — Senior Software Engineer specializing in Next.js, React, and Enterprise E-Commerce platforms.",
  keywords: [
    "Shakil Mahmud",
    "Senior Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Magento 2 Engineer",
    "Fullstack Engineer",
    "Echologyx",
  ],
  authors: [{ name: "Shakil Mahmud" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {/* Ambient background glow & grid effects */}
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
                <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                  Shakil Mahmud
                </div>
                <div className="footer-copyright">
                  &copy; {new Date().getFullYear()} Shakil Mahmud. Crafted for high performance and engineering excellence.
                </div>
                <div className="footer-stack">
                  Built with Next.js 16 (Turbopack) &bull; React 19 &bull; Tailwind CSS
                </div>
              </div>

              <div className="footer-links">
                <a
                  href="https://github.com/shakilmahmudshazal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/shakil-mahmud-shazal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:shakilcse2019@gmail.com"
                  className="footer-link"
                >
                  shakilcse2019@gmail.com
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
