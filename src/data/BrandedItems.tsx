type BrandedItem = {
  name: string;
  logoUrl: string;
};

type BrandedItemList = {
  [key: string]: BrandedItem;
};

const brandedItems: BrandedItemList = {
    delphi:       { name: "Delphi",
                    logoUrl: "https://cdn.simpleicons.org/delphi" },
    MSSQLServer:  { name: "Microsoft SQL Server",
                    logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7TIOHIVieZJ564CaI1B8LQAAAA%26pid%3DApi&f=1&ipt=aed1fbd637221218c13f8b4fc98bf59ba08fb142938dfdc707d75acdffba2f78&ipo=images" },
    java:         { name: "Java",
                    logoUrl: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" },
    vscode:       { name: "Visual Studio Code",
                    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png" },
    androidstudio:{ name: "Android Studio",
                    logoUrl: "https://cdn.simpleicons.org/androidstudio" },
    python        :{ name: "Python",
                    logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandslogos.com%2Fwp-content%2Fuploads%2Fimages%2Flarge%2Fpython-logo.png&f=1&nofb=1&ipt=95475181fb9a4f55667f208bbfd828765bc3a421b010de17cfbd8d9288552b18&ipo=images" },
    react         :{ name: "Reactasd",
                    logoUrl: "https://cdn.simpleicons.org/react" }, 
    sourcetree    :{ name: "Sourcetree",
                    logoUrl: "https://cdn.simpleicons.org/sourcetree" },
    gitlab        :{ name: "Gitlab",
                    logoUrl: "https://cdn.simpleicons.org/gitlab" },
    git           :{ name: "Git",
                    logoUrl: "https://cdn.simpleicons.org/git" },
    radstudio     :{ name: "RAD Studio",
                    logoUrl: "https://cdn.simpleicons.org/radstudio" },
};

export default brandedItems