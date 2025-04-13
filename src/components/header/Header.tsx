'use client';

import DarkModeToggle from "@/components/header/DarkModeToggle";
import ContactMe from "@/components/header/ContactButtons";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-2 sm:p-2 text-l sm:text-2xl sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm shadow-md dark:shadow-gray-800">
      <div className="flex flex-row items-center">
        <div className="flex-1 flex justify-start text-wrap">
          <Link 
              href="/" 
              className="text-l sm:text-xl sm:px-2 font-semibold hover:text-primary transition-colors"
            >
              Jan Härkönen
            </Link>
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