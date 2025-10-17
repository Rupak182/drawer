# DrawerMenu Component

A customizable, multi-level animated drawer navigation component built with React, TypeScript, Framer Motion, and shadcn/ui.

## Features

- 🎨 **Multi-level Navigation** - Seamlessly navigate through multiple menu levels
- ⚡ **Smooth Animations** - Powered by Framer Motion with customizable transitions
- 📱 **Mobile-First Design** - Responsive and touch-friendly interface
- ♿ **Accessibility Ready** - Built with proper ARIA support and screen reader compatibility
- 🎯 **TypeScript Support** - Fully typed with comprehensive interfaces
- 🔧 **Highly Customizable** - Easy to configure and extend

## Installation

Make sure you have the required dependencies:

```bash
npm install motion lucide-react
```

This component uses shadcn/ui components. Ensure you have the following installed:

```bash
npx shadcn-ui@latest add drawer button
```

## Basic Usage

```tsx
import { DrawerMenu } from "@/components/menu";

// Simple menu configuration
const menuConfig = [
  {
    id: "main",
    title: "Main Menu",
    items: [
      {
        id: "home",
        icon: "Home",
        title: "Home",
        description: "Welcome to our platform",
        hasSubmenu: false
      },
      {
        id: "services",
        icon: "Package",
        title: "Services",
        description: "Our service offerings",
        hasSubmenu: true,
        submenuKey: "services-level"
      }
    ]
  },
  {
    id: "services-level",
    title: "Our Services",
    items: [
      {
        id: "web-dev",
        icon: "Code",
        title: "Web Development",
        description: "Custom web solutions",
        hasSubmenu: false
      }
    ]
  }
];

function App() {
  return (
    <DrawerMenu
      triggerLabel="Menu"
      menuLevels={menuConfig}
    />
  );
}
```

## API Reference

### DrawerMenuProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `triggerLabel` | `string` | `"Menu"` | Text displayed on the trigger button |
| `triggerVariant` | `ButtonVariant` | `"outline"` | Button style variant |
| `menuLevels` | `MenuLevel[]` | **Required** | Array of menu level configurations |
| `className` | `string` | `""` | Additional CSS classes for the trigger button |
| `maxWidth` | `string` | `"max-w-sm"` | Maximum width of the drawer content |

### MenuLevel Interface

```tsx
interface MenuLevel {
  id: string           // Unique identifier for the level
  title: string        // Display title for the level
  items: MenuItem[]    // Array of menu items
  parentId?: string    // Optional parent level reference
}
```

### MenuItem Interface

```tsx
interface MenuItem {
  id: string           // Unique identifier for the item
  icon: IconName       // Lucide React icon name
  title: string        // Display title
  description: string  // Subtitle/description text
  hasSubmenu?: boolean // Whether item has a submenu
  submenuKey?: string  // ID of the submenu level to navigate to
}
```

### Available Icons

The component supports these Lucide React icons:

`Home`, `Package`, `Building`, `Users`, `BookOpen`, `HelpCircle`, `Search`, `Leaf`, `TrendingUp`, `Mail`, `Code`, `Cloud`, `Zap`, `Shield`, `BarChart3`, `Settings`, `Headphones`

## Advanced Usage

### Complex Multi-Level Menu

```tsx
const advancedMenuConfig = [
  {
    id: "main",
    title: "Main Menu",
    items: [
      {
        id: "products",
        icon: "Package",
        title: "Products & Services",
        description: "Explore our offerings",
        hasSubmenu: true,
        submenuKey: "products-level"
      }
    ]
  },
  {
    id: "products-level",
    title: "Products & Services",
    items: [
      {
        id: "software",
        icon: "Code",
        title: "Software Solutions",
        description: "Custom development",
        hasSubmenu: true,
        submenuKey: "software-level"
      },
      {
        id: "consulting",
        icon: "Users",
        title: "Consulting",
        description: "Expert guidance",
        hasSubmenu: false
      }
    ]
  },
  {
    id: "software-level",
    title: "Software Solutions",
    items: [
      {
        id: "web-apps",
        icon: "Cloud",
        title: "Web Applications",
        description: "Modern web solutions",
        hasSubmenu: false
      },
      {
        id: "mobile-apps",
        icon: "Zap",
        title: "Mobile Apps",
        description: "iOS and Android development",
        hasSubmenu: false
      }
    ]
  }
];

<DrawerMenu
  triggerLabel="Explore Services"
  triggerVariant="default"
  menuLevels={advancedMenuConfig}
  maxWidth="max-w-md"
  className="bg-primary text-primary-foreground"
/>
```

### Button Variants

```tsx
// Different button styles
<DrawerMenu triggerVariant="default" />     // Solid button
<DrawerMenu triggerVariant="outline" />     // Outlined button  
<DrawerMenu triggerVariant="ghost" />       // Transparent button
<DrawerMenu triggerVariant="secondary" />   // Secondary styling
<DrawerMenu triggerVariant="destructive" /> // Red/warning styling
<DrawerMenu triggerVariant="link" />        // Link styling
```

### Width Customization

```tsx
// Different drawer widths
<DrawerMenu maxWidth="max-w-xs" />   // Extra small
<DrawerMenu maxWidth="max-w-sm" />   // Small (default)
<DrawerMenu maxWidth="max-w-md" />   // Medium
<DrawerMenu maxWidth="max-w-lg" />   // Large
<DrawerMenu maxWidth="max-w-xl" />   // Extra large
```

## Customization

### Styling

The component uses Tailwind CSS classes and can be customized through:

1. **Button styling** via `className` prop
2. **Drawer width** via `maxWidth` prop  
3. **Global styles** by modifying the component's CSS classes

### Adding New Icons

To add more icons, update the `iconMap` in the component:

```tsx
// In menu.tsx
import { NewIcon } from "lucide-react"

const iconMap = {
  // ... existing icons
  NewIcon,
  // ... more icons
} as const
```

### Animation Customization

Modify the `menuVariants` object to change animations:

```tsx
const menuVariants = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 }
}
```

## Best Practices

1. **Keep menu levels shallow** - Avoid more than 3-4 levels deep
2. **Use descriptive titles** - Help users understand navigation context
3. **Consistent icon usage** - Use icons that match your app's design language
4. **Test on mobile** - Ensure touch targets are accessible
5. **Meaningful descriptions** - Provide clear, concise item descriptions

## Example Projects

### E-commerce Navigation

```tsx
const ecommerceMenu = [
  {
    id: "main",
    title: "Shop",
    items: [
      {
        id: "categories",
        icon: "Package",
        title: "Categories",
        description: "Browse all product categories",
        hasSubmenu: true,
        submenuKey: "categories-level"
      },
      {
        id: "account",
        icon: "Users",
        title: "My Account",
        description: "Profile and order history",
        hasSubmenu: false
      }
    ]
  }
  // ... more levels
];
```

### Corporate Website

```tsx
const corporateMenu = [
  {
    id: "main",
    title: "Navigation",
    items: [
      {
        id: "about",
        icon: "Building",
        title: "About Us",
        description: "Company history and values",
        hasSubmenu: false
      },
      {
        id: "services",
        icon: "Settings",
        title: "Services",
        description: "What we offer",
        hasSubmenu: true,
        submenuKey: "services-level"
      }
    ]
  }
  // ... more levels
];
```

## Component Architecture

### File Structure
```
src/
├── components/
│   ├── menu.tsx          # Main DrawerMenu component
│   └── ui/
│       ├── drawer.tsx    # shadcn/ui drawer components
│       └── button.tsx    # shadcn/ui button component
└── app/
    └── page.tsx          # Usage example
```

### Key Features

- **Self-contained navigation** - Handles all internal state management
- **Automatic back button** - Shows/hides based on navigation depth  
- **Icon string mapping** - Solves server/client component serialization
- **Accessibility compliance** - Proper ARIA labels and screen reader support
- **Mobile responsive** - Touch-friendly with proper sizing

## Contributing

When contributing to this component:

1. Maintain TypeScript strict typing
2. Follow existing animation patterns
3. Test accessibility features
4. Update documentation for new features
5. Ensure mobile responsiveness

## License

This component is part of the justpay project.
