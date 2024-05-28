"use client"

import { NavbarDarkMode } from "@/components/navbar-dark-mode";
import { ResponsiveChartContent } from "@/components/responsive-chart-content";

export default function Home() {
  return (
    <>
    <NavbarDarkMode />
    <div className="flex flex-col items-center">
      <ResponsiveChartContent  />
    </div>
    </>
  );
}
