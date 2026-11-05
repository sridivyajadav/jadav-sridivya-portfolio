// ============================================================
// portfolioData.js — Real portfolio information for Jadav SriDivya
// Controls text, navigation links, and project information
// ============================================================

export const personalInfo = {
  name: "Jadav SriDivya",
  firstName: "Jadav SriDivya",
  brandName: "Jadav SriDivya", // shown in preloader, navbar, and footer
  title: "Data Analyst",
  location: "Bengaluru, India",
  phone: "+916305694140",
  emails: {
    primary: "sridivyajadav@gmail.com",
    secondary: "",
  },
  summary:
    "SQL Developer and Application Support professional with 2+ years of experience supporting business applications, investigating data and transaction issues, developing SQL queries and stored procedures, validating records, and delivering operational reports. Experienced in requirements clarification with business users, root-cause analysis, data reconciliation, application-to-database integration, issue documentation, and cross-functional coordination with technical teams. Skilled in SQL Server, complex joins, query optimisation, Excel-based analysis, Power BI reporting, Python data preparation, and process improvement. Brings a quality-focused, customer-oriented approach to incident ownership, structured problem solving, and reliable business reporting.",
  resumeUrl: "/Resume.pdf", // located in /public
};

// TAP Academy — the academy trained with. Used in footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/sridivyajadav",
  linkedin: "https://www.linkedin.com/in/jadav-sridivya-906217251/",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Jadav SriDivya",
  titleHighlight: "Data Analyst",
  subtitle:
    "Transforming complex operational data into actionable business intelligence through SQL, Power BI, Python, and robust analytics.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:sridivyajadav@gmail.com?subject=Hiring%20Inquiry%20%E2%80%93%20Portfolio&body=Hello%20Jadav%20SriDivya,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.%0D%0A%0D%0ABest%20Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Jadav SriDivya</span>, a Data Analyst and SQL Developer based in Bengaluru. With 2+ years of experience resolving complex transaction issues, writing optimized SQL queries, and delivering operational reports, I bridge business logic and analytics, sharpening my skills through the placement training program at TAP Academy.`,
  techStack: ["SQL Server", "Power BI", "Python", "Excel"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn raw data into executive intelligence",
  description: "A structured, end-to-end approach to data validation, dimensional modeling, and decision-ready reporting.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Clarify requirements with business stakeholders, inspect data workflows, and perform root-cause analysis on discrepancies.",
    },
    {
      number: "02",
      title: "Design",
      text: "Architect clean dimensional schemas, define key performance indicators (KPIs), and wireframe intuitive dashboards.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Write optimized SQL queries and stored procedures, engineer DAX calculations, and build automated data pipelines in Python.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Reconcile data accuracy, schedule automated dataset refreshes, and deliver interactive, production-ready reports.",
    },
  ],
  endText: "Ready to deliver data insights!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming & Data Prep",
      skills: [
        { name: "Python" },
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "Seaborn" },
        { name: "Matplotlib" },
      ],
    },
    {
      title: "Databases & SQL",
      skills: [
        { name: "SQL Server" },
        { name: "Stored Procedures" },
        { name: "Views & Triggers" },
        { name: "Window Functions" },
        { name: "Query Optimization" },
      ],
    },
    {
      title: "BI & Visualization",
      skills: [
        { name: "Power BI" },
        { name: "Tableau" },
        { name: "DAX Measures" },
        { name: "Dimensional Modeling" },
      ],
    },
    {
      title: "Spreadsheet & Analytics",
      skills: [
        { name: "Advanced Excel" },
        { name: "Power Query" },
        { name: "Pivot Tables" },
        { name: "XLOOKUP & VLOOKUP" },
      ],
    },
  ],
};

export const leadershipList = [
  {
    title: "Cross-Functional Incident Taskforce",
    role: "Application Support Anchor",
    description:
      "Spearheaded root-cause investigations for recurring business transaction discrepancies, collaborating across database and engineering units to shorten resolution turnaround.",
    badge: "Coordination",
  },
  {
    title: "RGUKT Campus Technical Community",
    role: "Data Analytics Mentor",
    description:
      "Guided students in relational database concepts, query optimization, and spreadsheet modeling, conducting interactive SQL problem-solving sessions.",
    badge: "Mentorship",
  },
];

export const internshipsList = [
  {
    organization: "Enterprise Support & Solutions",
    role: "Application Support & SQL Developer",
    duration: "2+ Years Experience",
    skills: [
      "Supported core business applications and resolved high-volume transaction anomalies",
      "Developed and optimized SQL queries, stored procedures, and validated records",
      "Conducted root-cause analysis and coordinated cross-functionally with technical teams",
    ],
    tech: ["SQL Server", "Stored Procedures", "Excel", "Data Validation"],
  },
];

export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Coordinating smoothly with cross-functional technical teams and business stakeholders.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Investigating deep transaction issues and conducting structured root-cause analysis.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Reconciling data sets and isolating anomalies across high-volume production records.",
  },
  {
    name: "Creativity",
    icon: "💡",
    desc: "Designing clean, intuitive dashboard layouts that turn dense metrics into clear stories.",
  },
];

export const projects = [
  {
    id: "performance-dashboard",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Daily, Hourly & Weekly Performance Dashboard",
    description:
      "Combined operational data using SQL joins and validation checks; built Power BI reporting with KPI cards, drill-through, conditional formatting, dimensional modelling, and scheduled refresh for high-volume records.",
    techTags: ["Power BI", "SQL Server", "Python", "Excel"],
    links: { github: "https://github.com/sridivyajadav", demo: "" },
    isFlagship: true,
  },
  {
    id: "ecommerce-analytics",
    number: "02",
    badge: null,
    title: "E-Commerce Customer & Sales Analytics",
    description:
      "Engineered data extraction, validation, and exploratory data analysis to evaluate customer churn, top-selling products, and revenue growth trends using Python and Tableau.",
    techTags: ["Python", "Pandas", "SQL", "Tableau"],
    links: { github: "https://github.com/sridivyajadav", demo: "" },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/jadav-sridivya-906217251/",
};

export const education = {
  degree: "B.Tech",
  institution: "Rajiv Gandhi University of Knowledge Technologies",
  cgpa: "Graduated",
  graduation: "RGUKT",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Data Analyst", "SQL · Power BI · Python · Excel", "Actionable Business Intelligence"],
  credential: "B.Tech — Rajiv Gandhi University of Knowledge Technologies",
  copyright: `© ${new Date().getFullYear()} Jadav SriDivya | Built with React`,
};

// EmailJS configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
