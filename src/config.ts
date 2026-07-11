export const siteConfig = {
  name: "Dhanushkumar Jayakumar Vasuki",
  shortName: "DJV",
  title: "Backend Engineer & Open Source Contributor",
  tagline: "NYU CS Engineering • GPA 4.0",
  availability: "// Available for SWE roles • New York",
  description:
    "Backend engineer and open source contributor. GSoC 2026 @ Lawrence Berkeley National Lab. Merged PRs at Netflix & Roblox.",
  accentColor: "#6366f1",
  achievements: [
    "GSoC 2026 @ Lawrence Berkeley National Lab",
    "Merged PRs at Netflix & Roblox",
    "Built production systems on Kubernetes",
  ],
  social: {
    email: "dj2680@nyu.edu",
    linkedin: "https://www.linkedin.com/in/dhanushkumar-jv-2b0564248/",
    github: "https://github.com/Dhanush010",
  },
  about: [
    "I build backend systems that are fast, tested, and actually deployed. Currently contributing to AIDRIN at Lawrence Berkeley National Lab through Google Summer of Code 2026, extending scientific data format support for ML readiness inspection.",
    "Previously at Tata Consultancy Services building distributed backend systems, and I've had PRs merged into Netflix Metaflow and Roblox's safety evaluation pipeline.",
    "I'm looking for software engineering roles where I can work on systems that matter at scale.",
  ],
  experience: [
    {
      dateRange: "Jun 2026 – Sep 2026",
      title: "Google Summer of Code 2026",
      company: "Open-Source Contributor @ Lawrence Berkeley National Laboratory",
      bullets: [
        "Extended AIDRIN's file format support to Zarr and ROOT by designing a custom ingestion interface, enabling ML readiness inspection across 2 new scientific data formats used at national labs.",
        "Hardened the HDF5 reader and added multi-file ingestion support; contributed merged PRs including ML framework robustness improvements.",
      ],
      tags: ["Python", "HDF5", "Zarr", "ROOT", "NumPy", "Open Source"],
    },
    {
      dateRange: "Jul 2024 – Jul 2025",
      title: "Assistant System Engineer",
      company: "Tata Consultancy Services · Kochi, India",
      bullets: [
        "Built scalable backend modules for a Cruise Management System in Java/JDBC/SQL, improving scheduling efficiency by 40%.",
        "Maintained 100% SLA compliance monitoring 200+ daily batch jobs and resolving 50+ high-severity incidents monthly.",
        "Automated job-monitoring workflows cutting manual effort by 20+ hrs/month.",
      ],
      tags: ["Java", "SQL", "Mainframe", "Linux", "REST APIs"],
    },
  ],
  openSource: [
    {
      org: "Netflix / Metaflow",
      icon: "N",
      iconColor: "#E50914",
      prNumber: "#2672",
      prTitle: "Fix JobSet with @retry(times=0) validation error",
      description:
        "Diagnosed invalid Kubernetes template names from missing retryStrategy logic in Metaflow Ray's JobSet generation. Refactored retry-handling to inject template variables conditionally — passed 32 CI checks.",
      tags: ["Python", "Kubernetes", "Argo Workflows", "CI/CD"],
      prLink: "https://github.com/Netflix/metaflow/pull/2672",
    },
    {
      org: "Roblox / RobloxGuard",
      icon: "R",
      iconColor: "#00A2FF",
      prNumber: "#9",
      prTitle: "Fix dtype, decoding, and padding issues in LLaMA safety eval",
      description:
        "Resolved dtype mismatch, decoding failures, and padding bugs in the LLaMA 3.1 evaluation pipeline. Refactored inference.py closing all issues from GitHub Issue #4.",
      tags: ["Python", "LLaMA", "ML Evaluation", "PyTorch"],
      prLink: "https://github.com/Roblox/RobloxGuard-1.0/pull/9",
    },
  ],
  projects: [
    {
      tier: "featured",
      name: "BestShot - MLOps Platform on Kubernetes",
      badge: "MLOps · Kubernetes",
      description:
        "Bootstrapped a production K3s cluster on Chameleon CHI@TACC bare-metal GPU. Designed staging/canary/production environments with automated model promotion CronJobs - 5-day uptime, 0 pod restarts. Built full CI/CD pipeline via GitHub Actions → GHCR.",
      tags: ["K3s", "Kubernetes", "GitHub Actions", "MLflow", "Prometheus", "Docker"],
      github: "https://github.com/Dhanush010/Bestshot",
    },
    {
      tier: "main",
      name: "URL Shortener",
      badge: "Live",
      live: true,
      description:
        "Production-grade rate-limited URL shortener. Redis cache-aside pattern serving hot redirects at <10ms p95 under 500 concurrent users. 91% test coverage with testcontainers. Sliding-window rate limiter, RFC 7807 error responses, Alembic migrations.",
      tags: ["FastAPI", "PostgreSQL", "Redis", "Pytest", "Locust", "Docker"],
      github: "https://github.com/Dhanush010/URL-Shortener",
      docs: "https://url-shortener-autr.onrender.com/docs",
    },
    {
      tier: "main",
      name: "CTR Prediction - Criteo Ad Pipeline",
      badge: "Big Data · ML",
      description:
        "Cardinality-aware PySpark feature pipeline encoding 39 columns into 278,589-dim sparse vectors across 45.8M impressions. Isotonic regression calibration correcting CTR bias (~25.6% observed vs ~5% real-world).",
      tags: ["PySpark", "XGBoost", "Python", "Streamlit"],
      github: "https://github.com/Dhanush010/criteo-ctr-prediction",
    },
    {
      tier: "other",
      name: "SyncScribe - Real-Time Collaborative Editor",
      badge: "Full-Stack · Real-Time",
      description:
        "Google Docs-style collaborative editor with live cursor tracking and multi-user presence. Built with Node.js, WebSockets, and MongoDB for sub-50ms sync latency. JWT authentication, version history, document sharing, and export to PDF/DOCX. Fully containerized with Docker Compose.",
      tags: ["React", "Node.js", "WebSockets", "MongoDB", "Docker", "JWT"],
      github: "https://github.com/Dhanush010/Syncscribe",
    },
    {
      tier: "other",
      name: "AE-LSTM Intrusion Detection Framework",
      badge: "ML · Cybersecurity",
      description:
        "Hybrid Autoencoder + LSTM model trained on the UNSW-NB15 dataset achieving 92% detection accuracy with 15% fewer false positives than baseline approaches. Autoencoder reduces feature dimensionality before LSTM sequence modeling detects attack patterns. Flask dashboard for real-time monitoring cut incident response time by 7 minutes.",
      tags: ["Python", "TensorFlow", "Scikit-learn", "Flask", "LSTM", "Autoencoder"],
      github:
        "https://github.com/Dhanush010/Advanced-Intrusion-Detection-Framework-Leveraging-Auto-Encoder-and-LSTM",
    },
    {
      tier: "other",
      name: "AlgoViz - Interactive Algorithm Visualizer",
      badge: "Frontend · Education",
      description:
        "React app that animates step-by-step execution of sorting and searching algorithms with real-time pseudocode highlighting. Implements Bubble Sort, Merge Sort, Quick Sort, and Binary Search with dynamic controls for array size and animation speed. Optimized React rendering reduced frame lag by 25% during heavy animations.",
      tags: ["React", "JavaScript", "CSS", "SVG"],
      github: "https://github.com/Dhanush010/AlgoViz",
    },
  ],
  skills: [
    {
      category: "Languages",
      icon: "code",
      items: ["Java", "Python", "C/C++", "SQL", "JavaScript", "HTML/CSS"],
    },
    {
      category: "Backend & APIs",
      icon: "server",
      items: [
        "FastAPI",
        "Node.js",
        "Express.js",
        "Flask",
        "REST APIs",
        "Redis",
        "PostgreSQL",
        "MongoDB",
        "Alembic",
      ],
    },
    {
      category: "DevOps & Cloud",
      icon: "cloud",
      items: [
        "Kubernetes (K3s)",
        "Docker",
        "GitHub Actions",
        "AWS (EC2, S3)",
        "Linux",
        "Prometheus",
        "Grafana",
        "CI/CD",
      ],
    },
    {
      category: "Data & ML",
      icon: "chart",
      items: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "PySpark",
        "MLflow",
        "Pandas",
        "NumPy",
      ],
    },
    {
      category: "Testing & Load",
      icon: "test",
      items: ["Pytest", "testcontainers", "Locust"],
      fullWidth: true,
    },
  ],
  contact: {
    heading: "Let's work together",
    description:
      "I'm looking for software engineering roles — backend, platform, or full-stack. Open to internships, new grad, and junior SWE positions.",
    location: "New York, US",
  },
};
