export type BrandedItem = {
  name: string;
  logoUrl: string;
};

type BrandedItemList = {
  [key: string]: BrandedItem;
};

const brandedItems: BrandedItemList = {
    polycon: { 
      name: "Polycon Oy",
      logoUrl: "https://www.polycon.fi/wp-content/uploads/2020/03/polycon_turkoosi_500x49-300x29.png" 
    },
    semantum: { 
      name: "Semantum Oy",
      logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FC4D0BAQFAENbYsHiSYw%2Fcompany-logo_200_200%2F0%2F1519861441759%3Fe%3D2147483647%26v%3Dbeta%26t%3D-NRp0a94ITtT3Ao_29IuWCKZA7gJRuCS2-mVtqpm7ZY&f=1&nofb=1&ipt=77d42a74743b9d75795b2ba80326a16db7c7a045450ca4874e082ce8f78f2f8c&ipo=images" 
    },
    aaltosci: { 
      name: "Aalto University School of Science",
      logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.studyinfinland.fi%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fog_image%2Fpublic%2F2018-10%2FAalto%2520logo_0.png%3Fitok%3DBTbxbaXQ&f=1&nofb=1&ipt=03995a6c82b83b78a02c3bff036ae2161b5c9cd69e779ea2e0fb3332e85758eb&ipo=images" 
    },
    kaist: { 
      name: "Korea Advanced Institute of Science and Technology (KAIST)",
      logoUrl: "https://i.pinimg.com/736x/fe/2a/d8/fe2ad805c565eefa62ffc3d50c80aa01.jpg" 
    },
    delphi: { 
      name: "Delphi",
      logoUrl: "https://cdn.simpleicons.org/delphi" 
    },
    MSSQLServer: { 
      name: "Microsoft SQL Server",
      logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7TIOHIVieZJ564CaI1B8LQAAAA%26pid%3DApi&f=1&ipt=aed1fbd637221218c13f8b4fc98bf59ba08fb142938dfdc707d75acdffba2f78&ipo=images" 
    },
    postgresql: { 
      name: "PostgreSQL",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" 
    },
    java: { 
      name: "Java",
      logoUrl: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" 
    },
    vscode: { 
      name: "Visual Studio Code",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png" 
    },
    androidstudio: { 
      name: "Android Studio",
      logoUrl: "https://cdn.simpleicons.org/androidstudio" 
    },
    python: { 
      name: "Python",
      logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandslogos.com%2Fwp-content%2Fuploads%2Fimages%2Flarge%2Fpython-logo.png&f=1&nofb=1&ipt=95475181fb9a4f55667f208bbfd828765bc3a421b010de17cfbd8d9288552b18&ipo=images" 
    },
    react: { 
      name: "React",
      logoUrl: "https://cdn.simpleicons.org/react" 
    }, 
    redux: { 
      name: "Redux",
      logoUrl: "https://cdn.simpleicons.org/redux" 
    }, 
    sourcetree: { 
      name: "Sourcetree",
      logoUrl: "https://cdn.simpleicons.org/sourcetree" 
    },
    gitlab: { 
      name: "Gitlab",
      logoUrl: "https://cdn.simpleicons.org/gitlab" 
    },
    git: { 
      name: "Git",
      logoUrl: "https://cdn.simpleicons.org/git" 
    },
    radstudio: { 
      name: "RAD Studio",
      logoUrl: "https://cdn.simpleicons.org/radstudio" 
    },
    sql: { 
      name: "SQL",
      logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsubstackcdn.com%2Fimage%2Ffetch%2Ff_auto%2Cq_auto%3Agood%2Cfl_progressive%3Asteep%2Fhttps%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F85be1fac-45e8-4f67-88d0-cc3d042fbd01_935x935.png&f=1&nofb=1&ipt=4843986c2d499092d931f4ff467356dd3c2bfdcd9e8425aa171d0a71ac7959d7&ipo=images" 
    },
    vite: { 
      name: "Vite",
      logoUrl: "https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" 
    },
    nodejs: { 
      name: "Node.js",
      logoUrl: "https://cdn.simpleicons.org/nodedotjs" 
    },
    html5: { 
      name: "HTML5",
      logoUrl: "https://cdn.simpleicons.org/html5" 
    },
    css3: { 
      name: "CSS3",
      logoUrl: "https://cdn.simpleicons.org/css3" 
    },
    tailwind: { 
      name: "Tailwind CSS",
      logoUrl: "https://cdn.simpleicons.org/tailwindcss" 
    },
    javascript: { 
      name: "Javascript",
      logoUrl: "https://cdn.simpleicons.org/javascript" 
    },
    typescript: { 
      name: "Typescript",
      logoUrl: "https://cdn.simpleicons.org/typescript" 
    },
    pyqt4: { 
      name: "PyQT 4",
      logoUrl: "https://w7.pngwing.com/pngs/736/205/png-transparent-the-qt-company-qt-creator-visual-designer-miscellaneous-text-rectangle.png" 
    },
    tkinter: { 
      name: "Tkinter",
      logoUrl: "https://wingware.com/images/large-feather.png" 
    },
    pandas: { 
      name: "Pandas",
      logoUrl: "https://pandas.pydata.org/static/img/pandas_mark.svg" 
    },
    vercel: { 
      name: "Vercel",
      logoUrl: "https://cdn.simpleicons.org/vercel" 
    },
    shadcn: { 
      name: "shadcn/ui",
      logoUrl: "https://cdn.simpleicons.org/shadcnui" 
    },
    latex: { 
      name: "LaTeX",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg" 
    },
    fortran: { 
      name: "Fortran",
      logoUrl: "https://cdn.simpleicons.org/fortran" 
    },
    flask: { 
      name: "Flask",
      logoUrl: "https://cdn.simpleicons.org/flask" 
    },
    haskell: { 
      name: "Haskell",
      logoUrl: "https://cdn.simpleicons.org/haskell" 
    },
    hetzner: { 
      name: "Hetzner",
      logoUrl: "https://cdn.simpleicons.org/hetzner" 
    },
    auth0: { 
      name: "Auth0",
      logoUrl: "https://cdn.simpleicons.org/auth0" 
    },
    cloudflare: { 
      name: "Cloudflare",
      logoUrl: "https://cdn.simpleicons.org/cloudflare" 
    },
    ChatGPT: { 
      name: "ChatGPT",
      logoUrl: "https://cdn.simpleicons.org/openai" 
    },
    Claude: { 
      name: "Claude",
      logoUrl: "https://www.mescomputing.com/news/ai/media_13b863a9243381ff7394de5430fa38774577c1a90.png?width=2000&format=webply&optimize=medium" 
    },
    V0: { 
      name: "V0",
      logoUrl: "https://img.stackshare.io/service/145352/default_18b7775bbad27a164cbe774b72f2dbafd8676289.png" 
    },
    zustand: { 
      name: "Zustand",
      logoUrl: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" 
    },
    docker: { 
      name: "Docker",
      logoUrl: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" 
    },
    sublime: { 
      name: "Sublime text",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/d/d2/Sublime_Text_3_logo.png" 
    },
    sqlalchemy: { 
      name: "SQLAlchemy",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/SQLAlchemy.svg/1920px-SQLAlchemy.svg.png" 
    },
    nginx: { 
      name: "Nginx",
      logoUrl: "https://ahmadalli.gallerycdn.vsassets.io/extensions/ahmadalli/vscode-nginx-conf/0.3.5/1711059993560/Microsoft.VisualStudio.Services.Icons.Default" 
    },
    gunicorn: { 
      name: "Gunicorn",
      logoUrl: "https://e7.pngegg.com/pngimages/633/5/png-clipart-green-unicorn-illustration-gunicorn-logo-icons-logos-emojis-tech-companies.png" 
    },
    lechat: { 
      name: "Le Chat",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mistral_AI_logo_%282025%E2%80%93%29.svg/1200px-Mistral_AI_logo_%282025%E2%80%93%29.svg.png" 
    },
    deepseek: { 
      name: "Deepseek",
      logoUrl: "https://freepnglogo.com/images/all_img/deep-seek-logo-whale-1ced.png" 
    },
    jwt: { 
      name: "JSON Web Token",
      logoUrl: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg" 
    },
    svelte: { 
      name: "Svelte",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/800px-Svelte_Logo.svg.png" 
    },
    redis: { 
      name: "Redis",
      logoUrl: "https://cdn.worldvectorlogo.com/logos/redis.svg" 
    },
    aws: { 
      name: "AWS",
      logoUrl: "https://cdn.freebiesupply.com/logos/large/2x/aws-logo-logo-png-transparent.png" 
    },
    ec2: { 
      name: "EC2",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9vVTDosC-AsWLprepTOyXhkzAKji4DcJCA&s" 
    },
    linux: { 
      name: "Linux",
      logoUrl: "https://brandlogos.net/wp-content/uploads/2020/03/Linux-logo-512x512.png" 
    },
    ubuntu: { 
      name: "Ubuntu",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UbuntuCoF.svg/1024px-UbuntuCoF.svg.png" 
    },
    gitkraken: { 
      name: "GitKraken",
      logoUrl: "https://cdn.worldvectorlogo.com/logos/gitkraken.svg" 
    },
    influxdb: { 
      name: "InfluxDB",
      logoUrl: "https://cdn.simpleicons.org/influxdb" 
    },
    quantumespresso:{ 
      name: "Quantum ESPRESSO",
      logoUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.openscience.org%2Fblog%2Fwp-content%2Fuploads%2F2009%2F01%2Fquantum_espresso6_trasparentbg.png&f=1&nofb=1&ipt=b303839d6fc58b58a54f26025a3d2da3fec77c81e00caab2cba0cc06f75f650e&ipo=images" 
    },
    casino:{ 
      name: "CASINO",
      logoUrl: "https://i4ndcxhbcg.ufs.sh/f/Qdvn5pODvKPkRQrK3Xnn4Ow76XVfbLPNQyhWiUaACjdM9sF0" 
    },
    cscmahti:{ 
      name: "CSC Mahti",
      logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fregmedia.co.uk%2F2012%2F07%2F09%2Ffinland_csc_logo.jpg&f=1&nofb=1&ipt=5c1b8ca6fe262d409540e8e4ada27d4521b8e3c1269b1f146e48e0e93356dcb5&ipo=images" 
    },
    matlab:{ 
      name: "Matlab",
      logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdic.academic.ru%2Fpictures%2Fwiki%2Ffiles%2F77%2FMatlab_Logo.png&f=1&nofb=1&ipt=de8b9be6d426a4eeb2cfcff0b906bd53996e2b5a9945f3b004ab19acaabb3a9c&ipo=images",
    },
    github:{ 
      name: "Github",
      logoUrl: "https://cdn.simpleicons.org/github",
    },
    emacs:{ 
      name: "Emacs",
      logoUrl: "https://cdn.simpleicons.org/gnuemacs",
    },
    overleaf:{ 
      name: "Overleaf",
      logoUrl: "https://cdn.simpleicons.org/overleaf",
    },
};

export default brandedItems