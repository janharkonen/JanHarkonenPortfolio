type BrandedItem = {
  name: string;
  logoUrl: string;
};

type BrandedItemList = {
  [key: string]: BrandedItem;
};

const brandedItems: BrandedItemList = {
    polycon       :{ name: "Polycon Oy",
                    logoUrl: "https://www.polycon.fi/wp-content/uploads/2020/03/polycon_turkoosi_500x49-300x29.png" },
    semantum      :{ name: "Semantum Oy",
                    logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FC4D0BAQFAENbYsHiSYw%2Fcompany-logo_200_200%2F0%2F1519861441759%3Fe%3D2147483647%26v%3Dbeta%26t%3D-NRp0a94ITtT3Ao_29IuWCKZA7gJRuCS2-mVtqpm7ZY&f=1&nofb=1&ipt=77d42a74743b9d75795b2ba80326a16db7c7a045450ca4874e082ce8f78f2f8c&ipo=images" },
    aaltosci      :{ name: "Aalto University School of Science",
                    logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.studyinfinland.fi%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fog_image%2Fpublic%2F2018-10%2FAalto%2520logo_0.png%3Fitok%3DBTbxbaXQ&f=1&nofb=1&ipt=03995a6c82b83b78a02c3bff036ae2161b5c9cd69e779ea2e0fb3332e85758eb&ipo=images" },
    kaist         :{ name: "Korea Advanced Institute of Science and Technology (KAIST)",
                    logoUrl: "https://i.pinimg.com/736x/fe/2a/d8/fe2ad805c565eefa62ffc3d50c80aa01.jpg" },
    delphi        :{ name: "Delphi",
                    logoUrl: "https://cdn.simpleicons.org/delphi" },
    MSSQLServer   :{ name: "Microsoft SQL Server",
                    logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7TIOHIVieZJ564CaI1B8LQAAAA%26pid%3DApi&f=1&ipt=aed1fbd637221218c13f8b4fc98bf59ba08fb142938dfdc707d75acdffba2f78&ipo=images" },
    java          :{ name: "Java",
                    logoUrl: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" },
    vscode        :{ name: "Visual Studio Code",
                    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png" },
    androidstudio :{ name: "Android Studio",
                    logoUrl: "https://cdn.simpleicons.org/androidstudio" },
    python        :{ name: "Python",
                    logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandslogos.com%2Fwp-content%2Fuploads%2Fimages%2Flarge%2Fpython-logo.png&f=1&nofb=1&ipt=95475181fb9a4f55667f208bbfd828765bc3a421b010de17cfbd8d9288552b18&ipo=images" },
    react         :{ name: "React",
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
    nodejs        :{ name: "Node.js",
                    logoUrl: "https://cdn.simpleicons.org/nodedotjs" },
    html5         :{ name: "HTML5",
                    logoUrl: "https://cdn.simpleicons.org/html5" },
    css3          :{ name: "CSS3",
                    logoUrl: "https://cdn.simpleicons.org/css3" },
    tailwind      :{ name: "Tailwind CSS",
                    logoUrl: "https://cdn.simpleicons.org/tailwindcss" },
    javascript    :{ name: "Javascript",
                    logoUrl: "https://cdn.simpleicons.org/javascript" },
    typescript    :{ name: "Typescript",
                    logoUrl: "https://cdn.simpleicons.org/typescript" },
    pyqt4         :{ name: "PyQT 4",
                    logoUrl: "https://w7.pngwing.com/pngs/736/205/png-transparent-the-qt-company-qt-creator-visual-designer-miscellaneous-text-rectangle.png" },
    tkinter       :{ name: "Tkinter",
                    logoUrl: "https://wingware.com/images/large-feather.png" },
    pandas        :{ name: "Pandas",
                    logoUrl: "https://pandas.pydata.org/static/img/pandas_mark.svg" },
    vercel        :{ name: "Vercel",
                    logoUrl: "https://cdn.simpleicons.org/vercel" },
    shadcn        :{ name: "shadcn/ui",
                    logoUrl: "https://cdn.simpleicons.org/shadcnui" },
};

export default brandedItems