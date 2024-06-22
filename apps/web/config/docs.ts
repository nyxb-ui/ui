import type { MainNavItem, SidebarNavItem } from '~/types'

interface DocsConfig {
   mainNav: MainNavItem[]
   sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
   mainNav: [
      {
         title: 'Docs',
         href: '/docs/installation',
      },
      {
         title: 'Components',
         href: '/components',
      },
      {
         title: 'Themes',
         href: '/themes',
      },
      {
         title: 'Examples',
         href: '/examples',
      },
      {
         title: 'Blocks',
         href: '/blocks',
      },
   ],
   sidebarNav: [
      {
         title: 'Getting Started',
         items: [
            {
               title: 'Introduction',
               href: '/docs',
               items: [],
            },
            {
               title: 'Installation',
               href: '/docs/installation',
               items: [
                  {
                     title: 'Next.js',
                     href: `/docs/installation/next`,
                     items: [],
                  },
                  {
                     title: 'Vue.js',
                     href: `/docs/installation/vue`,
                     items: [],
                  },
                  {
                     title: 'Svelte',
                     href: `/docs/installation/svelte`,
                     items: [],
                  },
               ],
            },
         ],
      },
      {
         title: 'Components',
         items: [
            {
               title: 'Accordion',
               href: '/docs/components/accordion',
               items: [],
            },
            {
               title: 'Alert',
               href: '/docs/components/alert',
               items: [],
            },
            {
               title: 'Alert Dialog',
               href: '/docs/components/alert-dialog',
               items: [],
            },
            {
               title: 'Animated List',
               href: '/docs/components/animated-list',
               items: [],
            },
            {
               title: 'Aspect Ratio',
               href: '/docs/components/aspect-ratio',
               items: [],
            },
            {
               title: 'Avatar',
               href: '/docs/components/avatar',
               items: [],
            },
            {
               title: 'Avatar Circles',
               href: '/docs/components/avatar-circles',
               items: [],
               label: '',
            },
            {
               title: 'Badge',
               href: '/docs/components/badge',
               items: [],
            },
            {
               title: 'Bento Grid',
               href: '/docs/components/bento-grid',
               items: [],
            },
            {
               title: 'Breadcrumb',
               href: '/docs/components/breadcrumb',
               items: [],
            },
            {
               title: 'Calendar',
               href: '/docs/components/calendar',
               items: [],
            },
            {
               title: 'Card',
               href: '/docs/components/card',
               items: [],
            },
            {
               title: 'Carousel',
               href: '/docs/components/carousel',
               items: [],
            },
            {
               title: 'Checkbox',
               href: '/docs/components/checkbox',
               items: [],
            },
            {
               title: 'Collapsible',
               href: '/docs/components/collapsible',
               items: [],
            },
            {
               title: 'Combobox',
               href: '/docs/components/combobox',
               items: [],
            },
            {
               title: 'Command',
               href: '/docs/components/command',
               items: [],
            },
            {
               title: 'Context Menu',
               href: '/docs/components/context-menu',
               items: [],
            },
            {
               title: 'Data Table',
               href: '/docs/components/data-table',
               items: [],
            },
            {
               title: 'Date Picker',
               href: '/docs/components/date-picker',
               items: [],
            },
            {
               title: 'Dialog',
               href: '/docs/components/dialog',
               items: [],
            },
            {
               title: 'Dock',
               href: '/docs/components/dock',
               items: [],
               label: '',
            },
            {
               title: 'Drawer',
               href: '/docs/components/drawer',
               items: [],
            },
            {
               title: 'Dropdown Menu',
               href: '/docs/components/dropdown-menu',
               items: [],
            },
            {
               title: 'Form',
               href: '/docs/components/form',
               items: [],
            },
            {
               title: 'Gauge Circle',
               href: '/docs/components/gauge-circle',
               items: [],
               label: '',
            },
            {
               title: 'Globe',
               href: '/docs/components/globe',
               items: [],
            },
            {
               title: 'Hover Card',
               href: '/docs/components/hover-card',
               items: [],
            },
            {
               title: 'Input',
               href: '/docs/components/input',
               items: [],
            },
            {
               title: 'Input OTP',
               href: '/docs/components/input-otp',
               items: [],
            },
            {
               title: 'Input Phone',
               href: '/docs/components/input-phone',
               items: [],
               label: 'New',
            },
            {
               title: 'Interactive Icon Cloud',
               href: '/docs/components/icon-cloud',
               items: [],
               label: '',
            },
            {
               title: 'Label',
               href: '/docs/components/label',
               items: [],
            },
            {
               title: 'Marquee',
               href: '/docs/components/marquee',
               items: [],
            },
            {
               title: 'Menubar',
               href: '/docs/components/menubar',
               items: [],
            },
            {
               title: 'Navigation Menu',
               href: '/docs/components/navigation-menu',
               items: [],
            },
            {
               title: 'Orbiting Circles',
               href: '/docs/components/orbiting-circles',
               items: [],
               label: '',
            },
            {
               title: 'Pagination',
               href: '/docs/components/pagination',
               items: [],
            },
            {
               title: 'Popover',
               href: '/docs/components/popover',
               items: [],
            },
            {
               title: 'Progress',
               href: '/docs/components/progress',
               items: [],
            },
            {
               title: 'Radio Group',
               href: '/docs/components/radio-group',
               items: [],
            },
            {
               title: 'Resizable',
               href: '/docs/components/resizable',
               items: [],
            },
            {
               title: 'Scroll Area',
               href: '/docs/components/scroll-area',
               items: [],
            },
            {
               title: 'Select',
               href: '/docs/components/select',
               items: [],
            },
            {
               title: 'Separator',
               href: '/docs/components/separator',
               items: [],
            },
            {
               title: 'Sheet',
               href: '/docs/components/sheet',
               items: [],
            },
            {
               title: 'Skeleton',
               href: '/docs/components/skeleton',
               items: [],
            },
            {
               title: 'Slider',
               href: '/docs/components/slider',
               items: [],
               label: 'New',
            },
            {
               title: 'Sonner',
               href: '/docs/components/sonner',
               items: [],
            },
            {
               title: 'Star Rating',
               href: '/docs/components/star-rating',
               items: [],
               label: 'New',
            },
            {
               title: 'Stepper',
               href: '/docs/components/stepper',
               items: [],
               label: 'New',
            },
            {
               title: 'Switch',
               href: '/docs/components/switch',
               items: [],
            },
            {
               title: 'Table',
               href: '/docs/components/table',
               items: [],
            },
            {
               title: 'Tabs',
               href: '/docs/components/tabs',
               items: [],
            },
            {
               title: 'Textarea',
               href: '/docs/components/textarea',
               items: [],
            },
            {
               title: 'Toast',
               href: '/docs/components/toast',
               items: [],
            },
            {
               title: 'Timeline',
               href: '/docs/components/timeline',
               items: [],
               label: 'New',
            },
            {
               title: 'Toggle',
               href: '/docs/components/toggle',
               items: [],
            },
            {
               title: 'Toggle Group',
               href: '/docs/components/toggle-group',
               items: [],
            },
            {
               title: 'Tooltip',
               href: '/docs/components/tooltip',
               items: [],
            },
            {
               title: 'Tour',
               href: '/docs/components/tour',
               items: [],
               label: 'New',
            },
            {
               title: 'Tweet Card',
               href: '/docs/components/tweet-card',
               items: [],
            },
         ],
      },
      {
         title: 'Special Effects',
         items: [
            {
               title: 'Animated Beam',
               href: `/docs/components/animated-beam`,
               items: [],
            },
            // {
            //    title: 'Animated Lines',
            //    href: `/docs/components/animated-lines`,
            //    items: [],
            // },
            {
               title: 'Border Beam',
               href: `/docs/components/border-beam`,
               items: [],
            },
            {
               title: 'Shine Border',
               href: `/docs/components/shine-border`,
               items: [],
               label: '',
            },
            {
               title: 'Magic Card',
               href: `/docs/components/magic-card`,
               items: [],
            },
            {
               title: 'Meteors',
               href: `/docs/components/meteors`,
               items: [],
            },
            {
               title: 'Neon Gradient Card',
               href: `/docs/components/neon-gradient-card`,
               items: [],
               label: '',
            },
            {
               title: 'Confetti',
               href: `/docs/components/confetti`,
               items: [],
            },
            {
               title: 'Particles',
               href: `/docs/components/particles`,
               items: [],
            },
         ],
      },
      {
         title: 'Text Animations',
         items: [
            {
               title: 'Number Ticker',
               href: `/docs/components/number-ticker`,
               items: [],
            },
            {
               title: 'Animated Shiny Text',
               href: `/docs/components/animated-shiny-text`,
               items: [],
            },
            {
               title: 'Animated Gradient Text',
               href: `/docs/components/animated-gradient-text`,
               items: [],
               label: '',
            },
            {
               title: 'Text Reveal',
               href: `/docs/components/text-reveal`,
               items: [],
               label: '',
            },
            {
               title: 'Word Rotate',
               href: `/docs/components/word-rotate`,
               items: [],
               label: '',
            },
            {
               title: 'Typing Animation',
               href: `/docs/components/typing-animation`,
               items: [],
               label: '',
            },
            {
               title: 'Wavy Text',
               href: `/docs/components/wavy-text`,
               items: [],
               label: '',
            },
            {
               title: 'Blur In',
               href: `/docs/components/blur-in`,
               items: [],
               label: '',
            },
            {
               title: 'Separate Away',
               href: `/docs/components/separate-away`,
               items: [],
               label: '',
            },
            {
               title: 'Scroll Based Velocity',
               href: `/docs/components/scroll-based-velocity`,
               items: [],
               label: '',
            },
            {
               title: 'Letter Pullup',
               href: `/docs/components/letter-pullup`,
               items: [],
               label: '',
            },
            {
               title: 'Word Pull Up',
               href: `/docs/components/word-pull-up`,
               items: [],
               label: '',
            },
            {
               title: 'Flip Text',
               href: `/docs/components/flip-text`,
               items: [],
               label: '',
            },
            {
               title: 'Gradual Spacing',
               href: `/docs/components/gradual-spacing`,
               items: [],
               label: '',
            },
            {
               title: 'Word Fade In',
               href: `/docs/components/word-fade-in`,
               items: [],
               label: '',
            },
            {
               title: 'Fade Text',
               href: `/docs/components/fade-text`,
               items: [],
               label: '',
            },
            {
               title: 'Box Reveal',
               href: `/docs/components/box-reveal`,
               items: [],
               label: '',
            },
            {
               title: 'Sparkles Text',
               href: `/docs/components/sparkles-text`,
               items: [],
            },
            {
               title: 'Cool Mode',
               href: `/docs/components/cool-mode`,
               items: [],
            },
         ],
      },
      {
         title: 'Buttons',
         items: [
            {
               title: 'Standard Button',
               href: '/docs/components/button',
               items: [],
            },
            {
               title: 'Shimmer Button',
               href: `/docs/components/shimmer-button`,
               items: [],
            },
            {
               title: 'Shiny Button',
               href: `/docs/components/shiny-button`,
               items: [],
               label: '',
            },
            {
               title: 'Animated Subscribe Button',
               href: `/docs/components/animated-subscribe-button`,
               items: [],
            },
            {
               title: 'Pulsating Button',
               href: `/docs/components/pulsating-button`,
               items: [],
               label: 'New',
            },
         ],
      },
      {
         title: 'Backgrounds',
         items: [
            {
               title: 'Animated Grid Pattern',
               href: `/docs/components/animated-grid-pattern`,
               items: [],
               label: '',
            },
            {
               title: 'Retro Grid',
               href: `/docs/components/retro-grid`,
               items: [],
            },
            {
               title: 'Ripple',
               href: `/docs/components/ripple`,
               items: [],
            },
            {
               title: 'Dot Pattern',
               href: `/docs/components/dot-pattern`,
               items: [],
            },
            {
               title: 'Grid Pattern',
               href: `/docs/components/grid-pattern`,
               items: [],
            },
            {
               title: 'Linear Gradient',
               href: `/docs/components/linear-gradient`,
               items: [],
            },
            {
               title: 'Radial Gradient',
               href: `/docs/components/radial-gradient`,
               items: [],
            },
            {
               title: 'Wavy Dot Pattern',
               href: `/docs/components/wavy-dot-pattern`,
               items: [],
            },
         ],
      },
   ],
}
