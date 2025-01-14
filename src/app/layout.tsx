import "./globals.css";
import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { ThemeProvider } from "next-themes"; // Ensure you're using a compatible ThemeProvider
// Define the RootLayoutProps type
interface RootLayoutProps {
  children: ReactNode; // children is of type ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
<html lang="en" suppressHydrationWarning>
<head />
      <body > 
      <ThemeProvider
          attribute="class" // Adds `class="dark"` to <html> when dark mode is active
          defaultTheme="system" // Uses system preference as the default
          enableSystem={true} // Allows using system dark/light mode preference
      
      >
          <Navbar/>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
