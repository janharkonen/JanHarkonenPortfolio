"use client"

import { BookOpenText } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function DocumentButton({ url, label }: { url: string, label: string }) {
    return (
      <Button variant="outline" asChild>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <BookOpenText className="h-4 w-4" />
          <span>{label}</span>
        </a>
      </Button>
    )
}