export const siteConfig = {
  name: "Dhanushkumar Jayakumar Vasuki",
  title: "Computer Engineering Graduate Student",
  description: "Master's student at NYU with experience in software development, cybersecurity, and machine learning",
  accentColor: "#3B82F6",
  social: {
    email: "dj2680@nyu.edu",
    linkedin: "https://www.linkedin.com/in/dhanushkumar-jv-2b0564248/",
    twitter: "",
    github: "https://github.com/Dhanush010",
  },
  aboutMe:
    "I'm a Software Engineer and Master's student in Computer Engineering at NYU, specializing in backend systems, interactive applications, and scalable full-stack development. I enjoy building products that are reliable, performant, and easy for people to use.\n\nAcross industry and academic projects, I've worked on real-time collaboration tools, algorithm visualization platforms, system-level automation, and decentralized applications. My experience spans Python, JavaScript/TypeScript, Node.js, React, MongoDB, SQL, distributed systems, and system design.\n\nI care deeply about clean architecture, maintainable code, and creating tools that genuinely improve user experience. I also contribute to open-source projects and love working in collaborative engineering environments.",
  skills: ["Python", "Java", "C", "C++", "JavaScript", "React", "Node.js", "TensorFlow", "PyTorch", "scikit-learn", "Flask", "Django", "SQL", "MongoDB", "Hyperledger Fabric", "AWS", "Git", "Linux", "Mainframe", "PL/SQL", "HTML", "CSS", "Express.js", "REST API", "pandas", "NumPy", "Matplotlib", "MySQL"],
  projects: [
    {
      name: "SyncScribe - Real-time Collaborative Document Editor",
      description:
        "SyncScribe is a full-stack, real-time collaborative document editing platform inspired by Google Docs. Multiple users can edit documents simultaneously with instant synchronization, live cursor tracking, and presence indicators. Key features include JWT authentication, version history, collaborative comments, document sharing, and export to PDF/DOCX/TXT/Markdown. The application uses WebSocket technology for low-latency real-time updates and is fully containerized with Docker Compose for easy deployment.",
      link: "https://github.com/Dhanush010/Syncscribe",
      skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "WebSockets", "Quill.js", "Docker"],
    },
    {
      name: "AlgoViz - Interactive Algorithm Visualizer",
      description:
        "Developed an interactive Algorithm Visualizer web app using React.js that animates step-by-step executions of sorting and searching algorithms (Bubble Sort, Merge Sort, Quick Sort, Binary Search), featuring real-time pseudocode highlighting, dynamic controls for array size and speed, and a responsive, user-friendly interface.",
      link: "https://github.com/Dhanush010/AlgoViz",
      skills: ["React", "JavaScript", "CSS3", "HTML", "SVG/Canvas"],
    },
    {
      name: "Advanced Intrusion Detection Framework",
      description:
        "Developed a two-stage intrusion detection system using Autoencoder and LSTM that boosted cyber threat detection accuracy and significantly cut false positives in live network environments. Integrated with Flask for real-time monitoring and alerts.",
      link: "https://github.com/Dhanush010/Advanced-Intrusion-Detection-Framework-Leveraging-Auto-Encoder-and-LSTM",
      skills: ["Python", "Flask", "TensorFlow", "scikit-learn", "Machine Learning"],
    },
    {
      name: "Library Book Management System using Blockchain",
      description:
        "Developed a decentralized library book management system using Hyperledger Fabric and smart contracts, ensuring secure, transparent, and tamper-proof transaction tracking. Enhanced accountability and operational efficiency with a Python backend and user-friendly frontend.",
      link: "https://github.com/Dhanush010/Library-Book-Management-Using-Blockchain-Technology",
      skills: ["Hyperledger Fabric", "Python", "Smart Contracts", "HTML", "CSS", "JavaScript"],
    },
  ],
  openSource: [
    {
      organization: "Netflix - Metaflow",
      pr: "Fix JobSet with @retry(times=0) validation error (#2672)",
      prLink: "https://github.com/Netflix/metaflow/pull/2672",
      description: [
        "Identified and resolved a JobSet generation failure in Metaflow Ray where @retry(times=0) produced invalid Kubernetes JobSet names due to missing retryStrategy, causing workflow submission errors.",
        "Refactored retry-handling logic by computing total retries from decorators and conditionally injecting retry template variables into dag templates() and container templates(), ensuring full Argo Workflows compatibility; fix passed CI (32 checks) and was merged into Metaflow main (commit a881605).",
      ],
    },
    {
      organization: "Roblox / RobloxGuard-1.0",
      pr: "fix: resolve dtype, decoding, and padding issues for safety evaluation (#9)",
      prLink: "https://github.com/Roblox/RobloxGuard-1.0/pull/9",
      description: [
        "Fixed dtype, decoding, and padding bugs in the evaluation pipeline (LLaMA 3.1), adding dynamic dtype selection, left-padding, and configurable deterministic generation; merged to main (#9).",
        "Improved numerical accuracy, reproducibility, and batch safety by refactoring inference.py and resolving all issues reported in GitHub Issue #4.",
      ],
    },
  ],
  experience: [
    {
      company: "Tata Consultancy Services",
      title: "Associate System Engineer",
      dateRange: "July 2024 - July 2025",
      bullets: [
        "Completed training focused on Core Java (OOPs, Collections, Interfaces, Exception Handling), Advanced Java (Servlets, JSP, JDBC), UI development (HTML, CSS, JavaScript), SQL/PL SQL, and Unix fundamentals",
        "Provided production support for mainframe systems by monitoring batch jobs, resolving abends, handling critical incidents, and ensuring strict SLA compliance (maintained 100% SLA adherence during first 6 months)",
        "Proposed and implemented automation improvements in job monitoring processes, reducing manual effort and increasing the efficiency of the operations",
        "Authored Standard Operating Procedures (SOPs) to support knowledge transfer and onboarding of new joiners in the production support team",
        "Handled critical production incidents during off-hours with zero SLA breaches, ensuring uninterrupted business continuity and system reliability",
      ],
    },
    {
      company: "Tamil Nadu Police Cyber Crime Wing",
      title: "Cybersecurity Intern",
      dateRange: "February 2024 - March 2024",
      bullets: [
        "Conducted system security assessments and proposed mitigations, protecting large-scale public systems and reducing potential breaches by 30%",
        "Analyzed cyber threats and vulnerabilities in government systems",
        "Collaborated with law enforcement teams on digital forensics and incident response",
        "Documented security findings and provided recommendations for system hardening",
      ],
    },
  ],
  education: [
    {
      school: "New York University",
      degree: "Master's in Computer Engineering",
      dateRange: "September 2025 - May 2027",
      achievements: [
        "Currently pursuing advanced studies in Computer Engineering with focus on AI/ML and cybersecurity",
        "Engaging in cutting-edge research and practical applications of emerging technologies",
        "Building expertise in machine learning, deep learning, and advanced software engineering practices",
        "Participating in university research projects and industry collaborations",
      ],
    },
    {
      school: "SASTRA University",
      degree: "Bachelor's of Technology in Computer Science and Engineering",
      dateRange: "August 2020",
      achievements: [
        "Graduated with Cumulative GPA: 8.71/10.00",
        "Completed comprehensive coursework in computer science fundamentals, algorithms, and software engineering",
        "Developed strong foundation in programming languages, data structures, and system design",
        "Participated in technical competitions and collaborative projects throughout academic career",
      ],
    },
  ],
};

