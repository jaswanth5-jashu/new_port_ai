export const personal = {
  name: "Bobbillapati Jaswanth Simha",
  shortName: "Jaswanth Simha",
  initials: "JS",
  badges: ["AI Explorer", "Software Developer", "Full Stack Engineer", "Content Editor", "Cinematographer"],
  title: "Python Full-Stack Developer | Agentic AI | SAP BTP AI",
  subtitle: "Python Full Stack Developer | Software Developer | AI & ML Learner",
  description:
    "I work with Python, SQL, HTML, CSS, and JavaScript to build intelligent applications and smooth user experiences. I enjoy creating simple, scalable, and modern solutions using clean code and smart design.",
  resumeUrl:
    "/assets/resume/jaswanth_resume.pdf",
  email: "jaswanthsimhab@gmail.com",
};

export const socials = {
  github: "https://github.com/jaswanth5-jashu",
  linkedin: "https://www.linkedin.com/in/bobbillapati-jaswanth-simha-95312124b/",
  instagram: "https://www.instagram.com/_.jaswanth5._/",
  email: "mailto:jaswanthsimhab@gmail.com",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Generative AI", href: "#generative-ai" },
  { label: "Agentic AI", href: "#agentic-ai" },
  { label: "SAP BTP AI", href: "#sap-btp" },
  { label: "Learning", href: "#learning" },
  { label: "Certificates", href: "#certificates" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  bio: `I'm <strong>Bobbillapati Jaswanth Simha</strong>, a <strong>2025 graduate from CMR Technical Campus</strong>.<br/><br/>
I'm passionate about building modern, intelligent, and high-performance applications that merge creativity with strong engineering fundamentals.<br/><br/>
As a fresher, I may not have industry experience, but I have proven skills in <strong>Python Full Stack Development</strong>, <strong>Software Development</strong>, and I'm actively learning <strong>AI &amp; Machine Learning</strong>.<br/><br/>
I have solid hands-on knowledge of <strong>Python, SQL, HTML, CSS, and JavaScript</strong>, and I enjoy working on projects that help me explore frameworks, optimize systems, and build clean, maintainable code structures.<br/><br/>
I also work as a <strong>Video Editor</strong> and <strong>Cinematographer</strong>, bringing visual storytelling and creative thinking into my technical work.`,
};

export const skillCategories = [
  {
    number: "01",
    category: "Python & Full-Stack",
    items: [
      { name: "Python", level: 85 },
      { name: "FastAPI", level: 78 },
      { name: "REST APIs", level: 80 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Vite", level: 80 },
      { name: "MySQL", level: 80 },
      { name: "Git", level: 82 },
      { name: "GitHub", level: 82 },
    ],
  },
  {
    number: "02",
    category: "AI/ML Fundamentals",
    note: "Currently improving",
    items: [
      { name: "Machine Learning", level: 70 },
      { name: "NumPy", level: 75 },
      { name: "Pandas", level: 72 },
      { name: "Scikit-learn", level: 68 },
      { name: "Data Preprocessing", level: 70 },
      { name: "Feature Engineering", level: 68 },
      { name: "Model Training", level: 70 },
      { name: "Model Evaluation", level: 68 },
      { name: "CNN", level: 60 },
      { name: "SVM", level: 65 },
      { name: "Random Forest", level: 65 },
      { name: "Naive Bayes", level: 62 },
    ],
  },
  {
    number: "03",
    category: "Generative AI",
    items: [
      { name: "LLMs", level: 78 },
      { name: "Google Gemini", level: 80 },
      { name: "Prompt Engineering", level: 82 },
      { name: "Embeddings", level: 75 },
      { name: "Vector Search", level: 72 },
      { name: "RAG", level: 76 },
      { name: "Document Q&A", level: 78 },
      { name: "Context-aware Generation", level: 75 },
      { name: "AI Applications", level: 78 },
    ],
  },
  {
    number: "04",
    category: "Agentic AI",
    note: "Learning & building",
    description: "Intelligent workflows where LLMs reason over context, use tools, interact with APIs, and perform multi-step tasks.",
    items: [
      { name: "LangChain", level: 72 },
      { name: "LangGraph", level: 68 },
      { name: "AI Agents", level: 70 },
      { name: "Tool Calling", level: 72 },
      { name: "Function Calling", level: 70 },
      { name: "Agent Workflows", level: 72 },
      { name: "RAG", level: 76 },
      { name: "API Integration", level: 75 },
      { name: "MCP", level: 65 },
    ],
  },
  {
    number: "05",
    category: "SAP BTP AI",
    note: "Exploring",
    items: [
      { name: "SAP BTP", level: 60 },
      { name: "SAP HANA Cloud", level: 58 },
      { name: "Vector Embeddings", level: 60 },
      { name: "SAP AI Core", level: 55 },
      { name: "SAP AI Launchpad", level: 55 },
      { name: "Joule", level: 58 },
      { name: "Joule Studio", level: 55 },
      { name: "Joule Skills", level: 55 },
      { name: "Generative AI on SAP BTP", level: 58 },
    ],
  },
  {
    number: "06",
    category: "Tools",
    items: [
      { name: "VS Code", level: 90 },
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "Postman", level: 80 },
      { name: "Canva", level: 85 },
    ],
  },
];

export const projects = [
  {
    title: "DocMind – RAG-Based Document Q&A",
    label: "Generative AI",
    image: "/assets/projects/project_rag/rag1.png",
    description:
      "A RAG-powered AI application that lets users upload documents and ask questions to get context-aware answers.",
    overview:
      "DocMind is a document question-answering application built with Retrieval-Augmented Generation (RAG). It processes uploaded documents, splits content into chunks, generates vector embeddings, and retrieves relevant information to answer user questions. Built with Python, FastAPI, LangChain, Google Gemini, and a React + Vite frontend, it provides an interactive interface for document-based question answering.",
    tech: [
      "Python",
      "FastAPI",
      "React JS",
      "LangChain",
      "Google Gemini",
      "Embeddings",
      "RAG"
    ],
    gallery: ["/assets/projects/project_rag/rag1.png","/assets/projects/project_rag/rag2.png","/assets/projects/project_rag/rag3.png","/assets/projects/project_rag/rag4.png"],
    featured: true,
    github: "https://github.com/jaswanth5-jashu/project_DocMind",
    demo: "https://projectdocmind.vercel.app/",
    docs: null,
  },
  {
    title: "Deep Learning Traffic Surveillance System",
    label: "Machine learning project",
    image: "/assets/projects/project_traffic/project1_1.png",
    description:
      "Real-time traffic surveillance and abnormal behavior detection using deep learning, computer vision, and machine learning models.",
    overview:
      "The Real-Time Traffic Surveillance & Detection System uses Deep Learning and Computer Vision to monitor vehicle activity and identify abnormal driving behavior in real time. The system analyzes traffic footage, detects vehicles, and classifies actions such as overspeeding, sudden braking, wrong-way movement, and lane violations using models like CNN, SVM, Naïve Bayes, and Random Forest.\n\nBy focusing on structured traffic features and automated detection, the project reduces manual monitoring and increases accuracy. It is designed to support modern smart-city infrastructures, help authorities respond quickly to incidents, and improve overall road safety with fast, efficient, and scalable performance.",
    tech: ["Python", "Django", "CNN", "SVM", "Naive Bayes", "Random Forest", "Computer Vision Tools", "MySQL"],
    gallery: ["/assets/projects/project_traffic/project1_1.png","/assets/projects/project_traffic/project1_2.png","/assets/projects/project_traffic/project1_3.png"],
    github: "https://github.com/jaswanth5-jashu/project-traffic",
    demo: null,
    docs: "https://drive.google.com/drive/folders/1N8vJR-eXdwN1pABkYDFkTg-0a75yfVCn?usp=drive_link",
  },
  {
    title: "MediAssist: Healthcare & Patient Management",
    label: "Python application",
    image: "/assets/projects/project_mediassist/projectpic3.png",
    description:
      "A Python and MySQL application focused on managing patient records, medicine suggestions, and nearby pharmacy availability.",
    overview:
      "The MediAssist Health & Management System is designed to simplify patient care by managing patient records and intelligently suggesting medicines based on symptoms and disease information. The system analyzes patient data, identifies the condition, and recommends suitable medicines using a structured medical database, helping users receive accurate guidance quickly.\n\nIn addition to medicine suggestions, MediAssist also provides nearby medical shop details, including address, contact information, and real-time medicine availability, making it easier for patients to find required medicines without searching manually. The system maintains complete patient histories, diagnoses, prescriptions, and visit logs to support better treatment planning.\n\nThe backend of the system has been fully completed, including data storage, disease–medicine mapping, pharmacy availability logic, and API structure. The front-end interface delivers a clean, user-friendly UI for patients, doctors, and pharmacies.",
    tech: ["Python", "MySQL", "Database Design", "Healthcare System", "REST APIs"],
    gallery: ["/assets/projects/project_mediassist/projectpic3.png","/assets/projects/project_mediassist/project3_2.png","/assets/projects/project_mediassist/project3_1.png"],
    github: "https://github.com/jaswanth5-jashu/mediassit-project",
    demo: null,
    docs: "https://drive.google.com/drive/folders/1gQTMqfTZERXTdbxUELnOA2F-BfsyWChW?usp=drive_link",
  },
  {
    title: "Portfolio Website",
    label: "Web Development",
    image: "/assets/projects/project_port/port1.png",
    description:
      "A personal portfolio website showcasing my projects, technical skills, certifications, and professional journey through a clean and responsive interface.",
    overview:
      "A responsive personal portfolio website developed using React.js, Python, HTML, and CSS to present my technical skills, projects, certifications, and achievements. The website focuses on clean UI design, intuitive navigation, and an organized presentation of my professional profile.",
    tech: ["React.js", "Python", "HTML", "CSS"],
    gallery: ["/assets/projects/project_port/port1.png","/assets/projects/project_port/port2.png","/assets/projects/project_port/port3.png"],
    featured: true,
    github: "https://github.com/jaswanth5-jashu/new_port_ai",
    demo: "https://new-port-ai.vercel.app/",
    docs: null,
  },
];

export const generativeAIData = {
  highlights: [
    { icon: "💬", title: "LLMs & Prompt Engineering", desc: "Working with large language models and crafting effective prompts for accurate, context-aware outputs." },
    { icon: "🔮", title: "Embeddings & Vector Search", desc: "Using text embeddings to enable semantic search and similarity-based retrieval." },
    { icon: "📚", title: "RAG (Retrieval-Augmented Generation)", desc: "Building document Q&A systems that retrieve relevant context before generating answers." },
    { icon: "✨", title: "Google Gemini", desc: "Integrating Google Gemini models for multimodal AI capabilities in Python applications." },
  ],
};

export const agenticAIData = {
  highlights: [
    { icon: "🔗", title: "LangChain", desc: "Building LLM-powered pipelines with tools, memory, and agent capabilities." },
    { icon: "🕸️", title: "LangGraph", desc: "Creating stateful, multi-actor agent workflows with directed graphs." },
    { icon: "🛠️", title: "Tool & Function Calling", desc: "Enabling LLMs to call real-world APIs and functions to complete tasks." },
    { icon: "⚙️", title: "MCP (Model Context Protocol)", desc: "Exploring standardized protocols for connecting LLMs to external data and tools." },
  ],
};

export const sapBTPData = {
  highlights: [
    { icon: "🏢", title: "SAP BTP", desc: "SAP Business Technology Platform — the foundation for SAP cloud applications and extensions." },
    { icon: "☁️", title: "SAP HANA Cloud", desc: "Leveraging HANA Cloud's built-in vector engine for embedding storage and similarity search." },
    { icon: "🧠", title: "SAP AI Core & AI Launchpad", desc: "Deploying and managing AI models through SAP's enterprise AI infrastructure." },
    { icon: "⚡", title: "Joule & Joule Studio", desc: "Building Joule Skills — custom AI capabilities for SAP's generative AI copilot." },
  ],
};

export const certificates = [
    {
    title: "SAP BTP AI Development – Core AI",
    issuer: "Udacity / Accenture",
    image: "/assets/certificates/udacity.png",
    year: "2026",
    description: "Successfully completed the SAP BTP AI Development – Core AI for ATC Nanodegree Program offered by Udacity in collaboration with Accenture.",
    href: "https://www.udacity.com/certificate/e/c8d168f4-752c-11f1-bbc4-57e0e3bc29a6",
    link: "https://www.udacity.com/certificate/e/c8d168f4-752c-11f1-bbc4-57e0e3bc29a6",
    color: "#1428FF",
    emoji: "🟢",
  },
  
  {
    title: "Python Full Stack Development with NumPy and Pandas",
    issuer: "V Cube Software Solutions Pvt. Ltd, Hyderabad.",
    image: "/assets/certificates/vcube-python-fullstack.png",
    year: "2025",
    description:
      "Successfully completed Python Full Stack Development training, including NumPy and Pandas, at V Cube Software Solutions Pvt. Ltd., Hyderabad, Telangana, from July 2025 to December 2025.",
    href: "https://drive.google.com/file/d/1RgEiH6xRmv92leLHyjsa5-ekfGJutW0v/view?usp=sharing",
    link: "https://drive.google.com/file/d/1RgEiH6xRmv92leLHyjsa5-ekfGJutW0v/view?usp=sharing",
    color: "#8B1E1E",
    emoji: "🟢",
  },

  {
    title: "Boosting AI-Driven Business Transformation with Joule Agents – Intermediate Level",
    issuer: "SAP Learning",
    image: "/assets/certificates/boost.png",
    year: "2026",
    description: "Successfully completed the Intermediate Level course on Boosting AI-Driven Business Transformation with Joule Agents, offered by SAP Learning. Gained knowledge of AI-driven business transformation and the role of Joule Agents in enterprise automation.",
    href: "https://badger.learning.sap.com/verify/xikim-potus-mypuk-rytih-nugat",
    link: "https://badger.learning.sap.com/verify/xikim-potus-mypuk-rytih-nugat",
    color: "#E6007E",
    emoji: "🟢",
  },

  {
    title: "Free Agentic AI Course with Certification 2026: Learn Agent Memory and AI Skills",
    issuer: "Scaler Topics",
    image: "/assets/certificates/agentic-ai-scaler.png",
    year: "2026",
    description:
      "Completed the Free Agentic AI Course with Certification 2026: Learn Agent Memory and AI Skills from Scaler Topics. The tutorial includes 7 video tutorials and 7 learning modules. Certificate awarded on September 27, 2026.",
    href: "https://www.linkedin.com/shareArticle?url=https://moonshot.scaler.com/s/li/Ebdcj67is-",
    link: "https://www.linkedin.com/shareArticle?url=https://moonshot.scaler.com/s/li/Ebdcj67is-",
    color: "#06142F",
    emoji: "🟢",
  },

  {
    title: "HackerRank Python Skill Test",
    issuer: "HackerRank",
    image: "/assets/certificates/hackerrank-python.jpeg",
    year: "2024",
    description: "Completed HackerRank Python Skill certification test demonstrating Python programming proficiency.",
    href: "https://www.hackerrank.com/certificates/iframe/b8babda63306",
    link: "https://www.hackerrank.com/certificates/iframe/b8babda63306",
    color: "#00ea64",
    emoji: "🟢",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    image: "/assets/certificates/cisco-python.png",
    year: "2023",
    description: "Completed Cisco Networking Academy Python Essentials course covering Python fundamentals.",
    href: "https://www.netacad.com/certificates/?issuanceId=923fc782-98b0-4ffc-9495-404958621033",
    link: "https://www.netacad.com/certificates/?issuanceId=923fc782-98b0-4ffc-9495-404958621033",
    color: "#1BA0D7",
    emoji: "🔵",
  },
  {
    title: "Python Course",
    issuer: "Code With Swaroop",
    image: "/assets/certificates/python-course.jpg",
    year: "2023",
    description: "Completed a comprehensive Python course covering advanced Python concepts and real projects.",
    href: "https://www.codewithswaroop.com/verify-certificate?serialno=2SNXH09B",
    link: "https://www.codewithswaroop.com/verify-certificate?serialno=2SNXH09B",
    color: "#ff6b35",
    emoji: "🟠",
  },
  {
    title: "Workshop on ML using Python",
    issuer: "Machine Learning workshop",
    image: "/assets/certificates/ml-workshop.jpg",
    year: "2023",
    description: "Completed a hands-on workshop on Machine Learning using Python, covering core ML algorithms and implementation.",
    href: "https://drive.google.com/file/d/1FU5q6otGKLRNaqYSlkJkLB0IwXaRDot2/view?usp=sharing",
    link: "https://drive.google.com/file/d/1FU5q6otGKLRNaqYSlkJkLB0IwXaRDot2/view?usp=sharing",
    color: "#8b5cf6",
    emoji: "🟣",
  },
];

export const achievements = [
  {
    id: "ncc-camp",
    title: "Indian Air Force Attachment Camp 2023",
    description: "Participated in the Indian Air Force Attachment Camp 2023 in Bidar, representing AP & Telangana under NCC.",
    image: "/assets/achievements/ncc-air-force-camp.jpg",
    badge: "View photo",
    type: "photo",
  },
  {
    id: "ncc-cert",
    title: "NCC Achievement Certificate",
    description: "‘B’ & ‘C’ Certificates awarded with Merit Grade under the National Cadet Corps Air Force Wing.",
    image: "/assets/achievements/ncc-certificate.png",
    badge: "View certificate",
    type: "certificate",
  },
];

export const learningPaths = [
  { icon: "CodeXml", title: "Python Full-Stack", desc: "Improving backend APIs, databases, React integration, and full-stack application development.", level: 100 },
  { icon: "Bot", title: "Agentic AI", desc: "Learning LangChain, LangGraph, tool calling, MCP, and agent workflows.", level: 85 },
  { icon: "CloudCog", title: "SAP BTP AI", desc: "Exploring SAP BTP AI services, HANA Cloud, Joule, and AI application development.", level: 80 },
  { icon: "Sparkles", title: "Generative AI", desc: "Learning LLM applications, prompting, embeddings, and RAG.", level: 70 },
  { icon: "BrainCircuit", title: "Machine Learning", desc: "Strengthening ML fundamentals, algorithms, model evaluation, and practical implementation.", level: 60 },
];

export const roadmap = [
  { stage: "Foundation", skills: ["Python", "SQL", "HTML / CSS / JavaScript"] },
  { stage: "Full-Stack", skills: ["FastAPI", "REST APIs", "React", "MySQL"] },
  { stage: "AI Fundamentals", skills: ["NumPy", "Pandas", "ML", "Scikit-learn"] },
  { stage: "Generative AI", skills: ["LLMs", "Prompt Engineering", "Embeddings", "RAG"] },
  { stage: "Agentic AI", skills: ["LangChain", "LangGraph", "Tool Calling", "MCP", "AI Agents"] },
  { stage: "Enterprise AI", skills: ["SAP BTP", "SAP HANA Cloud", "SAP AI Core", "Joule"] },
];
