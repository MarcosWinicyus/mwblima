export const siteConfig = {
  name: "Marcos Winicyus",
  title: "Senior Analytics Engineer",
  description: "Portfolio website of Marcos Winicyus",
  accentColor: "#2A7F6E",
  heroHeadline: "Architecting intelligent systems that transform complexity into clarity.",
  heroSubheadline: "I design and build scalable data platforms and AI solutions that solve complex problems and generate real business impact.",
  social: {
    email: "marcoswinicyusbl@gmail.com",
    linkedin: "https://www.linkedin.com/in/marcos-winicyus",
    twitter: "",
    github: "https://github.com/MarcosWinicyus",
  },
  aboutMe: [
    "Marcos is a Senior Analytics Engineer and AI Engineer with 7+ years building high-scale data platforms for financial institutions including Nubank and Itaú.",
    "Currently modernizing Nubank's Lending data platform. As a key driver of Nubank's 'AI-First' strategy, he engineers autonomous Agentic Workflows to reinvent development and operational processes, eliminate technical debt, and accelerate software development cycles.",
    "Previously at Itaú, he led data engineering teams to implement Data Mesh architectures and built RAG-powered systems that drastically reduced documentation and development cycles.",
    "He holds a Master of Business Administration in Solutions Architecture from Full Cycle and a Bachelor's Degree in Computer Science from IFG."
  ],
  skills: [
    "Agentic Workflows",
    "MCP",
    "Python",
    "Scala",
    "Spark",
    "AWS",
    "Databricks",
    "SQL",
    "Terraform",
    "CI/CD"
  ],
  projects: [
    {
      name: "AI Documentation Migration Tool",
      description:
        "Developed an AI-driven tool using Python and RAG to migrate and process 50,000+ pages of legacy documentation 8x faster.",
      link: "https://stackspot.com/pt/blog/migracao-de-documentacoes",
      skills: ["Python", "RAG", "Streamlit", "GenAI"],
    },
    {
      name: "Internal Developer Platform",
      description:
        "Built a Python library standardizing AWS Glue configurations across the engineering team, reducing boilerplate by 40% and accelerating test coverage.",
      link: "",
      skills: ["Python", "AWS Glue", "CI/CD"],
    },
    {
      name: "Serverless Orchestration Layer",
      description:
        "Designed a serverless orchestration layer using AWS Step Functions that reduced new investment product launch time by 20%.",
      link: "https://marcoswinicyus.substack.com/p/arquitetura-de-orquestracao-na-pratica",
      skills: ["AWS Step Functions", "Terraform", "FinOps"],
    },
  ],
  articles: [
    {
      title: "Designing Data Platforms with Domain-Driven Data Mesh",
      date: "MAY 12, 2025",
      category: "Data Architecture",
      link: "#",
    },
    {
      title: "Agentic Workflows: The Next Evolution of Automation",
      date: "APR 28, 2025",
      category: "AI & Automation",
      link: "#",
    },
    {
      title: "From Data to Decisions: Building Systems that Matter",
      date: "APR 10, 2025",
      category: "Systems Thinking",
      link: "#",
    },
    {
      title: "Data in Production: Lessons from Real Implementations",
      date: "MAR 25, 2025",
      category: "GenAI",
      link: "#",
    }
  ],
  experience: [
    {
      company: "Nubank",
      title: "Senior Analytics Engineer",
      dateRange: "Oct 2025 - Present",
      bullets: [
        "Act as a key driver for Nubank's AI-First initiative by orchestrating hackathons and conducting technical trainings.",
        "Develop and deploy autonomous AI solutions (Agents, MCPs, Skills) that reinvent development and operational workflows.",
        "Built highly scalable credit policy pipelines in Scala and Spark on Databricks and AWS.",
      ],
    },
    {
      company: "Itaú",
      title: "Data Engineer Specialist | Tech Lead",
      dateRange: "Jul 2022 - Sep 2025",
      bullets: [
        "Led 10+ data engineers modernizing investment products, implementing Data Mesh architecture across 15+ squads.",
        "Built RAG-powered User Story generation system automating requirements documentation, reducing story creation time by 80%.",
        "Created QA test data generation tool using Glue Data Quality and RAG, improving test coverage by 95%.",
        "Designed serverless orchestration layer (AWS Step Functions) reducing investment product launch time by 20%.",
        "Created AI documentation migration tool processing 50,000+ pages, accelerating modernization cycle by 8x.",
        "Reduced critical ETL/ELT pipeline execution time by 80% through AI-generated Spark SQL and deep performance tuning.",
      ],
    },
    {
      company: "Nagro Crédito Agro",
      title: "Senior Data Engineer",
      dateRange: "Jun 2021 - Jun 2022",
      bullets: [
        "Led the automation of the credit concession process via microservices, a critical milestone that enabled record-time concessions and secured $15M+ in investment funding for the startup.",
        "Designed and built the core Back Office system (Streamlit), automating the loan formalization flow and serving as the backbone for allocating over $25M to investment products.",
        "Executed a strategic, zero-downtime cloud migration (GCP to AWS) for the entire credit analysis infrastructure.",
        "Developed end-to-end data pipelines and machine learning models for 10+ agricultural segments, reducing credit analysis time by over 40%.",
        "Engineered web scraping systems and calculated advanced credit risk metrics for automated analysis of portfolios totaling $30M+ in assets.",
      ],
    }
  ],
  education: [
    {
      school: "Full Cycle",
      degree: "Master of Business Administration, Solutions Architecture",
      dateRange: "2023 - 2024",
      achievements: [],
    },
    {
      school: "Instituto Federal de Goiás (IFG)",
      degree: "Bachelor's Degree in Computer Science",
      dateRange: "2017 - 2023",
      achievements: [],
    }
  ],
};
