// Personal Information
export const personal = {
    name: "Aniruddha Khandekar",
    title: "Software Engineer",
    taglines: [
        "Software Engineer",
        "Full Stack Developer",
        "MSCS @ USC"
    ],
    location: "Los Angeles, CA",
    email: "ak21771@usc.edu",
    // phone: "+1 (323) 220-5939",
    github: "https://github.com/NeoHexene",
    linkedin: "https://linkedin.com/in/aniruddha30/",
    resume: `${import.meta.env.BASE_URL}resume/Aniruddha_Khandekar_Resume.pdf`,
    bio: "Master's student in Computer Science at USC, passionate about building scalable backend systems and intelligent applications. Previously built enterprise-grade fintech microservices at Intellect Design Arena."
};

// List of educations
export const education = [
    {
        school: "University of Southern California",
        degree: "Master of Science in Computer Science",
        period: "Aug 2025 – May 2027",
        location: "Los Angeles, CA",
        gpa: "3.42 / 4.0",
    },
    {
        school: "University of Mumbai",
        degree: "Bachelor of Engineering in Computer Engineering",
        period: "Jul 2019 – May 2023",
        location: "Mumbai, India",
        gpa: "3.75 / 4.0",
    }
];

// List of experiences
export const experience = [
    {
        role: "Software Engineer",
        company: "Intellect Design Arena Ltd.",
        location: "Mumbai, India",
        period: "Aug 2023 – Jul 2025",
        bullets: [
            "Developed and maintained backend services and RESTful APIs using Java and Spring Boot for enterprise-SaaS fintech application built on microservices architecture, supporting scalable multi-tenant deployments.",
            "Built an AI-powered automated loan initiation system that parses inbound emails, validates inputs, and integrates with downstream systems via REST APIs — reducing loan initiation time by 80%.",
            "Migrated core backend services from Java 8 → Java 17 and Spring Boot 2.x → 3.x with zero functionality loss in production.",
            "Engineered a high-performance Rule Engine using a custom orchestration framework achieving 70% faster processing with reduced human intervention compared to legacy calculators.",
            "Collaborated in Agile environment with sprint planning, code reviews, unit testing, and CI/CD-driven deployments.",
        ],
        tags: ["Java", "Spring Boot", "Microservices", "Oracle", "PostgreSQL", "REST APIs"],
    },
    {
        role: "Robotics Kit Developer Intern",
        company: "IITians Curious Minds",
        location: "Mumbai, India",
        period: "Jun 2022 – Jul 2022",
        bullets: [
            "Developed and tested Arduino-based embedded programs with C/C++ in Arduino IDE.",
            "Assembled and optimized robotics kits used by students, simplifying complex technical concepts.",
        ],
        tags: ["C / C++", "Arduino", "Embedded Systems"],
    }
];

// List of projects
export const projects = [
    {
        id: 1,
        name: "Ecommerce Website",
        description: "Full-stack ecommerce platform with JWT authentication, role-based access control, and Razorpay payment integration. Backend built with Spring Boot + Hibernate / JPA, frontend with Angular.",
        tags: ["Spring Boot", "Angular", "MySQL", "JWT", "Razorpay"],
        github: "https://github.com/NeoHexene/ecommerce-website",
        youtubeId: "6_Qvqc26ObQ",
        color: "#3b82f6",
        icon: "🛒",
        gradient: "from-blue-500/20 to-indigo-600/20",
        highlights: ["JWT Auth", "Razorpay Payments", "Role-based Access"]
    },
    {
        id: 2,
        name: "Event Search System",
        description: "Full-stack event search tool with Python / Node.js backend and responsive JavaScript / Angular frontend. Integrates external REST APIs for event and geocoding data. Deployed on Google Cloud Platform (App Engine).",
        tags: ["Python", "Node.js", "JavaScript", "Angular", "REST APIs", "GCP"],
        github: "https://github.com/NeoHexene/Event-Search-System",
        youtubeId: "hwIjiPTclVw",
        color: "#a855f7",
        icon: "🔍",
        gradient: "from-purple-500/20 to-pink-600/20",
        highlights: ["Geocoding API", "External Event API Integration", "GCP", ""]
    },
    {
        id: 3,
        name: "Tic Tac Toe",
        description: "AI driven, responsive Tic-Tac-Toe supporting PvP and PvAI modes. Implements Minimax algorithm for optimal AI moves. Uses Reducer + Custom Hooks architecture for time-travel and undo / redo features.",
        tags: ["React", "TypeScript", "Vite", "Minimax AI"],
        github: "https://github.com/NeoHexene/Tic-Tac-Toe",
        youtubeId: "TsJbLFxsGIo",
        color: "#f59e0b",
        icon: "🤖",
        gradient: "from-amber-500/20 to-orange-600/20",
        highlights: ["Minimax Algorithm", "PvAI Mode", "Time Travel"]
    },
    {
        id: 4,
        name: "Online Banking System",
        description: "Java-based banking application with Servlet-powered backend connected to Oracle database. Implements APIs for account creation, deposits, withdrawals, and transaction history with full validation.",
        tags: ["Java", "Servlets", "JSP", "Oracle", "HTML", "CSS"],
        github: "https://github.com/NeoHexene/Online-Banking-System",
        color: "#10b981",
        icon: "🏦",
        gradient: "from-emerald-500/20 to-teal-600/20",
        highlights: ["Oracle DB", "Transaction APIs", "Full Validation"]
    },
    {
        id: 5,
        name: "Patient Record Management",
        description: "Web-based patient management system with role-based authentication for admins and patients. Implements appointment scheduling, patient record management, and room allocation.",
        tags: ["PHP", "MySQL", "JavaScript", "HTML", "XAMPP"],
        github: "https://github.com/NeoHexene/Patient-Record-Management-System",
        color: "#ef4444",
        icon: "🏥",
        gradient: "from-red-500/20 to-rose-600/20",
        highlights: ["Role-based Auth", "Appointment Booking", "Room Allocation"],
    }
];

// Map skills with respect to their categories.
export const skills = {
    Languages: [
        { name: "Java", level: 93 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "SQL", level: 88 }
    ],
    Backend: [
        { name: "Spring Boot", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "RESTful APIs", level: 89 },
        { name: "Flask", level: 80 },
        { name: "Microservices", level: 85 }
    ],
    Frontend: [
        { name: "Angular", level: 85 },
        { name: "React", level: 80 },
        { name: "HTML / CSS", level: 83 }
    ],
    "Databases & Cloud": [
        { name: "Oracle / PostgresSQL", level: 88 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 70 },
        { name: "GCP", level: 75 }
    ],
    "Tools & Practices": [
        { name: "Git / GitHub", level: 90 },
        { name: "Jira / Agile", level: 86 },
        { name: "Postman", level: 90 },
        { name: "Docker / Kubernetes", level: 75 }
    ]
};