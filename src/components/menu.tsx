"use client"

import * as React from "react"
import { 
  ChevronRight, 
  ArrowLeft,
  Code, 
  Cloud, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  Settings, 
  Headphones, 
  ChevronLeft,
  Home,
  Package,
  Building,
  BookOpen,
  HelpCircle,
  Search,
  Leaf,
  TrendingUp,
  Mail
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const servicesMenuItems = [
  {
    icon: Code,
    title: "Software Solutions",
    description: "Custom software development and deployment",
    hasSubmenu: true,
    submenuKey: "software"
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and infrastructure",
    hasSubmenu: false
  },
  {
    icon: Users,
    title: "Consulting Services",
    description: "Expert guidance and strategic support",
    hasSubmenu: false
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Comprehensive digital transformation strategies",
    hasSubmenu: false
  },
  {
    icon: Shield,
    title: "Cybersecurity Consulting",
    description: "Comprehensive cybersecurity services and solutions",
    hasSubmenu: false
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Consulting",
    description: "Data strategy, analytics, and business intelligence",
    hasSubmenu: false
  },
  {
    icon: Settings,
    title: "DevOps & Platform Engineering",
    description: "DevOps transformation and platform engineering",
    hasSubmenu: false
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    description: "Ongoing maintenance and support services",
    hasSubmenu: false
  }
]

const softwareSubmenuItems = [
  {
    icon: BarChart3,
    title: "System Architecture",
    description: "Scalable system design and planning",
    hasSubmenu: false
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Application and system optimization",
    hasSubmenu: false   
  },
  {
    icon: Shield,
    title: "Security Audits",
    description: "Comprehensive security assessments",
    hasSubmenu: false
  }
]

const mainMenuItems = [
  {
    icon: Home,
    title: "Home",
    description: "Welcome to our comprehensive platform",
    hasSubmenu: false
  },
  {
    icon: Package,
    title: "Products & Services",
    description: "Explore our comprehensive offerings",
    hasSubmenu: true,
    submenuKey: "services"
  },
  {
    icon: Building,
    title: "Industry Solutions",
    description: "Specialized solutions for different industries",
    hasSubmenu: false
  },
  {
    icon: Users,
    title: "Company",
    description: "Learn about our organization and culture",
    hasSubmenu: false
  },
  {
    icon: BookOpen,
    title: "Resources",
    description: "Knowledge base, tools, and learning materials",
    hasSubmenu: false
  },
  {
    icon: HelpCircle,
    title: "Support",
    description: "Get help and support when you need it",
    hasSubmenu: false
  },
  {
    icon: Search,
    title: "Research & Innovation",
    description: "Cutting-edge research and innovation initiatives",
    hasSubmenu: false
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Environmental responsibility and sustainable technology",
    hasSubmenu: false
  },
  {
    icon: TrendingUp,
    title: "Investor Relations",
    description: "Financial information and investor resources",
    hasSubmenu: false
  },
  {
    icon: Mail,
    title: "Contact",
    description: "Get in touch with our team",
    hasSubmenu: false
  }
]

export function DrawerMenu() {
  const [currentMenu, setCurrentMenu] = React.useState<'main' | 'services' | 'software'>('main')

  const handleMenuClick = (menuKey: string) => {
    if (menuKey === 'services') {
      setCurrentMenu('services')
    } else if (menuKey === 'software') {
      setCurrentMenu('software')
    }
  }

  const handleBackToMain = () => {
    setCurrentMenu('main')
  }

  const handleBackToServices = () => {
    setCurrentMenu('services')
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Main Menu</Button>
      </DrawerTrigger>
      <DrawerContent className="lg:mx-10 mx-5">
        <div className="mx-auto w-full max-w-sm">
          
          {currentMenu === 'main' ? (
            <>
              <DrawerHeader className="pb-4">
                <DrawerTitle className="text-base font-medium">Menu</DrawerTitle>
              </DrawerHeader>
              <div className="px-4 pb-12 max-h-[70vh] overflow-y-auto">
                <div className="space-y-1">
                  {mainMenuItems.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors rounded-lg"
                        onClick={() => item.hasSubmenu && item.submenuKey && handleMenuClick(item.submenuKey)}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <IconComponent className="h-5 w-5 text-gray-600" />
                          <div className="flex-1">
                            <h3 className="font-medium text-sm text-gray-900">{item.title}</h3>
                            <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                          </div>
                        </div>
                        {item.hasSubmenu && <ChevronRight className="h-4 w-4 text-gray-400" />}
                      </div>
                    )
                  })}
                </div>
              </div>
            </>
          ) : currentMenu === 'services' ? (
            <>
              <DrawerHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={handleBackToMain}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <DrawerTitle className="text-base font-medium">Products & Services</DrawerTitle>
                </div>
              </DrawerHeader>
              <div className="px-4 pb-12 max-h-[70vh] overflow-y-auto">
                <div className="space-y-1">
                  {servicesMenuItems.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors rounded-lg"
                        onClick={() => item.hasSubmenu && item.submenuKey && handleMenuClick(item.submenuKey)}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <IconComponent className="h-5 w-5 text-gray-600" />
                          <div className="flex-1">
                            <h3 className="font-medium text-sm text-gray-900">{item.title}</h3>
                            <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                          </div>
                        </div>
                        {item.hasSubmenu && <ChevronRight className="h-4 w-4 text-gray-400" />}
                      </div>
                    )
                  })}
                </div>
              </div>
            </>
          ) : (
            <>
              <DrawerHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={handleBackToServices}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <DrawerTitle className="text-base font-medium">Software Solutions</DrawerTitle>
                </div>
              </DrawerHeader>
              <div className="px-4 pb-12 max-h-[70vh] overflow-y-auto">
                <div className="space-y-1">
                  {softwareSubmenuItems.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors rounded-lg"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <IconComponent className="h-5 w-5 text-gray-600" />
                          <div className="flex-1">
                            <h3 className="font-medium text-sm text-gray-900">{item.title}</h3>
                            <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </>
          )}
          
        </div>
      </DrawerContent>
    </Drawer>
  )
}
