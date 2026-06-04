// ============================================================
// data.js — All job listings data
// Add new jobs here by copying the object pattern below
// ============================================================

const jobsData = [
  {
    id: 1, featured: true,
    title: "Senior Frontend Engineer",
    company: "Stripe", logo: "ST", logoColor: "#635BFF", logoBg: "#f0efff",
    location: "Remote", type: "Full-Time", workMode: "Remote",
    category: "Engineering", level: "Senior",
    salary: 185000, salaryDisplay: "$150k – $185k",
    tags: ["React", "TypeScript", "GraphQL", "Node.js"],
    posted: "2 hours ago",
    description: "Join Stripe's frontend platform team and help build the financial infrastructure for the internet. You'll work on products used by millions of businesses worldwide, shaping how developers interact with complex payment APIs through elegant, high-performance interfaces.",
    requirements: ["5+ years of frontend experience", "Deep expertise in React and TypeScript", "Experience with GraphQL and REST APIs", "Strong understanding of web performance optimization", "Experience with design systems"],
    perks: ["Competitive equity package", "Remote-first culture", "$5k/yr learning budget", "Top-tier health benefits", "Flexible PTO"]
  },
  {
    id: 2, featured: true,
    title: "Product Designer",
    company: "Linear", logo: "LN", logoColor: "#5E6AD2", logoBg: "#eef0fc",
    location: "San Francisco", type: "Full-Time", workMode: "Hybrid",
    category: "Design", level: "Mid",
    salary: 145000, salaryDisplay: "$120k – $145k",
    tags: ["Figma", "Product Design", "UX Research", "Prototyping"],
    posted: "1 day ago",
    description: "At Linear, we believe software should be fast, focused, and beautiful. As a Product Designer, you'll craft experiences for the world's most discerning engineering teams.",
    requirements: ["3+ years of product design experience", "Expert-level Figma skills", "Portfolio showing end-to-end product thinking", "Experience running user research", "Strong opinion on what makes great software"],
    perks: ["Meaningful equity", "Fully remote OK", "Top hardware budget", "Annual team retreats", "Health + dental + vision"]
  },
  {
    id: 3, featured: false,
    title: "Machine Learning Engineer",
    company: "Cohere", logo: "CO", logoColor: "#D97757", logoBg: "#fdf2ee",
    location: "Toronto", type: "Full-Time", workMode: "Hybrid",
    category: "Engineering", level: "Senior",
    salary: 200000, salaryDisplay: "$160k – $200k",
    tags: ["Python", "PyTorch", "LLMs", "MLOps", "CUDA"],
    posted: "3 days ago",
    description: "Cohere builds NLP models that power real-world enterprise applications. As an ML Engineer, you'll train, fine-tune, and optimize large language models at scale.",
    requirements: ["4+ years ML engineering experience", "Strong Python and PyTorch skills", "Experience training large-scale models", "Understanding of transformer architectures", "Experience with distributed training (CUDA/multi-GPU)"],
    perks: ["Competitive salary + equity", "Research time allocation", "GPU compute credits", "Conference attendance budget", "Flexible scheduling"]
  },
  {
    id: 4,
    title: "Growth Marketing Manager",
    company: "Notion", logo: "NO", logoColor: "#1e1e1e", logoBg: "#f0f0f0",
    location: "New York", type: "Full-Time", workMode: "Hybrid",
    category: "Marketing", level: "Mid",
    salary: 120000, salaryDisplay: "$95k – $120k",
    tags: ["Growth", "SEO", "A/B Testing", "Analytics", "Paid Ads"],
    posted: "4 days ago",
    description: "Drive Notion's explosive growth by owning acquisition, conversion, and retention across key channels. You'll run experiments and work closely with product and design teams.",
    requirements: ["3+ years in growth or performance marketing", "Fluency with analytics tools (Mixpanel, Amplitude)", "Strong A/B testing and experimentation mindset", "Experience with paid acquisition channels", "SQL skills a plus"],
    perks: ["Competitive base + bonus", "$1,000 Notion credit", "Learning & development stipend", "Health benefits", "401(k) matching"]
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Airbnb", logo: "AB", logoColor: "#FF5A5F", logoBg: "#fff0f0",
    location: "San Francisco", type: "Full-Time", workMode: "Hybrid",
    category: "Data", level: "Mid",
    salary: 165000, salaryDisplay: "$135k – $165k",
    tags: ["Python", "SQL", "Statistics", "Spark", "Causal Inference"],
    posted: "5 days ago",
    description: "Help Airbnb make data-driven decisions that improve the experience of hosts and guests globally. Design experiments, build models, and translate analyses into recommendations.",
    requirements: ["Masters or PhD in Statistics, CS, or related field", "3+ years of industry data science experience", "Strong Python and SQL skills", "Experience with causal inference and A/B testing", "Ability to communicate insights to non-technical audiences"],
    perks: ["$2,000 Airbnb travel credit/year", "RSUs + competitive salary", "Remote flexibility", "Comprehensive health benefits", "Parental leave policy"]
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "Vercel", logo: "VC", logoColor: "#000000", logoBg: "#f4f4f4",
    location: "Remote", type: "Full-Time", workMode: "Remote",
    category: "Engineering", level: "Senior",
    salary: 175000, salaryDisplay: "$145k – $175k",
    tags: ["Kubernetes", "Terraform", "AWS", "CI/CD", "Go"],
    posted: "1 week ago",
    description: "Vercel is building the front-end cloud. Manage infrastructure that serves millions of deployments daily and design resilient, scalable systems for a globally distributed platform.",
    requirements: ["5+ years DevOps/SRE experience", "Deep Kubernetes expertise", "Infrastructure as code (Terraform/Pulumi)", "Experience with AWS or GCP at scale", "Strong Go or Python scripting"],
    perks: ["Fully remote", "Unlimited PTO", "Home office stipend", "Top-tier health insurance", "Equity package"]
  },
  {
    id: 7,
    title: "Product Manager – Core Product",
    company: "Figma", logo: "FG", logoColor: "#F24E1E", logoBg: "#fff2ee",
    location: "San Francisco", type: "Full-Time", workMode: "Hybrid",
    category: "Product", level: "Senior",
    salary: 200000, salaryDisplay: "$165k – $200k",
    tags: ["Product Strategy", "Roadmapping", "User Research", "Agile"],
    posted: "1 week ago",
    description: "Drive the vision and execution for one of Figma's core product areas working with design, engineering, and research to define what gets built and why.",
    requirements: ["5+ years of product management experience", "Track record of shipping successful products", "Excellent written and verbal communication", "Strong analytical and data skills", "Design background preferred"],
    perks: ["Competitive equity at Series E valuation", "FigJam and Figma access", "Top-of-market comp", "Meaningful career growth", "SF office with great perks"]
  },
  {
    id: 8,
    title: "Backend Engineer – Platform",
    company: "PlanetScale", logo: "PS", logoColor: "#7c3aed", logoBg: "#f5f3ff",
    location: "Remote", type: "Full-Time", workMode: "Remote",
    category: "Engineering", level: "Senior",
    salary: 190000, salaryDisplay: "$155k – $190k",
    tags: ["Go", "MySQL", "Distributed Systems", "Vitess", "gRPC"],
    posted: "2 weeks ago",
    description: "PlanetScale is the world's most advanced serverless MySQL platform. Design and build core systems that power a globally distributed, infinitely scalable database product.",
    requirements: ["5+ years backend engineering experience", "Proficiency in Go", "Deep understanding of databases and distributed systems", "Experience with MySQL or similar relational DBs", "Passion for open source software"],
    perks: ["Competitive salary + significant equity", "Remote-first forever", "$2,500 home office setup", "Top health benefits", "Quarterly offsites"]
  },
  {
    id: 9,
    title: "UX Researcher",
    company: "Shopify", logo: "SH", logoColor: "#96bf48", logoBg: "#f0f9e8",
    location: "Remote", type: "Full-Time", workMode: "Remote",
    category: "Design", level: "Mid",
    salary: 130000, salaryDisplay: "$105k – $130k",
    tags: ["User Interviews", "Usability Testing", "Survey Design", "Figma"],
    posted: "2 weeks ago",
    description: "Help Shopify understand the merchants that power their businesses. Conduct qualitative and quantitative research to uncover insights that shape product decisions across multiple teams.",
    requirements: ["3+ years UX research experience", "Experience with qualitative and quantitative methods", "Strong communication and synthesis skills", "Ability to manage multiple research projects", "E-commerce experience a plus"],
    perks: ["Digital by default (fully remote)", "RRSP + stock purchase plan", "Wellness benefits", "Parental leave top-up", "Professional development fund"]
  },
  {
    id: 10,
    title: "Financial Analyst",
    company: "Ramp", logo: "RM", logoColor: "#00aa55", logoBg: "#e6f9f0",
    location: "New York", type: "Full-Time", workMode: "On-Site",
    category: "Finance", level: "Entry",
    salary: 90000, salaryDisplay: "$75k – $90k",
    tags: ["Financial Modeling", "Excel", "SQL", "FP&A"],
    posted: "3 weeks ago",
    description: "Ramp is the fastest-growing corporate card and spend management platform. Support rapid growth with rigorous financial analysis, forecasting, and insights.",
    requirements: ["1-3 years finance or accounting experience", "Strong Excel and financial modeling skills", "Attention to detail and analytical mindset", "SQL knowledge preferred", "CPA or CFA progress a plus"],
    perks: ["Competitive base + bonus", "NYC office in Soho", "Commuter benefits", "Comprehensive health coverage", "Fast-growth startup experience"]
  },
  {
    id: 11,
    title: "iOS Engineer",
    company: "Duolingo", logo: "DL", logoColor: "#58CC02", logoBg: "#edfce0",
    location: "Pittsburgh", type: "Full-Time", workMode: "Hybrid",
    category: "Engineering", level: "Mid",
    salary: 150000, salaryDisplay: "$125k – $150k",
    tags: ["Swift", "SwiftUI", "Xcode", "iOS", "Combine"],
    posted: "3 weeks ago",
    description: "Build the app that 500M+ learners use to learn a new language every day. Craft delightful, performant iOS experiences — from streak notifications to gamified lesson flows.",
    requirements: ["3+ years iOS development experience", "Strong Swift and SwiftUI skills", "Experience with app performance optimization", "Familiarity with Combine or async/await", "Passion for consumer products"],
    perks: ["Meaningful mission", "Relocation assistance", "Annual learning stipend", "Flexible work arrangements", "Duolingo Super subscription"]
  },
  {
    id: 12,
    title: "Operations Lead",
    company: "SpaceX", logo: "SX", logoColor: "#cc2222", logoBg: "#fff0f0",
    location: "Austin", type: "Full-Time", workMode: "On-Site",
    category: "Operations", level: "Lead",
    salary: 140000, salaryDisplay: "$115k – $140k",
    tags: ["Operations", "Process Improvement", "Team Leadership", "Lean"],
    posted: "1 month ago",
    description: "Drive operational excellence at SpaceX's growing Texas facility. Lead cross-functional teams, optimize manufacturing and logistics processes, and directly help build the most advanced rockets on the planet.",
    requirements: ["5+ years operations or manufacturing leadership", "Track record of leading teams of 10+", "Experience with Lean, Six Sigma, or similar methodologies", "Ability to work in a fast-paced, high-stakes environment", "Engineering background preferred"],
    perks: ["The most important mission in history", "Competitive comp + stock", "On-site facilities", "Health and dental", "Real impact from day one"]
  }
];
