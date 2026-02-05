// ============================================================================
// PORTFOLIO CONTENT CONFIGURATION
// Edit this file to update all content on the site
// ============================================================================

export const siteConfig = {
  name: "Stephen Madison",
  title: "Lead Presales Implementation Consultant",
  email: "stephen.d.madison@gmail.com",
  location: "Greater Houston",
  timezone: "US Central (CST)",
  schedulingUrl: "https://calendly.com/stephenmadison", // TODO: Replace with your actual Calendly link
  linkedIn: "https://www.linkedin.com/in/stephendmadison",
  github: "", // Add if you want to display GitHub
  lastUpdated: "February 2026",
}

export const heroContent = {
  headline: "I design and deliver implementation systems that reduce risk and accelerate outcomes.",
  subheadline: "I partner with presales and customer teams to transform complex requirements into governed, scalable solutions—bridging the gap between what's sold and what ships.",
  ctaPrimary: "View Case Studies",
  ctaSecondary: "Let's Talk",
  proofChips: [
    { label: "15+ Years", sublabel: "Technology & Implementation" },
    { label: "10+ Years", sublabel: "Low Code Platforms" },
    { label: "1000s", sublabel: "Enterprise Users Enabled" },
    { label: "Full Stack", sublabel: "Developer" },
  ],
}

export const systemStatusSteps = [
  { id: "discover", label: "Discovery", status: "complete" as const },
  { id: "build", label: "Build", status: "active" as const },
  { id: "integrate", label: "Integrate", status: "pending" as const },
  { id: "launch", label: "Launch", status: "pending" as const },
]

export const capabilities = [
  {
    id: "discovery",
    icon: "Search",
    title: "Discovery & Solution Design",
    description: "Transform ambiguous requirements into clear architectures. I run workshops, map processes, and build solution blueprints that derisk delivery before code is written.",
    consultantHighlight: "Requirements workshops, SOW alignment, technical scoping",
    builderHighlight: "Data modeling, integration mapping, architecture docs",
  },
  {
    id: "delivery",
    icon: "Rocket",
    title: "Implementation Delivery Leadership",
    description: "Lead cross-functional teams from kickoff to launch. I keep projects on track with clear milestones, proactive risk management, and stakeholder alignment.",
    consultantHighlight: "Project governance, stakeholder management, executive updates",
    builderHighlight: "Sprint planning, technical decisions, quality gates",
  },
  {
    id: "integrations",
    icon: "GitBranch",
    title: "Integrations & Automations",
    description: "Connect systems that don't naturally talk. Pipelines, webhooks, APIs, and middleware that make data flow without manual intervention.",
    consultantHighlight: "Integration strategy, vendor coordination, data governance",
    builderHighlight: "Quickbase Pipelines, REST APIs, Procore integrations",
  },
  {
    id: "data",
    icon: "Database",
    title: "Data Modeling & Governance",
    description: "Replace spreadsheet chaos with structured systems of record. Clean schemas, validation rules, and reporting that leadership actually trusts.",
    consultantHighlight: "Data strategy, compliance alignment, executive reporting",
    builderHighlight: "Schema design, field rules, dashboard architecture",
  },
  {
    id: "storytelling",
    icon: "Presentation",
    title: "Executive Storytelling & Enablement",
    description: "Translate technical wins into business language. I build decks, demos, and documentation that get buy-in and drive adoption.",
    consultantHighlight: "Executive presentations, ROI narratives, change management",
    builderHighlight: "Demo environments, training materials, adoption playbooks",
  },
  {
    id: "ai",
    icon: "Sparkles",
    title: "AI-Accelerated Delivery",
    description: "Use AI practically—not as a buzzword. I leverage LLMs for analysis, documentation, and automation to ship faster without sacrificing quality.",
    consultantHighlight: "AI strategy, use case identification, responsible adoption",
    builderHighlight: "Claude/GPT workflows, automated documentation, code acceleration",
  },
]

export const caseStudies = [
  {
    id: "clinical-trials",
    title: "Clinical Trials Management System",
    client: "MD Anderson Cancer Center",
    industry: "Healthcare",
    duration: "5 years",
    role: "Applications Systems Analyst",
    outcomes: [
      { metric: "20 → Enterprise", label: "User growth across organization" },
      { metric: "Multi-Dept", label: "Departments onboarded at scale" },
      { metric: "100%", label: "Protocol lifecycle coverage" },
    ],
    context: "MD Anderson Cancer Center manages thousands of clinical trials across multiple departments. Teams were using non-centralized systems including spreadsheets, paper records, and legacy databases, creating data silos and operational inefficiencies.",
    problem: "Clinical trials data was fragmented across departments with no unified view of protocol status, milestones, or patient registration. Budget tracking, sponsor involvement, and compliance documentation required manual reconciliation across multiple systems. No single source of truth existed for trials from conception to termination.",
    approach: [
      "Conducted department-by-department discovery to understand unique workflow requirements",
      "Designed a flexible data model that could accommodate varying departmental needs",
      "Built a comprehensive Quickbase application covering the full protocol lifecycle",
      "Created automated task assignment and milestone tracking workflows",
      "Implemented phased rollout with hands-on training and support for each department",
      "Established governance and scalability patterns for ongoing expansion",
    ],
    solution: {
      architecture: "Quickbase (system of record) ↔ Department workflows ↔ Automated notifications ↔ Executive dashboards",
      keyComponents: [
        "Protocol tracking from conception to termination",
        "User roles and permission management",
        "Protocol stages and milestone automation",
        "Budget and finance tracking",
        "Amendment and sponsor management",
        "Patient registration workflows",
        "Automated task assignment",
        "Cross-department reporting",
      ],
    },
    techStack: ["Quickbase", "Workflows", "Automation", "Role-based access", "Custom reporting"],
    whatNext: "The application's customizable design allowed continued expansion. Future phases included integrations with campus systems for enhanced automation, pre-clinical trial management modules, HR planning, operations tracking, and license management.",
    oneMinuteSummary: "Built a comprehensive clinical trials management application that grew from serving 20 users in a single department to enterprise-wide adoption across multiple departments. The system replaced fragmented spreadsheets and legacy databases with a unified platform covering the entire protocol lifecycle, enabling cross-department collaboration and real-time visibility into trial status.",
  },
  {
    id: "remote-imaging",
    title: "Enterprise Remote Imaging System",
    client: "Team Industrial Services",
    industry: "Energy Services",
    duration: "2 years",
    role: "Sr. Desktop Technician / Team Lead",
    outcomes: [
      { metric: "85%", label: "Reduction in deployment time" },
      { metric: "1 week → 1 hour", label: "End-user downtime eliminated" },
      { metric: "$100K+", label: "Annual shipping cost savings" },
    ],
    context: "Team Industrial Services operated across multiple remote branches nationwide. The existing computer deployment process required shipping every machine to corporate headquarters for imaging, then shipping back to branch locations—a slow, expensive, and operationally disruptive process.",
    problem: "IT was a bottleneck for branch operations. New hires waited days for equipment. Hardware refreshes caused extended downtime. Shipping costs were substantial. Branch staff had no local imaging capability, and every computer had to make a round trip through corporate IT.",
    approach: [
      "Analyzed the full hardware lifecycle to identify automation opportunities",
      "Designed a remote imaging architecture using Altiris Software Management",
      "Created minimal, universal base images to optimize storage and deployment",
      "Developed user-based software deployment rules for department-specific needs",
      "Piloted with select branches before full rollout",
      "Documented procedures and trained branch coordinators",
    ],
    solution: {
      architecture: "Altiris Server → Remote Site Servers → Branch Workstations ↔ Active Directory",
      keyComponents: [
        "Remote PXE boot imaging capability",
        "Automated domain joining",
        "User-based software deployment profiles",
        "Minimal universal base images",
        "Branch-level site servers",
        "Centralized management console",
      ],
    },
    techStack: ["Altiris", "Windows Deployment", "Active Directory", "PXE Boot", "MSI Packaging"],
    whatNext: "Extended the solution to include automated patch management, software inventory reporting, and self-service application installation for approved software.",
    oneMinuteSummary: "Transformed a manual, logistics-heavy computer deployment process into an automated remote imaging system. Branches could image, name, and domain-join computers on-site, eliminating the need to ship hardware through corporate. Reduced end-user downtime from one week to one hour and cut significant shipping and labor costs.",
  },
  {
    id: "site-servers",
    title: "Distributed Site Server Infrastructure",
    client: "Team Industrial Services",
    industry: "Energy Services",
    duration: "2 years",
    role: "Sr. Desktop Technician / Infrastructure Lead",
    outcomes: [
      { metric: "100+", label: "Branches planned for deployment" },
      { metric: "70%", label: "Reduction in deployment labor" },
      { metric: "99.5%", label: "Remote support success rate" },
    ],
    context: "With remote imaging capability established, Team Industrial Services needed local infrastructure at branch locations to serve as distribution points for images, software, and patches. Without local servers, remote operations depended entirely on WAN bandwidth to corporate.",
    problem: "Remote branches experienced slow software deployments due to WAN limitations. Patch distribution was inconsistent. Large image transfers clogged network connections. IT had limited ability to support remote locations efficiently without local infrastructure.",
    approach: [
      "Designed standardized site server specifications for consistent deployment",
      "Created a universal server image that could be deployed to any branch",
      "Coordinated with branch teams to understand unique requirements and constraints",
      "Developed testing procedures to validate each deployment",
      "Built documentation and runbooks for branch IT contacts",
      "Planned phased rollout to 100+ branches",
    ],
    solution: {
      architecture: "Corporate Altiris → Site Servers (per branch) → Local workstations ↔ Central reporting",
      keyComponents: [
        "Standardized site server image",
        "Local file storage for Altiris distribution",
        "Image and patch caching",
        "Software distribution point",
        "Local PXE boot services",
        "Centralized monitoring and management",
      ],
    },
    techStack: ["Windows Server", "Altiris", "Network infrastructure", "Storage management"],
    whatNext: "Continue rollout to remaining branches, add redundancy capabilities, and implement automated health monitoring with alerting.",
    oneMinuteSummary: "Designed and deployed distributed site servers to enable efficient remote IT support across 100+ branch locations. The standardized infrastructure provided local caching for images, software, and patches—dramatically reducing deployment times and WAN utilization while enabling branch staff to receive rapid IT support.",
  },
  {
    id: "presales-transformation",
    title: "Presales Implementation Excellence",
    client: "Quickbase (Internal)",
    industry: "Enterprise Software",
    duration: "4+ years",
    role: "Lead Presales Implementation Consultant",
    outcomes: [
      { metric: "ARR Growth", label: "Consistent contribution to new revenue" },
      { metric: "100%", label: "Pilot-to-close conversion improvement" },
      { metric: "50+", label: "Enterprise engagements led" },
    ],
    context: "Quickbase needed to scale presales implementation capabilities while maintaining quality and reducing deal risk. The challenge was bridging the gap between sales promises and delivery reality while accelerating customer time-to-value.",
    problem: "Complex enterprise deals required significant technical validation before close. Customers needed to see their specific use cases demonstrated. Presales commitments sometimes misaligned with delivery capabilities. No standardized approach to discovery, scoping, and pilot execution existed.",
    approach: [
      "Developed scalable discovery frameworks for rapid requirements gathering",
      "Created reusable pilot templates and demo environments",
      "Established scoping methodology to accurately estimate implementation effort",
      "Built trusted advisor relationships with customers throughout the presales cycle",
      "Implemented AI-assisted tools for analysis and documentation acceleration",
      "Mentored team members on presales best practices",
    ],
    solution: {
      architecture: "Discovery Framework → Solution Design → Pilot Build → Value Demonstration → Handoff to Delivery",
      keyComponents: [
        "Standardized discovery workshops",
        "Solution architecture templates",
        "Pilot environment accelerators",
        "ROI and value documentation",
        "Risk assessment frameworks",
        "Delivery alignment protocols",
      ],
    },
    techStack: ["Quickbase", "Solution design", "AI tools", "Documentation automation"],
    whatNext: "Continuing to evolve presales methodology, incorporating AI-assisted analysis for faster turnaround, and building playbooks for common industry patterns.",
    oneMinuteSummary: "Led and refined the presales implementation function at Quickbase, creating scalable approaches to discovery, solution design, and pilot execution. Focused on reducing deal risk, ensuring alignment between presales commitments and delivery capabilities, and accelerating customer time-to-value through trusted technical partnership.",
  },
]

export const microWins = [
  {
    title: "20 to Enterprise-Wide",
    result: "Scaled Clinical Trials app from single department to organization-wide adoption at MD Anderson",
    tags: ["Scale", "Adoption"],
  },
  {
    title: "Week to Hour",
    result: "Reduced end-user computer deployment downtime from one week to one hour",
    tags: ["Efficiency", "Process"],
  },
  {
    title: "Best Employee Award",
    result: "Recognized out of 800+ employees at UT Health Science Center",
    tags: ["Recognition", "Excellence"],
  },
  {
    title: "30+ Site Clinics",
    result: "Directed IT operations across Gulf Coast region healthcare network",
    tags: ["Leadership", "Scale"],
  },
  {
    title: "1000+ Devices",
    result: "Managed maintenance and refresh cycles while maintaining uptime",
    tags: ["Operations", "Scale"],
  },
  {
    title: "Expert Builder Certified",
    result: "Achieved Quickbase's highest certification level",
    tags: ["Certification", "Expertise"],
  },
  {
    title: "Presales Demo Wins",
    result: "Built demo environments that converted competitive bake-offs to closed deals",
    tags: ["Presales", "Revenue"],
  },
  {
    title: "ITIL V3 Certified",
    result: "Foundation certification in IT Service Management best practices",
    tags: ["Certification", "Process"],
  },
  {
    title: "Cross-Campus Integrations",
    result: "Built multiple integrations connecting campus systems at MD Anderson",
    tags: ["Integration", "Healthcare"],
  },
  {
    title: "Policy Author",
    result: "Developed companywide imaging and software procurement policies",
    tags: ["Governance", "Documentation"],
  },
  {
    title: "Training Programs",
    result: "Created end-user training programs that reduced support ticket volume",
    tags: ["Enablement", "Adoption"],
  },
  {
    title: "AI-Accelerated Delivery",
    result: "Integrated AI tools into daily workflow for analysis and documentation",
    tags: ["AI", "Innovation"],
  },
]

export const playbookSteps = [
  {
    id: "discover",
    title: "Discover",
    subtitle: "Understand the real problem",
    description: "Before solutions, I understand context. What does success look like? What's been tried? Where does it actually hurt?",
    artifacts: [
      "Stakeholder interview notes",
      "Current state process maps",
      "Pain point prioritization matrix",
      "Technical environment assessment",
    ],
  },
  {
    id: "align",
    title: "Align",
    subtitle: "Get everyone on the same page",
    description: "Misalignment kills projects. I facilitate workshops that surface assumptions and build shared understanding before we build.",
    artifacts: [
      "Requirements workshop outputs",
      "Decision log with rationale",
      "RACI matrix",
      "Success criteria document",
    ],
  },
  {
    id: "design",
    title: "Design",
    subtitle: "Architect the solution",
    description: "Solution design that accounts for constraints, integrations, and future needs. No surprises during build.",
    artifacts: [
      "Solution architecture diagram",
      "Data model specification",
      "Integration mapping",
      "UX wireframes and flows",
    ],
  },
  {
    id: "build",
    title: "Build",
    subtitle: "Ship working software",
    description: "Iterative development with continuous stakeholder visibility. Demo early, course-correct fast.",
    artifacts: [
      "Sprint deliverables",
      "Configuration documentation",
      "Test cases and results",
      "Demo recordings",
    ],
  },
  {
    id: "integrate",
    title: "Integrate",
    subtitle: "Connect the ecosystem",
    description: "Systems that talk to each other without manual intervention. Data flows, sync logic, error handling.",
    artifacts: [
      "Integration specifications",
      "Pipeline configurations",
      "Error handling procedures",
      "Data validation rules",
    ],
  },
  {
    id: "launch",
    title: "Launch",
    subtitle: "Go live with confidence",
    description: "Structured rollout with training, support plan, and clear success metrics. No one gets surprised on day one.",
    artifacts: [
      "Go-live checklist",
      "Training materials",
      "Support escalation path",
      "Rollback procedures",
    ],
  },
  {
    id: "iterate",
    title: "Iterate",
    subtitle: "Continuous improvement",
    description: "Post-launch isn't goodbye. I establish governance, feedback loops, and optimization roadmaps.",
    artifacts: [
      "Post-launch retrospective",
      "Enhancement backlog",
      "Governance procedures",
      "Admin runbooks",
    ],
  },
]

export const toolsAndEcosystems = [
  {
    category: "Quickbase Ecosystem",
    tools: [
      { name: "Quickbase", note: "Expert Builder certified" },
      { name: "Quickbase Pipelines", note: "Workflow automation" },
      { name: "Quickbase Forms", note: "External data capture" },
      { name: "Quickbase Sync", note: "Data synchronization" },
    ],
  },
  {
    category: "Forms & Field Workflows",
    tools: [
      { name: "Jotform", note: "Complex form logic" },
      { name: "Typeform", note: "User-friendly intake" },
      { name: "Mobile interfaces", note: "Field data capture" },
      { name: "Document generation", note: "Automated outputs" },
    ],
  },
  {
    category: "Integration Patterns",
    tools: [
      { name: "REST APIs", note: "Custom integrations" },
      { name: "Webhooks", note: "Event-driven sync" },
      { name: "Procore", note: "Construction ecosystem" },
      { name: "Make/Zapier", note: "No-code connections" },
    ],
  },
  {
    category: "Reporting & Governance",
    tools: [
      { name: "Power BI", note: "Executive dashboards" },
      { name: "Advanced reporting", note: "Complex analytics" },
      { name: "Audit logging", note: "Compliance tracking" },
      { name: "Role-based access", note: "Security governance" },
    ],
  },
  {
    category: "AI Tools (Used Responsibly)",
    tools: [
      { name: "Claude", note: "Analysis & documentation" },
      { name: "GPT-4", note: "Code acceleration" },
      { name: "Cursor", note: "AI-assisted development" },
      { name: "Custom workflows", note: "Delivery automation" },
    ],
  },
]

export const awards = [
  {
    title: "President's Club",
    issuer: "Quickbase",
    date: "January 2025",
    description: "Awarded for exceeding performance targets and delivering exemplary service",
    highlight: true,
  },
  {
    title: "Best Employee Award",
    issuer: "UT Health Science Center",
    date: "2009",
    description: "Recognized out of 800+ employees for outstanding performance",
    highlight: false,
  },
]

export const certifications = [
  {
    name: "Coding Boot Camp",
    issuer: "UT Austin Center for Professional Education",
    date: "Dec 2019",
    skills: ["HTML", "Node.js", "MongoDB", "JavaScript", "React.js", "MySQL"],
  },
  {
    name: "PMI Citizen Developer Practitioner",
    issuer: "Project Management Institute",
    date: "May 2023",
    credentialId: "3539432",
  },
  {
    name: "ITIL V3 Foundation",
    issuer: "AXELOS Global Best Practice",
    date: "Jul 2014",
    credentialId: "GCI-2014-4841",
  },
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    credentialId: "COMP001000804730",
  },
  {
    name: "Pipelines Builder",
    issuer: "Quickbase",
    date: "Sep 2025",
    expires: "Sep 2027",
    credentialId: "159828191",
  },
  {
    name: "Expert Builder",
    issuer: "Quickbase",
    date: "Sep 2025",
    expires: "Sep 2027",
    credentialId: "159827460",
  },
  {
    name: "App Builder",
    issuer: "Quickbase",
    date: "Sep 2025",
    expires: "Sep 2027",
    credentialId: "159825911",
  },
  {
    name: "App Foundations",
    issuer: "Quickbase",
    date: "Aug 2025",
    expires: "Aug 2027",
    credentialId: "157859785",
  },
]

export const testimonials = [
  {
    quote: "Stephen is one of the most selfless, self-motivated, and customer focused people I have ever had the pleasure of working with. He made every person he supported feel as if their incident was the only one he was focused on, without ever letting other items slip. His intangibles set him apart from any other candidate you may be considering.",
    name: "Carl Sandhoff",
    role: "Technical Account Manager",
    company: "Zoom",
    context: "Former manager",
  },
  {
    quote: "He never watched the clock, and stayed until the work was done. He recognizes the larger picture of how IT impacts his customers, and uses that as fuel to drive even harder. If I find an opportunity to bring Stephen into any company I am with, I would do so with great confidence.",
    name: "Carl Sandhoff",
    role: "Technical Account Manager",
    company: "Zoom",
    context: "Former manager",
  },
  {
    quote: "Stephen is a self-directed individual with outstanding customer service skills. Stephen always had a can-do attitude and never left a problem unresolved. He was well liked by all of our physicians and staff.",
    name: "Sue DeMarco",
    role: "Practice Administrator",
    company: "US Oncology / Texas Oncology",
    context: "Former colleague",
  },
]

export const aboutContent = {
  intro: "I build systems that move faster than the problems they solve.",
  paragraphs: [
    "I'm a full-stack technologist and implementation leader who works across presales, customer partnership, and delivery. For over 15 years, I've been the person organizations call when a project needs to move from 'sold' to 'shipped.'",
    "I work directly with customers to understand what they're trying to achieve, help shape requirements, and design solutions that are practical, scalable, and aligned to real business needs. In presales, I partner closely with sales teams to scope intelligently, reduce risk, and clearly communicate technical value so customers can make confident decisions.",
    "My background spans full-stack development, low-code platforms, integrations, automation, and data-driven systems. I've led implementations across healthcare, energy services, and enterprise software. I use AI daily to accelerate design, validate ideas, and improve quality—without losing sight of good engineering judgment or customer trust.",
    "I care about building things that work, make sense, and actually get used.",
  ],
  principles: [
    { title: "Clarity beats complexity", description: "If users need a manual, the design failed." },
    { title: "Ship value fast", description: "Perfect is the enemy of useful." },
    { title: "Governance without friction", description: "Rules that help, not hinder." },
    { title: "Build for the next team", description: "Documentation and maintainability matter." },
  ],
}

export const footerContent = {
  tagline: "Built with caffeine, good judgment, and an appropriate amount of AI assistance.",
}
