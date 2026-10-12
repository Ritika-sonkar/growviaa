export type YearStatus = 'active' | 'coming-soon';

export interface YearStage {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  status: YearStatus;
  icon: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface CareerInterest {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface ProgrammingLanguage {
  id: string;
  name: string;
  description: string;
  icon: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  popularity: number;
  useCases: string[];
}

export interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  topics: string[];
  completed: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  progress: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface JobRole {
  id: string;
  title: string;
  description: string;
  icon: string;
  avgSalary: string;
  skills: string[];
  growth: string;
}

export interface DreamCompany {
  id: string;
  name: string;
  description: string;
  icon: string;
  roles: string[];
  difficulty: 'Achievable' | 'Challenging' | 'Dream';
}

export interface ProjectIdea {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  technologies: string[];
  estimatedTime: string;
}

export const yearStages: YearStage[] = [
  {
    id: 1,
    title: 'First Year',
    subtitle: 'Foundation',
    description: 'Explore interests, learn programming basics, and discover career paths.',
    status: 'active',
    icon: 'Rocket',
  },
  {
    id: 2,
    title: 'Second Year',
    subtitle: 'Exploration',
    description: 'Deepen core CS skills and start building real projects.',
    status: 'coming-soon',
    icon: 'Compass',
  },
  {
    id: 3,
    title: 'Third Year',
    subtitle: 'Specialization',
    description: 'Choose your domain, tackle advanced topics, and prep for internships.',
    status: 'coming-soon',
    icon: 'Target',
  },
  {
    id: 4,
    title: 'Fourth Year',
    subtitle: 'Launch',
    description: 'Crack placements, finalize projects, and launch your career.',
    status: 'coming-soon',
    icon: 'Trophy',
  },
];

export const features: Feature[] = [
  {
    id: 'career-discovery',
    icon: 'Compass',
    title: 'Career Discovery',
    description: 'Explore different software engineering roles and find the path that matches your interests and strengths.',
  },
  {
    id: 'skill-development',
    icon: 'Zap',
    title: 'Skill Development',
    description: 'Track your technical skills with clear progress indicators and know exactly what to learn next.',
  },
  {
    id: 'personalized-roadmaps',
    icon: 'Map',
    title: 'Personalized Roadmaps',
    description: 'Follow beginner-friendly learning roadmaps designed for each year of your B.Tech journey.',
  },
];

export const careerInterests: CareerInterest[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Build interactive websites and web applications that millions of people use every day.',
    icon: 'Globe',
    tags: ['Frontend', 'Backend', 'Full Stack'],
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    description: 'Create apps for Android and iOS that run in the hands of users worldwide.',
    icon: 'Smartphone',
    tags: ['Android', 'iOS', 'Cross-Platform'],
  },
  {
    id: 'data-science',
    title: 'Data Science & AI',
    description: 'Extract insights from data and build intelligent systems powered by machine learning.',
    icon: 'Brain',
    tags: ['ML', 'Analytics', 'Deep Learning'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect systems and data from threats — become a digital guardian of the modern world.',
    icon: 'Shield',
    tags: ['Security', 'Ethical Hacking', 'Network'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Manage infrastructure at scale and automate deployments for global applications.',
    icon: 'Cloud',
    tags: ['AWS', 'Docker', 'CI/CD'],
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    description: 'Design and build immersive game experiences across platforms and genres.',
    icon: 'Gamepad2',
    tags: ['Unity', 'Unreal', '2D/3D'],
  },
];

export const programmingLanguages: ProgrammingLanguage[] = [
  {
    id: 'python',
    name: 'Python',
    description: 'The most beginner-friendly language. Great for AI, data science, and automation.',
    icon: 'Code2',
    difficulty: 'Easy',
    popularity: 95,
    useCases: ['AI & Machine Learning', 'Data Science', 'Web Backend', 'Automation'],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'The language of the web. Essential for building interactive websites and web apps.',
    icon: 'Code2',
    difficulty: 'Easy',
    popularity: 98,
    useCases: ['Web Frontend', 'Web Backend', 'Mobile Apps', 'Desktop Apps'],
  },
  {
    id: 'java',
    name: 'Java',
    description: 'A powerful language used in enterprise applications, Android, and large-scale systems.',
    icon: 'Coffee',
    difficulty: 'Medium',
    popularity: 85,
    useCases: ['Android Development', 'Enterprise Software', 'Backend Systems'],
  },
  {
    id: 'cpp',
    name: 'C++',
    description: 'The foundation of computer science. Essential for competitive programming and systems.',
    icon: 'Cpu',
    difficulty: 'Hard',
    popularity: 80,
    useCases: ['Competitive Programming', 'Game Engines', 'Systems Programming', 'OS'],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    description: 'JavaScript with types. The modern standard for scalable web development.',
    icon: 'FileCode2',
    difficulty: 'Medium',
    popularity: 90,
    useCases: ['Large Web Apps', 'Enterprise Frontend', 'Full Stack'],
  },
  {
    id: 'go',
    name: 'Go',
    description: 'Fast, simple, and efficient. Growing fast in cloud and backend engineering.',
    icon: 'Zap',
    difficulty: 'Medium',
    popularity: 75,
    useCases: ['Cloud Services', 'Microservices', 'DevOps Tools'],
  },
];

export const roadmapSteps: RoadmapStep[] = [
  {
    id: 1,
    title: 'Programming Fundamentals',
    description: 'Start with one language and learn the basics — variables, loops, functions, and data types.',
    duration: '4-6 weeks',
    topics: ['Variables & Data Types', 'Loops & Conditionals', 'Functions', 'Arrays & Strings'],
    completed: true,
  },
  {
    id: 2,
    title: 'Problem Solving Basics',
    description: 'Learn how to break down problems and think logically through coding challenges.',
    duration: '6-8 weeks',
    topics: ['Patterns & Logic', 'Basic Algorithms', 'Time Complexity Basics', 'Practice Problems'],
    completed: true,
  },
  {
    id: 3,
    title: 'Web Development Basics',
    description: 'Understand how the web works and build your first simple web pages.',
    duration: '5-7 weeks',
    topics: ['HTML & CSS', 'JavaScript DOM', 'Responsive Design', 'Basic Projects'],
    completed: false,
  },
  {
    id: 4,
    title: 'Computer Science Foundations',
    description: 'Begin understanding the core concepts that power all of computer science.',
    duration: '8-10 weeks',
    topics: ['Data Structures Basics', 'OOP Concepts', 'DBMS Basics', 'Operating Systems Intro'],
    completed: false,
  },
  {
    id: 5,
    title: 'First Mini Projects',
    description: 'Apply everything you have learned by building small but complete projects.',
    duration: '4-6 weeks',
    topics: ['Calculator App', 'To-Do List', 'Portfolio Website', 'Simple API'],
    completed: false,
  },
  {
    id: 6,
    title: 'Explore Career Paths',
    description: 'Discover different roles in software engineering and identify what excites you most.',
    duration: 'Ongoing',
    topics: ['Role Research', 'Industry Trends', 'Community Involvement', 'Skill Matching'],
    completed: false,
  },
];

export const skillItems: SkillItem[] = [
  { id: 'python', name: 'Python Basics', category: 'Programming', progress: 85, level: 'Intermediate' },
  { id: 'c-basics', name: 'C Programming', category: 'Programming', progress: 70, level: 'Beginner' },
  { id: 'ds-basics', name: 'Data Structures', category: 'Computer Science', progress: 45, level: 'Beginner' },
  { id: 'html-css', name: 'HTML & CSS', category: 'Web Development', progress: 60, level: 'Beginner' },
  { id: 'js-basics', name: 'JavaScript Basics', category: 'Web Development', progress: 30, level: 'Beginner' },
  { id: 'git', name: 'Git & GitHub', category: 'Tools', progress: 50, level: 'Beginner' },
  { id: 'problem-solving', name: 'Problem Solving', category: 'Core Skills', progress: 65, level: 'Beginner' },
  { id: 'oop', name: 'OOP Concepts', category: 'Computer Science', progress: 40, level: 'Beginner' },
];

export const jobRoles: JobRole[] = [
  {
    id: 'frontend-dev',
    title: 'Frontend Developer',
    description: 'Build the visual parts of websites and apps that users interact with directly.',
    icon: 'Monitor',
    avgSalary: '₹6-15 LPA',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'UI/UX Basics'],
    growth: 'High demand',
  },
  {
    id: 'backend-dev',
    title: 'Backend Developer',
    description: 'Build the server-side logic, databases, and APIs that power applications.',
    icon: 'Server',
    avgSalary: '₹8-20 LPA',
    skills: ['Java/Python', 'Databases', 'APIs', 'Server Logic'],
    growth: 'Very high demand',
  },
  {
    id: 'fullstack-dev',
    title: 'Full Stack Developer',
    description: 'Handle both frontend and backend — the versatile all-rounder of the tech world.',
    icon: 'Layers',
    avgSalary: '₹8-25 LPA',
    skills: ['Frontend + Backend', 'Databases', 'DevOps Basics', 'System Design'],
    growth: 'Extremely high demand',
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Analyze data and build ML models to solve business problems with AI.',
    icon: 'Brain',
    avgSalary: '₹10-30 LPA',
    skills: ['Python', 'Statistics', 'Machine Learning', 'Data Visualization'],
    growth: 'Fastest growing field',
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'Automate deployments and manage cloud infrastructure for seamless delivery.',
    icon: 'Cloud',
    avgSalary: '₹8-22 LPA',
    skills: ['Linux', 'Docker', 'AWS/Cloud', 'CI/CD'],
    growth: 'High demand',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Developer',
    description: 'Build native or cross-platform mobile apps for Android and iOS.',
    icon: 'Smartphone',
    avgSalary: '₹6-18 LPA',
    skills: ['Java/Kotlin', 'React Native', 'Flutter', 'Mobile UI'],
    growth: 'High demand',
  },
];

export const dreamCompanies: DreamCompany[] = [
  {
    id: 'google',
    name: 'Google',
    description: 'The world leader in search, cloud, and AI. Known for innovation and great culture.',
    icon: 'Search',
    roles: ['SWE', 'SRE', 'ML Engineer'],
    difficulty: 'Dream',
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    description: 'Global tech giant in cloud, productivity, and gaming. Excellent for fresh graduates.',
    icon: 'Window',
    roles: ['SWE', 'Azure Engineer', 'Program Manager'],
    difficulty: 'Dream',
  },
  {
    id: 'amazon',
    name: 'Amazon',
    description: 'E-commerce and cloud powerhouse. hires heavily for AWS and core engineering.',
    icon: 'ShoppingCart',
    roles: ['SDE I', 'SDE II', 'Cloud Support'],
    difficulty: 'Challenging',
  },
  {
    id: 'flipkart',
    name: 'Flipkart',
    description: 'India\'s top e-commerce platform. Great place to start your engineering career.',
    icon: 'ShoppingBag',
    roles: ['SDE I', 'Frontend Dev', 'Backend Dev'],
    difficulty: 'Challenging',
  },
  {
    id: 'swiggy',
    name: 'Swiggy',
    description: 'Fast-growing food-tech company with a strong engineering culture.',
    icon: 'Utensils',
    roles: ['SDE I', 'Full Stack Dev', 'Data Analyst'],
    difficulty: 'Achievable',
  },
  {
    id: 'tcs',
    name: 'TCS',
    description: 'India\'s largest IT services company. Excellent for first-time job seekers.',
    icon: 'Building2',
    roles: ['Developer', 'System Engineer', 'Analyst'],
    difficulty: 'Achievable',
  },
];

export const projectIdeas: ProjectIdea[] = [
  {
    id: 'calculator',
    title: 'Simple Calculator',
    description: 'Build a calculator app that performs basic arithmetic operations. A perfect first project!',
    icon: 'Calculator',
    difficulty: 'Beginner',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    estimatedTime: '2-3 days',
  },
  {
    id: 'todo-app',
    title: 'To-Do List App',
    description: 'Create a task management app with add, edit, delete, and mark-complete features.',
    icon: 'CheckSquare',
    difficulty: 'Beginner',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    estimatedTime: '3-5 days',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    description: 'Build a website showcasing your skills, projects, and contact info. Your digital identity!',
    icon: 'User',
    difficulty: 'Beginner',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    estimatedTime: '5-7 days',
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'Fetch and display real-time weather data for any city using a public API.',
    icon: 'CloudSun',
    difficulty: 'Intermediate',
    technologies: ['JavaScript', 'Fetch API', 'CSS'],
    estimatedTime: '1-2 weeks',
  },
  {
    id: 'quiz-app',
    title: 'Interactive Quiz App',
    description: 'Build a quiz application with multiple questions, scoring, and a results screen.',
    icon: 'HelpCircle',
    difficulty: 'Beginner',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    estimatedTime: '4-6 days',
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    description: 'Track daily expenses with categories, totals, and visual summaries.',
    icon: 'Wallet',
    difficulty: 'Intermediate',
    technologies: ['JavaScript', 'LocalStorage', 'Chart.js'],
    estimatedTime: '1-2 weeks',
  },
];
