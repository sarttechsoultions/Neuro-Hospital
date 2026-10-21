import type { Metadata } from "next";
import "./globals.css";
import { ScrollControls } from "@/components/scroll-controls";
export const metadata: Metadata = {
  title: "NeuroCare Clinic | Expert Neurology Care",
  description: "Expert neurological care, experienced doctors and advanced diagnostics at NeuroCare Clinic.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<ScrollControls /></body></html>;
}

