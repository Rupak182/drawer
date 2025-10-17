"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronRight, 
  ChevronLeft,
  Home,
  Package,
  Building,
  Users,
  BookOpen,
  HelpCircle,
  Search,
  Leaf,
  TrendingUp,
  Mail,
  Code,
  Cloud,
  Zap,
  Shield,
  BarChart3,
  Settings,
  Headphones
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

// VisuallyHidden component for accessibility
const VisuallyHidden: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="sr-only">{children}</span>
)

// Icon mapping
const iconMap = {
  Home,
  Package,
  Building,
  Users,
  BookOpen,
  HelpCircle,
  Search,
  Leaf,
  TrendingUp,
  Mail,
  Code,
  Cloud,
  Zap,
  Shield,
  BarChart3,
  Settings,
  Headphones
} as const

export type IconName = keyof typeof iconMap

// Types
export interface MenuItem {
  id: string
  icon: IconName
  title: string
  description: string
  hasSubmenu?: boolean
  submenuKey?: string
}

export interface MenuLevel {
  id: string
  title: string
  items: MenuItem[]
  parentId?: string
}

export interface DrawerMenuProps {
  triggerLabel?: string
  triggerVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  menuLevels: MenuLevel[]
  className?: string
  maxWidth?: string
}

// Animation variants
const menuVariants = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 }
}

// Reusable MenuItem Component
interface MenuItemComponentProps {
  item: MenuItem
  onNavigate?: (item: MenuItem) => void
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({ item, onNavigate }) => {
  const IconComponent = iconMap[item.icon]
  
  return (
    <div
      className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors rounded-lg"
      onClick={() => onNavigate?.(item)}
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
}

// Menu Level Component
interface MenuLevelComponentProps {
  level: MenuLevel
  onNavigate?: (item: MenuItem) => void
  onBack?: () => void
  showBackButton?: boolean
}

const MenuLevelComponent: React.FC<MenuLevelComponentProps> = ({ 
  level, 
  onNavigate,
  onBack, 
  showBackButton 
}) => {
  return (
    <motion.div
      key={level.id}
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.15, ease: "easeInOut" }}
    >
      <DrawerHeader className="pb-4">
        <div className="flex items-center gap-3">
          {showBackButton && onBack && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={onBack}
            >
              <ChevronLeft className="h-4 w-4" />
              
            </Button>
          )}
          {showBackButton ? (
            <DrawerTitle className="text-base font-medium">{level.title}</DrawerTitle>
          ) : (
            <VisuallyHidden>
              <DrawerTitle>{level.title}</DrawerTitle>
            </VisuallyHidden>
          )}
        </div>
      </DrawerHeader>
      <div className="px-4 pb-12 max-h-[70vh] overflow-y-auto">
        <div className="space-y-1">
          {level.items.map((item) => (
            <MenuItemComponent
              key={item.id}
              item={item}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function DrawerMenu({ 
  triggerLabel = "Menu",
  triggerVariant = "outline",
  menuLevels,
  className = "bg-blue-500 text-white",
  maxWidth = "max-w-sm"
}: DrawerMenuProps) {
  const [currentLevelId, setCurrentLevelId] = React.useState<string>(menuLevels[0]?.id || '')
  const [navigationStack, setNavigationStack] = React.useState<string[]>([menuLevels[0]?.id || ''])

  const currentLevel = menuLevels.find(level => level.id === currentLevelId)

  const handleItemClick = (item: MenuItem) => {
    if (item.hasSubmenu && item.submenuKey) {
      const targetLevel = menuLevels.find(level => level.id === item.submenuKey)
      if (targetLevel) {
        setCurrentLevelId(item.submenuKey)
        setNavigationStack(prev => [...prev, item.submenuKey!])
      }
    }
  }

  const handleBack = () => {
    if (navigationStack.length > 1) {
      const newStack = navigationStack.slice(0, -1)
      setNavigationStack(newStack)
      setCurrentLevelId(newStack[newStack.length - 1])
    }
  }

  if (!currentLevel) {
    return null
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={triggerVariant} className={className}>
          {triggerLabel}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="lg:mx-10 mx-5">
        <motion.div 
          className={`mx-auto w-full ${maxWidth}`}
          layout
          transition={{ duration: 0.15, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            <MenuLevelComponent
              level={currentLevel}
              onNavigate={handleItemClick}
              onBack={handleBack}
              showBackButton={navigationStack.length > 1}
            />
          </AnimatePresence>
        </motion.div>
      </DrawerContent>
    </Drawer>
  )
}
