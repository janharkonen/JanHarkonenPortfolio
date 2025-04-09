'use client';

import DarkModeToggle from "@/components/DarkModeToggle";
import ContactMe from "@/components/ContactButtons";

export default function Header() {
  return (
    <header className="p-2 sm:p-2 text-l sm:text-2xl sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm shadow-md dark:shadow-gray-800">
      <div className="flex flex-row items-center">
        <div className="flex-1 flex justify-start text-wrap">
          Jan Härkönen
        </div>
        <div className="flex justify-center">
          <ContactMe />
        </div>
        <div className="flex-1 flex justify-end">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}