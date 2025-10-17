import { DrawerMenu } from "@/components/menu";
import Image from "next/image";

// Sample menu configuration
const sampleMenuConfig = [
  {
    id: "main",
    title: "Main Menu",
    items: [
      {
        id: "home",
        icon: "Home" as const,
        title: "Home",
        description: "Welcome to our comprehensive platform",
        hasSubmenu: false
      },
      {
        id: "services",
        icon: "Package" as const,
        title: "Products & Services",
        description: "Explore our comprehensive offerings",
        hasSubmenu: true,
        submenuKey: "services-level"
      },
      {
        id: "industry",
        icon: "Building" as const,
        title: "Industry Solutions",
        description: "Specialized solutions for different industries",
        hasSubmenu: false
      },
      {
        id: "company",
        icon: "Users" as const,
        title: "Company",
        description: "Learn about our organization and culture",
        hasSubmenu: false
      },
      {
        id: "resources",
        icon: "BookOpen" as const,
        title: "Resources",
        description: "Knowledge base, tools, and learning materials",
        hasSubmenu: false
      },
      {
        id: "support",
        icon: "HelpCircle" as const,
        title: "Support",
        description: "Get help and support when you need it",
        hasSubmenu: false
      },
      {
        id: "research",
        icon: "Search" as const,
        title: "Research & Innovation",
        description: "Cutting-edge research and innovation initiatives",
        hasSubmenu: false
      },
      {
        id: "sustainability",
        icon: "Leaf" as const,
        title: "Sustainability",
        description: "Environmental responsibility and sustainable technology",
        hasSubmenu: false
      },
      {
        id: "investor",
        icon: "TrendingUp" as const,
        title: "Investor Relations",
        description: "Financial information and investor resources",
        hasSubmenu: false
      },
      {
        id: "contact",
        icon: "Mail" as const,
        title: "Contact",
        description: "Get in touch with our team",
        hasSubmenu: false
      }
    ]
  },
  {
    id: "services-level",
    title: "Products & Services",
    items: [
      {
        id: "software",
        icon: "Code" as const,
        title: "Software Solutions",
        description: "Custom software development and deployment",
        hasSubmenu: true,
        submenuKey: "software-level"
      },
      {
        id: "cloud",
        icon: "Cloud" as const,
        title: "Cloud & Infrastructure",
        description: "Scalable cloud solutions and infrastructure",
        hasSubmenu: false
      },
      {
        id: "consulting",
        icon: "Users" as const,
        title: "Consulting Services",
        description: "Expert guidance and strategic support",
        hasSubmenu: false
      },
      {
        id: "digital",
        icon: "Zap" as const,
        title: "Digital Transformation",
        description: "Comprehensive digital transformation strategies",
        hasSubmenu: false
      },
      {
        id: "cybersecurity",
        icon: "Shield" as const,
        title: "Cybersecurity Consulting",
        description: "Comprehensive cybersecurity services and solutions",
        hasSubmenu: false
      },
      {
        id: "analytics",
        icon: "BarChart3" as const,
        title: "Data & Analytics Consulting",
        description: "Data strategy, analytics, and business intelligence",
        hasSubmenu: false
      },
      {
        id: "devops",
        icon: "Settings" as const,
        title: "DevOps & Platform Engineering",
        description: "DevOps transformation and platform engineering",
        hasSubmenu: false
      },
      {
        id: "maintenance",
        icon: "Headphones" as const,
        title: "Support & Maintenance",
        description: "Ongoing maintenance and support services",
        hasSubmenu: false
      }
    ]
  },
  {
    id: "software-level",
    title: "Software Solutions",
    items: [
      {
        id: "architecture",
        icon: "BarChart3" as const,
        title: "System Architecture",
        description: "Scalable system design and planning",
        hasSubmenu: false
      },
      {
        id: "performance",
        icon: "Zap" as const,
        title: "Performance Optimization",
        description: "Application and system optimization",
        hasSubmenu: false
      },
      {
        id: "audits",
        icon: "Shield" as const,
        title: "Security Audits",
        description: "Comprehensive security assessments",
        hasSubmenu: false
      }
    ]
  }
];

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <DrawerMenu
        triggerLabel="Open Menu"
        triggerVariant="outline"
        menuLevels={sampleMenuConfig}
        maxWidth="max-w-sm"
      />
    </div>
  );
}
