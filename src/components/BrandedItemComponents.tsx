"use client"

import { useEffect, useState } from 'react'
import brandedItems, { BrandedItemWithDark } from "@/lib/brandedItems"

export default function BrandedItemLogoWithTooltip({brandKey} : {brandKey: string}) {

    const [tooltip, setTooltip] = useState({ show: false, text: '', x: 0, y: 0 })

    const handleMouseEnter = (e: React.MouseEvent, text: string) => {
        setTooltip({ show: true, text, x: e.clientX, y: e.clientY })
    }

    const handleMouseLeave = () => {
        setTooltip({ show: false, text: '', x: 0, y: 0 })
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (tooltip.show) {
            setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }))
        }
    }
    
    return (
        <div>
            <div
              key={brandKey}
              onMouseEnter={(e) => handleMouseEnter(e, brandedItems[brandKey].name)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
                <BrandedItemLogo brandKey={brandKey} />
            </div>
            {tooltip.show && (
              <div 
                className="fixed pointer-events-none bg-black text-white px-2 py-1 rounded text-sm z-50"
                style={{ left: `${tooltip.x + 10}px`, top: `${tooltip.y + 10}px` }}
              >
                {tooltip.text}
              </div>
            )}
        </div>
    )
}

export function BrandedItemLogoWithCaption({brandKey} : {brandKey: string}) {

  return (
      <div className="w-full h-full flex flex-col items-center justify-between">
          <BrandedItemLogo brandKey={brandKey} />
          <div className="text-xs font-medium rounded px-2 py-0.5">
            {brandedItems[brandKey].name}
          </div>
      </div>
  )
}

export function BrandedItemLogo({brandKey} : {brandKey: string}) {
  return <img
    src={GetLogoUrl(brandKey)}
    alt={`${brandedItems[brandKey].name} logo`}
    className={`w-full h-full object-contain ${[
      'vercel',
      'shadcn',
      'latex',
      'flask',
      'github',
      'V0',
      'aaltosci',
      'tkinter',
      'sqlalchemy',
      'nextjs',
    ].includes(brandKey) ? 'dark:invert' : ''}`} />
}

function GetLogoUrl(brandKey: string){
    
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      // Check initial dark mode state
      const checkDarkMode = () => {
        const isDark = document.documentElement.classList.contains('dark');
        setIsDarkMode(isDark);
      };

      // Check on initial load
      checkDarkMode();

      // Set up mutation observer to watch for class changes on <html>
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === 'attributes' && 
            mutation.attributeName === 'class'
          ) {
            checkDarkMode();
          }
        });
      });

      observer.observe(document.documentElement, { attributes: true });

      // Clean up observer on component unmount
      return () => {
        observer.disconnect();
      };
    }, []);
    
    const logoUrl = brandedItems[brandKey].logoUrl
    const logoUrlDark = (brandedItems[brandKey] as BrandedItemWithDark).logoUrlDark
    const logoSrc = isDarkMode && logoUrlDark ? logoUrlDark : logoUrl
    return logoSrc
}

export function BrandedItemBadge({brandKey}: {brandKey: string}) {
  return (
      <div className="bg-gray-200 dark:bg-gray-800 flex flex-row items-center gap-2 p-2 rounded-md">
        <div className='w-5 h-5'>
          <BrandedItemLogo brandKey={brandKey} />
        </div>
        <span className="text-sm text-nowrap">{brandedItems[brandKey].name as string}</span>
      </div>
  )
}