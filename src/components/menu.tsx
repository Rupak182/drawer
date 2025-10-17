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
  Headphones 
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

const menuItems = [
  {
    icon: Code,
    title: "Software Solutions",
    description: "Custom software development and deployment"
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and infrastructure"
  },
  {
    icon: Users,
    title: "Consulting Services",
    description: "Expert guidance and strategic support"
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Comprehensive digital transformation strategies"
  },
  {
    icon: Shield,
    title: "Cybersecurity Consulting",
    description: "Comprehensive cybersecurity services and solutions"
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Consulting",
    description: "Data strategy, analytics, and business intelligence"
  },
  {
    icon: Settings,
    title: "DevOps & Platform Engineering",
    description: "DevOps transformation and platform engineering"
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    description: "Ongoing maintenance and support services"
  }
]

export function DrawerMenu() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Services Menu</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="pb-4">
            <div className="flex items-center gap-3">
              <DrawerClose asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </DrawerClose>
              <DrawerTitle className="text-base font-medium">Back</DrawerTitle>
            </div>
          </DrawerHeader>
          <div className="px-4 pb-6">
            <div className="space-y-1">
              {menuItems.map((item, index) => {
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
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
