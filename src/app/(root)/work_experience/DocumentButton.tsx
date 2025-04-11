"use client"

import { BookOpenText } from "lucide-react";

export default function DocumentButton({ url, label }: { url: string, label: string }) {
    return (
        <button 
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
        onClick={() => window.open(url, "_blank")}
        >
            <BookOpenText className="w-5 h-5" />
            <span>{label}</span>
        </button>
    )
}