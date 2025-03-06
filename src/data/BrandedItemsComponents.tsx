import brandedItems from "../data/BrandedItems.tsx"

export const brandedItemBadge = (key: string) => {
    return (
        <div className="flex items-center gap-2 bg-muted p-2 rounded-md">
          <img
            src={brandedItems[key].logoUrl || "/placeholder.svg"}
            alt={`${brandedItems[key].name} logo`}
            className="w-5 h-5 object-contain"
          />
          <span className="text-sm">{brandedItems[key].name}</span>
        </div>
    )
}