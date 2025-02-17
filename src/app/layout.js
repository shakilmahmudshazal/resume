import { Inter } from "next/font/google";
import "./globals.css";
import "./styleCustom.css";
import TopBar from "@/components/topbar";
import Navigation from "@/components/navigation"; 
import BasicInfo from "@/components/basicInfo"; 
import { NavigationProvider } from 'next/navigation';
import './fonts.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shakil Mahmud",
  description: "Breif information about Shakil Mahmud",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </head>
      <body className={inter.className}>
        <main className="main-content"> 
          <TopBar/>
          <Navigation/>

          <section className="main-body">
          <BasicInfo/>
          {children}
          </section>
         
        </main>
       
        </body>
    </html>
  );
}

