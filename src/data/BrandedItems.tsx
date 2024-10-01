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
    sql           :{ name: "SQL",
                    logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsubstackcdn.com%2Fimage%2Ffetch%2Ff_auto%2Cq_auto%3Agood%2Cfl_progressive%3Asteep%2Fhttps%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F85be1fac-45e8-4f67-88d0-cc3d042fbd01_935x935.png&f=1&nofb=1&ipt=4843986c2d499092d931f4ff467356dd3c2bfdcd9e8425aa171d0a71ac7959d7&ipo=images" },
    vite          :{ name: "Vite",
                    logoUrl: "https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" },
};

export default brandedItems