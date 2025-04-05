'use client';

import DarkModeToggle from "@/components/DarkModeToggle";
import ContactMe from "@/components/ContactButtons";

export default function Header() {
  return (
    <header className="top-0 z-50 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm shadow-md dark:shadow-gray-800 py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-1">
          <ContactMe />
        </div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}