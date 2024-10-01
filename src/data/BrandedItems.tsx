type BrandedItem = {
  name: string;
  logo: string;
  logoUrl: string;
};

type BrandedItemList = {
  [key: string]: BrandedItem;
};

const brandedItems: BrandedItemList = {
    delphi: { name: "Delphi", logo: "https://cdn.simpleicons.org/delphi", logoUrl: "https://cdn.simpleicons.org/delphi" }
};

export default brandedItems