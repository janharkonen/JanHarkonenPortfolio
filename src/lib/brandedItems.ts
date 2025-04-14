export type BrandedItem = {
  name: string;
  logoUrl: string;
};

export type BrandedItemWithDark = {
  name: string;
  logoUrl: string;
  logoUrlDark: string;
};

type BrandedItemList = {
  [key: string]: BrandedItem | BrandedItemWithDark;
};

export const brandedItems: BrandedItemList = {
  pionblanc:{ 
    name: "Pion Blanc Oy",
    logoUrl: "https://picapi.janharkonen.fi/api/pics/2ca92b65bbcd4d40bb6c18803b084192.png",
  },
  polycon: { 
      name: "Polycon Oy",
      logoUrl: "https://picapi.janharkonen.fi/api/pics/fc39eaeb27044bec9290363ccc17e643.png" 
    },
    semantum: { 
      name: "Semantum Oy",
      logoUrl: "https://picapi.janharkonen.fi/api/pics/16655070d3ad450a85959f8bc7b8db2d.png" 
    },
    aaltosci: { 
      name: "Aalto University School of Science",
      logoUrl: "https://picapi.janharkonen.fi/api/pics/86946a2d15ff4442b3c0e4b6a8b8d8c9.png?BG=75" 
    },
    kaist: { 
      name: "Korea Advanced Institute of Science and Technology (KAIST)",
      logoUrl: "https://picapi.janharkonen.fi/api/pics/c1eb00569d58459ca9360a859bbec303.png?BG=80" 
    },
    delphi: { 
      name: "Delphi",
      logoUrl: "https://cdn.simpleicons.org/delphi" 
    },
    MSSQLServer: { 
      name: "Microsoft SQL Server",
      logoUrl: "https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000" 
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
      logoUrl: "https://img.icons8.com/?size=100&id=dJjTWMogzFzg&format=png&color=000000" 
    },
    nodejs: { 
      name: "Node.js",
      logoUrl: "https://cdn.simpleicons.org/nodedotjs" 
    },
    html: { 
      name: "HTML",
      logoUrl: "https://cdn.simpleicons.org/html5" 
    },
    css: { 
      name: "CSS",
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
      logoUrl: "https://picapi.janharkonen.fi/api/pics/a48383689ac44f1395c566eccd92c181.png" 
    },
    tkinter: { 
      name: "Tkinter",
      logoUrl: "https://wingware.com/images/large-feather.png" 
    },
    pandas: { 
      name: "Pandas",
      logoUrl: "https://pandas.pydata.org/static/img/pandas_mark.svg",
      logoUrlDark: "https://pandas.pydata.org/static/img/favicon_white.ico" 
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
      logoUrl: "https://picapi.janharkonen.fi/api/pics/6263092852e442a49eb3a84baef6632b.png?BG=95" 
    },
    sublime: { 
      name: "Sublime text",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/d/d2/Sublime_Text_3_logo.png" 
    },
    sqlalchemy: { 
      name: "SQLAlchemy",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/SQLAlchemy.svg/1920px-SQLAlchemy.svg.png", 
      logoUrlDark: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/sqlalchemy-xqyioi6lnwqrrtewhic4ip.png/sqlalchemy-7d4f5ti4ysdgam0da2cctk.png?_a=DAJFJtWIZAAC",
    },
    nginx: { 
      name: "Nginx",
      logoUrl: "https://ahmadalli.gallerycdn.vsassets.io/extensions/ahmadalli/vscode-nginx-conf/0.3.5/1711059993560/Microsoft.VisualStudio.Services.Icons.Default" 
    },
    gunicorn: { 
      name: "Gunicorn",
      logoUrl: "https://picapi.janharkonen.fi/api/pics/3418d4bd32aa468d82f1f79ddd550945.png" 
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
      logoUrl: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
      logoUrlDark: "https://picapi.janharkonen.fi/api/pics/ec053a28e10a44c9812788a8d4c2f9ef.png" 
    },
    ec2: { 
      name: "EC2",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9vVTDosC-AsWLprepTOyXhkzAKji4DcJCA&s" 
    },
    linux: { 
      name: "Linux",
      logoUrl: "https://picapi.janharkonen.fi/api/pics/2008891e943c466a99328a3cc939c4b3.png?BG=110" 
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
      logoUrl: "https://upload.wikimedia.org/wikipedia/fi/thumb/7/76/CSC_logo.svg/583px-CSC_logo.svg.png?20080126105759" 
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
    debian:{ 
      name: "Debian",
      logoUrl: "https://imgs.search.brave.com/mV28jf-NBucxv2QwEP63spCo_03Aj-jK7LYy2LFCPZI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2dp/bGJhcmJhcmEvbG9n/b3MvbWFpbi9sb2dv/cy9kZWJpYW4uc3Zn",
    },
    sqlite:{ 
      name: "SQLite",
      logoUrl: "https://images.icon-icons.com/2699/PNG/512/sqlite_logo_icon_169724.png",
    },
    vanillajs:{ 
      name: "Vanilla Javascript",
      logoUrl: "https://cdn.simpleicons.org/javascript" 
    },
    nextjs:{ 
      name: "NextJS",
      logoUrl: "https://www.svgrepo.com/show/354113/nextjs-icon.svg" 
    },
    cursor:{ 
      name: "Cursor",
      logoUrl: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.44.0/files/light/cursor.png",
      logoUrlDark: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.44.0/files/dark/cursor.png" 
    },
    go:{ 
      name: "Go",
      logoUrl: "https://picapi.janharkonen.fi/api/pics/bcde08d74bd546d38455fcbe9b6733f3.png?BGl=90&BGr=90",
    },
    golang:{ 
      name: "Golang",
      logoUrl: "https://picapi.janharkonen.fi/api/pics/b77b1e64aaaf4cacb9ea44a779a75454.png",
    },
};

export default brandedItems
