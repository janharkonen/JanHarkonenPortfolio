import brandedItems from "./brandedItems"

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  tools: string[]
  pdfUrl: string
  pdfCaption: string
  pdfUrl2: string
  pdfCaption2: string
}

export const workExperiences: Experience[] = [
  {
    title: "CEO / Software Developer",
    company: "pionblanc",
    period: "2024 - present",
    description:
      "Product data synchronization and automatic offer generating solution as a web app",
    tools: ["react","python","postgresql","docker","hetzner"],
    pdfUrl: "",
    pdfCaption: "",
    pdfUrl2: "",
    pdfCaption2: "",
  },
  {
    title: "Software Developer",
    company: "polycon",
    period: "2021 - 2024",
    description:
      "Developing and maintaining software and databases for handling mobility aid items for Finnish hospital districts",
    tools: ["delphi","MSSQLServer"],
    pdfUrl: "",
    pdfCaption: "",
    pdfUrl2: "",
    pdfCaption2: "",
  },
  {
    title: "Software Developer / Data Analyst",
    company: "semantum",
    period: "Feb 2020 - Sep 2020",
    description: "Developing LCA dashboard for assessing environmental impact of factory processes",
    tools: ["java", "influxdb", "docker", "haskell"],
    pdfUrl: "",
    pdfCaption: "",
    pdfUrl2: "",
    pdfCaption2: "",
  },
  {
    title: "Research Assistant",
    company: "aaltosci",
    period: "Jun 2019 - Dec 2019",
    description:
      "Simulating and calculating the annihilating electron-positron pair momentum density in a solid in the atomic scale using quantum Monte Carlo methods (Master's thesis)",
    tools: ["fortran", "quantumespresso", "casino", "cscmahti"],
    pdfUrl: "",
    pdfCaption: "Master's thesis",
    pdfUrl2: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.108.045201",
    pdfCaption2: "Research paper as co-author",
  },
  {
    title: "Research Assistant",
    company: "aaltosci",
    period: "Summer 2018",
    description:
      "Simulating and calculating the enhancement factor in a semiconductor in the atomic scale using quantum Monte Carlo methods (Special assignment)",
    tools: ["fortran", "quantumespresso", "casino", "cscmahti"],
    pdfUrl: "",
    pdfCaption: "Special assignment",
    pdfUrl2: "",
    pdfCaption2: "",
  },
]

export const educationExperiences: Experience[] = [
  {
    title: "Master's Degree",
    company: "aaltosci",
    period: "2018 - 2020",
    description: "Major: mathematics, minor: engineering physics",
    tools: [],
    pdfUrl: 'asd',
    pdfCaption: "Master's thesis",
    pdfUrl2: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.108.045201",
    pdfCaption2: "Research paper as co-author",
  },
  {
    title: "Exchange studies",
    company: "kaist",
    period: "2016 - 2017",
    description: "School of Computing",
    tools: [],
    pdfUrl: "",
    pdfCaption: "",
    pdfUrl2: "",
    pdfCaption2: "",
  },
  {
    title: "Bachelor's degree",
    company: "aaltosci",
    period: "2014 - 2018",
    description: "Major: engineering physics and mathematics, minor: electrical engineering",
    tools: [],
    pdfUrl: 'asd',
    pdfCaption: "Bachelor's thesis",
    pdfUrl2: "",
    pdfCaption2: "",
  },
]
