import type { MainNavItem, SidebarNavItem } from '~/types/nav'

export interface DocsConfig {
   mainNav: MainNavItem[]
   sidebarNav: SidebarNavItem[]
   chartsNav: SidebarNavItem[]
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
         title: 'Blocks',
         href: '/blocks',
      },
      {
         title: 'Charts',
         href: '/charts',
      },
      {
         title: 'Examples',
         href: '/examples',
      },
      // {
      //    title: 'Templates',
      //    href: '/templates',
      // },
      {
         title: 'More',
         items: [
            // {
            //    title: 'Examples',
            //    href: '/examples',
            // },
            {
               title: 'Showcase',
               href: '/showcase',
            },
            {
               title: 'Colors',
               href: '/colors',
            },
         ],
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
               items: [],
            },
            {
               title: 'Story',
               href: '/docs/story',
               items: [],
            },
            {
               title: 'nyxbui.json',
               href: '/docs/nyxbui-json',
               items: [],
            },
            {
               title: 'Theming',
               href: '/docs/theming',
               items: [],
            },
            {
               title: 'Dark mode',
               href: '/docs/dark-mode',
               items: [],
            },
            {
               title: 'CLI',
               href: '/docs/cli',
               items: [],
            },
            {
               title: 'Typography',
               href: '/docs/components/typography',
               items: [],
            },
            {
               title: 'Changelog',
               href: '/docs/changelog',
               items: [],
            },
         ],
      },
      // {
      //    title: 'Templates',
      //    items: [
      //       {
      //          title: 'Portfolio',
      //          href: `/docs/templates/portfolio`,
      //          items: [],
      //       },
      //       {
      //          title: 'Startup',
      //          href: `/docs/templates/startup`,
      //          items: [],
      //       },
      //       {
      //          title: 'SaaS',
      //          href: `/docs/templates/saas`,
      //          items: [],
      //          label: 'New',
      //       },
      //       {
      //          title: 'Mobile App',
      //          href: `/docs/templates/app`,
      //          items: [],
      //          disabled: true,
      //          label: 'Coming soon',
      //       },
      //    ],
      // },
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
               title: 'Animated Circular Progress Bar',
               href: `/docs/components/animated-circular-progress-bar`,
               items: [],
               label: '',
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
               label: 'New',
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
               title: 'File Tree',
               href: `/docs/components/file-tree`,
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
               title: 'Hero Video Dialog',
               href: '/docs/components/hero-video-dialog',
               items: [],
               label: 'New',
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
               title: 'Multi Select',
               href: '/docs/components/multi-select',
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
               title: 'Scroll Progress',
               href: `/docs/components/scroll-progress`,
               items: [],
            },
            {
               title: 'Scratch To Reveal',
               href: `/docs/components/scratch-to-reveal`,
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
            },
            {
               title: 'Stepper',
               href: '/docs/components/stepper',
               items: [],
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
               title: 'Timeline',
               href: '/docs/components/timeline',
               items: [],
            },
            {
               title: 'Toast',
               href: '/docs/components/toast',
               items: [],
            },
            {
               title: 'TOC',
               href: '/docs/components/toc',
               items: [],
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
            },
            {
               title: 'Tweet Card',
               href: '/docs/components/tweet-card',
               items: [],
            },
            {
               title: 'Video Modal',
               href: `/docs/components/video-modal`,
               items: [],
            },
         ],
      },
      // {
      //    title: 'Page Sections',
      //    items: [
      //    ],
      // },
      {
         title: 'Device Mockups',
         items: [
            {
               title: 'Safari',
               href: '/docs/components/safari',
               items: [],
               label: 'New',
            },
            {
               title: 'iPhone 15 Pro',
               href: '/docs/components/iphone-15-pro',
               items: [],
               label: 'New',
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
            {
               title: 'Cool Mode',
               href: `/docs/components/cool-mode`,
               items: [],
               label: '',
            },
         ],
      },
      {
         title: 'Animations',
         items: [
            {
               title: 'Blur Fade',
               href: `/docs/components/blur-fade`,
               items: [],
            },
         ],
      },
      {
         title: 'Text Animations',
         items: [
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
               title: 'Number Ticker',
               href: `/docs/components/number-ticker`,
               items: [],
            },
            {
               title: 'Text Reveal',
               href: `/docs/components/text-reveal`,
               items: [],
               label: '',
            },
            {
               title: 'Hyper Text',
               href: `/docs/components/hyper-text`,
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
         ],
      },
      {
         title: 'Buttons',
         items: [
            {
               title: 'Rainbow Button',
               href: '/docs/components/rainbow-button',
               items: [],
               label: 'New',
            },
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
               title: 'Flickering Grid',
               href: `/docs/components/flickering-grid`,
               items: [],
               label: 'New',
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
               title: 'Wavy Dot Pattern',
               href: `/docs/components/wavy-dot-pattern`,
               items: [],
            },
         ],
      },
   ],
   chartsNav: [
      {
         title: 'Getting Started',
         items: [
            {
               title: 'Introduction',
               href: '/docs/charts',
               items: [],
            },
            {
               title: 'Installation',
               href: '/docs/charts/installation',
               items: [],
            },
            {
               title: 'Theming',
               href: '/docs/charts/theming',
               items: [],
            },
         ],
      },
      {
         title: 'Charts',
         items: [
            {
               title: 'Area Chart',
               href: '/docs/charts/area',
               items: [],
            },
            {
               title: 'Bar Chart',
               href: '/docs/charts/bar',
               items: [],
            },
            {
               title: 'Line Chart',
               href: '/docs/charts/line',
               items: [],
            },
            {
               title: 'Pie Chart',
               href: '/docs/charts/pie',
               items: [],
            },
            {
               title: 'Radar Chart',
               href: '/docs/charts/radar',
               items: [],
            },
            {
               title: 'Radial Chart',
               href: '/docs/charts/radial',
               items: [],
            },
         ],
      },
      {
         title: 'Components',
         items: [
            {
               title: 'Tooltip',
               href: '/docs/charts/tooltip',
               items: [],
            },
            {
               title: 'Legend',
               href: '/docs/charts/legend',
               items: [],
            },
         ],
      },
   ],
}
