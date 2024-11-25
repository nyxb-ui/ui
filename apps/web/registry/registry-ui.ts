import type { Registry } from '~/registry/schema'

export const ui: Registry = [
   {
      name: 'accordion',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-accordion'],
      files: [
         {
            path: 'ui/accordion.tsx',
            type: 'registry:component',
         },
      ],
      tailwind: {
         config: {
            theme: {
               extend: {
                  keyframes: {
                     'accordion-down': {
                        from: { height: '0' },
                        to: { height: 'var(--radix-accordion-content-height)' },
                     },
                     'accordion-up': {
                        from: { height: 'var(--radix-accordion-content-height)' },
                        to: { height: '0' },
                     },
                  },
                  animation: {
                     'accordion-down': 'accordion-down 0.2s ease-out',
                     'accordion-up': 'accordion-up 0.2s ease-out',
                  },
               },
            },
         },
      },
   },
   {
      name: 'alert',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/alert.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'alert-dialog',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-alert-dialog'],
      registryDependencies: ['button'],
      files: [
         {
            path: 'ui/alert-dialog.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'animated-beam',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/animated-beam.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'animated-grid-pattern',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/animated-grid-pattern.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'animated-list',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/animated-list.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'animated-shiny-text',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/animated-shiny-text.tsx',
            type: 'registry:component',
         },
      ],
      tailwind: {
         config: {
            theme: {
               extend: {
                  animation: {
                     'shiny-text': 'shiny-text 8s infinite',
                  },
                  keyframes: {
                     'shiny-text': {
                        '0%, 90%, 100%': {
                           'background-position': 'calc(-100% - var(--shiny-width)) 0',
                        },
                        '30%, 60%': {
                           'background-position': 'calc(100% + var(--shiny-width)) 0',
                        },
                     },
                  },
               },
            },
         },
      },
   },
   {
      name: 'animated-subscribe-button',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/animated-subscribe-button.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'animated-gradient-text',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/animated-gradient-text.tsx',
            type: 'registry:component',
         },
      ],
      tailwind: {
         config: {
            theme: {
               extend: {
                  animation: {
                     gradient: 'gradient 8s linear infinite',
                  },
                  keyframes: {
                     gradient: {
                        to: {
                           backgroundPosition: 'var(--bg-size) 0',
                        },
                     },
                  },
               },
            },
         },
      },
   },
   {
      name: 'aspect-ratio',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-aspect-ratio'],
      files: [
         {
            path: 'ui/aspect-ratio.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'avatar',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-avatar'],
      files: [
         {
            path: 'ui/avatar.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'avatar-circles',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/avatar-circles.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'badge',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/badge.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'bento-grid',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-icons'],
      files: [
         {
            path: 'ui/bento-grid.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'blur-in',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/blur-in.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'border-beam',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/border-beam.tsx',
            type: 'registry:component',
         },
      ],
      tailwind: {
         config: {
            theme: {
               extend: {
                  animation: {
                     'border-beam':
                  'border-beam calc(var(--duration)*1s) infinite linear',
                  },
                  keyframes: {
                     'border-beam': {
                        '100%': {
                           'offset-distance': '100%',
                        },
                     },
                  },
               },
            },
         },
      },
   },
   {
      name: 'box-reveal',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/box-reveal.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'breadcrumb',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-slot'],
      files: [
         {
            path: 'ui/breadcrumb.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'blur-fade',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/blur-fade.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'button',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-slot'],
      files: [
         {
            path: 'ui/button.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'calendar',
      type: 'registry:ui',
      dependencies: ['react-day-picker@8.10.1', 'date-fns'],
      registryDependencies: ['button'],
      files: [
         {
            path: 'ui/calendar.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'card',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/card.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'carousel',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/carousel.tsx',
            type: 'registry:component',
         },
      ],
      registryDependencies: ['button'],
      dependencies: ['embla-carousel-react'],
   },
   {
      name: 'chart',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/chart.tsx',
            type: 'registry:component',
         },
      ],
      registryDependencies: ['card'],
      dependencies: ['recharts', 'lucide-react'],
   },
   {
      name: 'checkbox',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-checkbox'],
      files: [
         {
            path: 'ui/checkbox.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'client-tweet-card',
      type: 'registry:ui',
      dependencies: ['react-tweet'],
      files: [
         {
            path: 'ui/client-tweet-card.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'collapsible',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-collapsible'],
      files: [
         {
            path: 'ui/collapsible.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'command',
      type: 'registry:ui',
      dependencies: ['cmdk@1.0.0'],
      registryDependencies: ['dialog'],
      files: [
         {
            path: 'ui/command.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'confetti',
      type: 'registry:ui',
      dependencies: ['canvas-confetti', '@types/canvas-confetti'],
      files: [
         {
            path: 'ui/confetti.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'context-menu',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-context-menu'],
      files: [
         {
            path: 'ui/context-menu.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'cool-mode',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/cool-mode.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'dialog',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-dialog'],
      files: [
         {
            path: 'ui/dialog.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'dock',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/dock.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'dot-pattern',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/dot-pattern.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'drawer',
      type: 'registry:ui',
      dependencies: ['vaul', '@radix-ui/react-dialog'],
      files: [
         {
            path: 'ui/drawer.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'dropdown-menu',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-dropdown-menu'],
      files: [
         {
            path: 'ui/dropdown-menu.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'fade-text',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/fade-text.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'file-tree',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/file-tree.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'flip-text',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/flip-text.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'form',
      type: 'registry:ui',
      dependencies: [
         '@radix-ui/react-label',
         '@radix-ui/react-slot',
         '@hookform/resolvers',
         'zod',
         'react-hook-form',
      ],
      registryDependencies: ['button', 'label'],
      files: [
         {
            path: 'ui/form.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'globe',
      type: 'registry:ui',
      dependencies: ['cobe', 'react-spring'],
      files: [
         {
            path: 'ui/globe.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'gradual-spacing',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/gradual-spacing.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'grid-pattern',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/grid-pattern.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'gauge-circle',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/gauge-circle.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'hero-video-dialog',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/hero-video-dialog.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'hover-card',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-hover-card'],
      files: [
         {
            path: 'ui/hover-card.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'icon-cloud',
      type: 'registry:ui',
      dependencies: ['next-themes', 'react-icon-cloud'],
      files: [
         {
            path: 'ui/icon-cloud.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'input',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/input.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'input-otp',
      type: 'registry:ui',
      dependencies: ['input-otp'],
      files: [
         {
            path: 'ui/input-otp.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'input-phone',
      type: 'registry:ui',
      dependencies: ['react-phone-number-input', '@radix-ui/react-icons'],
      registryDependencies: ['button', 'input', 'popover', 'command'],
      files: [
         {
            path: 'ui/input-phone.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'label',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-label'],
      files: [
         {
            path: 'ui/label.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'letter-pullup',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/letter-pullup.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'magic-card',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/magic-card.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'marquee',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/marquee.tsx',
            type: 'registry:component',
         },
      ],
      tailwind: {
         config: {
            theme: {
               extend: {
                  keyframes: {
                     'marquee': {
                        from: { transform: 'translateX(0)' },
                        to: { transform: 'translateX(calc(-100% - var(--gap)))' },
                     },
                     'marquee-vertical': {
                        from: { transform: 'translateY(0)' },
                        to: { transform: 'translateY(calc(-100% - var(--gap)))' },
                     },
                  },
                  animation: {
                     'marquee': 'marquee var(--duration) infinite linear',
                     'marquee-vertical':
                  'marquee-vertical var(--duration) linear infinite',
                  },
               },
            },
         },
      },
   },
   {
      name: 'menubar',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-menubar'],
      files: [
         {
            path: 'ui/menubar.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'meteors',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/meteors.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'multi-select',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/multi-select.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'navigation-menu',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-navigation-menu'],
      files: [
         {
            path: 'ui/navigation-menu.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'neon-gradient-card',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/neon-gradient-card.tsx',
            type: 'registry:component',
         },
      ],
      tailwind: {
         config: {
            theme: {
               extend: {
                  animation: {
                     'background-position-spin':
                  'background-position-spin 3000ms infinite alternate',
                  },
                  keyframes: {
                     'background-position-spin': {
                        '0%': { backgroundPosition: 'top center' },
                        '100%': { backgroundPosition: 'bottom center' },
                     },
                  },
               },
            },
         },
      },
   },
   {
      name: 'number-ticker',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/number-ticker.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'orbiting-circles',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/orbiting-circles.tsx',
            type: 'registry:component',
         },
      ],
      tailwind: {
         config: {
            theme: {
               extend: {
                  animation: {
                     orbit: 'orbit calc(var(--duration)*1s) linear infinite',
                  },
                  keyframes: {
                     orbit: {
                        '0%': {
                           transform:
                      'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)',
                        },
                        '100%': {
                           transform:
                      'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)',
                        },
                     },
                  },
               },
            },
         },
      },
   },
   {
      name: 'pagination',
      type: 'registry:ui',
      registryDependencies: ['button'],
      files: [
         {
            path: 'ui/pagination.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'particles',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/particles.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'popover',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-popover'],
      files: [
         {
            path: 'ui/popover.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'progress',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-progress'],
      files: [
         {
            path: 'ui/progress.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'pulsating-button',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/pulsating-button.tsx',
            type: 'registry:component',
         },
      ],
      tailwind: {
         config: {
            theme: {
               extend: {
                  animation: {
                     pulse: 'pulse var(--duration) ease-out infinite',
                  },
                  keyframes: {
                     pulse: {
                        '0%, 100%': { boxShadow: '0 0 0 0 var(--pulse-color)' },
                        '50%': { boxShadow: '0 0 0 8px var(--pulse-color)' },
                     },
                  },
               },
            },
         },
      },
   },
   {
      name: 'radio-group',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-radio-group'],
      files: [
         {
            path: 'ui/radio-group.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'resizable',
      type: 'registry:ui',
      dependencies: ['react-resizable-panels'],
      files: [
         {
            path: 'ui/resizable.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'retro-grid',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/retro-grid.tsx',
            type: 'registry:component',
         },
      ],
      tailwind: {
         config: {
            theme: {
               extend: {
                  animation: {
                     grid: 'grid 15s linear infinite',
                  },
                  keyframes: {
                     grid: {
                        '0%': { transform: 'translateY(-50%)' },
                        '100%': { transform: 'translateY(0)' },
                     },
                  },
               },
            },
         },
      },
   },
   {
      name: 'ripple',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/ripple.tsx',
            type: 'registry:component',
         },
      ],
      tailwind: {
         config: {
            theme: {
               extend: {
                  animation: {
                     ripple:
                  'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
                  },
                  keyframes: {
                     ripple: {
                        '0%, 100%': {
                           transform: 'translate(-50%, -50%) scale(1)',
                        },
                        '50%': {
                           transform: 'translate(-50%, -50%) scale(0.9)',
                        },
                     },
                  },
               },
            },
         },
      },
   },
   {
      name: 'scroll-area',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-scroll-area'],
      files: [
         {
            path: 'ui/scroll-area.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'scroll-based-velocity',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/scroll-based-velocity.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'scroll-progress',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/scroll-progress.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'select',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-select'],
      files: [
         {
            path: 'ui/select.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'separate-away',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/separate-away.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'separator',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-separator'],
      files: [
         {
            path: 'ui/separator.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'sheet',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-dialog'],
      files: [
         {
            path: 'ui/sheet.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'shimmer-button',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/shimmer-button.tsx',
            type: 'registry:component',
         },
      ],
      tailwind: {
         config: {
            theme: {
               extend: {
                  animation: {
                     'shimmer-slide':
                  'shimmer-slide var(--speed) ease-in-out infinite alternate',
                     'spin-around':
                  'spin-around calc(var(--speed) * 2) infinite linear',
                  },
                  keyframes: {
                     'shimmer-slide': {
                        to: {
                           transform: 'translate(calc(100cqw - 100%), 0)',
                        },
                     },
                     'spin-around': {
                        '0%': {
                           transform: 'translateZ(0) rotate(0)',
                        },
                        '15%, 35%': {
                           transform: 'translateZ(0) rotate(90deg)',
                        },
                        '65%, 85%': {
                           transform: 'translateZ(0) rotate(270deg)',
                        },
                        '100%': {
                           transform: 'translateZ(0) rotate(360deg)',
                        },
                     },
                  },
               },
            },
         },
      },
   },
   {
      name: 'shine-border',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/shine-border.tsx',
            type: 'registry:component',
         },
      ],
      tailwind: {
         config: {
            theme: {
               extend: {
                  animation: {
                     shine: 'shine var(--duration) infinite linear',
                  },
                  keyframes: {
                     shine: {
                        '0%': {
                           'background-position': '0% 0%',
                        },
                        '50%': {
                           'background-position': '100% 100%',
                        },
                        'to': {
                           'background-position': '0% 0%',
                        },
                     },
                  },
               },
            },
         },
      },
   },
   {
      name: 'shiny-button',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/shiny-button.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'sidebar',
      type: 'registry:ui',
      dependencies: [
         '@radix-ui/react-slot',
         'class-variance-authority',
         'lucide-react',
      ],
      registryDependencies: [
         'button',
         'separator',
         'sheet',
         'tooltip',
         'input',
         'use-mobile',
         'skeleton',
      ],
      files: [
         {
            path: 'ui/sidebar.tsx',
            type: 'registry:component',
         },
      ],
      tailwind: {
         config: {
            theme: {
               extend: {
                  colors: {
                     sidebar: {
                        'DEFAULT': 'hsl(var(--sidebar-background))',
                        'foreground': 'hsl(var(--sidebar-foreground))',
                        'primary': 'hsl(var(--sidebar-primary))',
                        'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                        'accent': 'hsl(var(--sidebar-accent))',
                        'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                        'border': 'hsl(var(--sidebar-border))',
                        'ring': 'hsl(var(--sidebar-ring))',
                     },
                  },
               },
            },
         },
      },
      cssVars: {
         light: {
            'sidebar-background': '0 0% 98%',
            'sidebar-foreground': '240 5.3% 26.1%',
            'sidebar-primary': '240 5.9% 10%',
            'sidebar-primary-foreground': '0 0% 98%',
            'sidebar-accent': '240 4.8% 95.9%',
            'sidebar-accent-foreground': '240 5.9% 10%',
            'sidebar-border': '220 13% 91%',
            'sidebar-ring': '217.2 91.2% 59.8%',
         },
         dark: {
            'sidebar-background': '240 5.9% 10%',
            'sidebar-foreground': '240 4.8% 95.9%',
            'sidebar-primary': '224.3 76.3% 48%',
            'sidebar-primary-foreground': '0 0% 100%',
            'sidebar-accent': '240 3.7% 15.9%',
            'sidebar-accent-foreground': '240 4.8% 95.9%',
            'sidebar-border': '240 3.7% 15.9%',
            'sidebar-ring': '217.2 91.2% 59.8%',
         },
      },
   },
   {
      name: 'skeleton',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/skeleton.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'slider',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-slider'],
      files: [
         {
            path: 'ui/slider.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'sonner',
      type: 'registry:ui',
      dependencies: ['sonner', 'next-themes'],
      files: [
         {
            path: 'ui/sonner.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'sparkles-text',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/sparkles-text.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'star-rating',
      type: 'registry:ui',
      dependencies: ['lucide-react'],
      files: [
         {
            path: 'ui/star-rating.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'switch',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-switch'],
      files: [
         {
            path: 'ui/switch.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'stepper',
      type: 'registry:ui',
      dependencies: ['lucide-react'],
      registryDependencies: ['collapsible'],
      files: [
         {
            path: 'ui/stepper.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'scratch-to-reveal',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/scratch-to-reveal.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'table',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/table.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'tabs',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-tabs'],
      files: [
         {
            path: 'ui/tabs.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'textarea',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/textarea.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'text-reveal',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/text-reveal.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'timeline',
      type: 'registry:ui',
      dependencies: ['lucide-react'],
      files: [
         {
            path: 'ui/timeline.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'toc',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/toc.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'toast',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-toast'],
      files: [
         {
            path: 'ui/toast.tsx',
            type: 'registry:ui',
         },
         {
            path: 'hooks/use-toast.ts',
            type: 'registry:hook',
         },
         {
            path: 'ui/toaster.tsx',
            type: 'registry:ui',
         },
      ],
   },
   {
      name: 'toggle',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-toggle'],
      files: [
         {
            path: 'ui/toggle.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'toggle-group',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-toggle-group'],
      registryDependencies: ['toggle'],
      files: [
         {
            path: 'ui/toggle-group.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'tooltip',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-tooltip'],
      files: [
         {
            path: 'ui/tooltip.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'tour',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/tour.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'typing-animation',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/typing-animation.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'tweet-card',
      type: 'registry:ui',
      dependencies: ['react-tweet'],
      files: [
         {
            path: 'ui/tweet-card.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'video-modal',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-dialog'],
      files: [
         {
            path: 'ui/video-modal.tsx',
            type: 'registry:component',
         },
      ],
      tailwind: {
         config: {
            theme: {
               extend: {
                  animation: {
                     'modal-fade-in': 'modal-fade-in 500ms ease-out',
                     'modal-fade-out': 'modal-fade-out 500ms ease-in',
                  },
                  keyframes: {
                     'modal-fade-in': {
                        '0%': { opacity: '0' },
                        '100%': { opacity: '1' },
                     },
                     'modal-fade-out': {
                        '0%': { opacity: '1' },
                        '100%': { opacity: '0' },
                     },
                  },
               },
            },
         },
      },
   },
   {
      name: 'wavy-dot-pattern',
      type: 'registry:ui',
      dependencies: ['react-anime'],
      files: [
         {
            path: 'ui/wavy-dot-pattern.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'wavy-text',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/wavy-text.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'word-fade-in',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/word-fade-in.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'word-pull-up',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/word-pull-up.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'word-rotate',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/word-rotate.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'rainbow-button',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/rainbow-button.tsx',
            type: 'registry:component',
         },
      ],
      cssVars: {
         light: {
            '--color-1': '0 100% 63%',
            '--color-2': '270 100% 63%',
            '--color-3': '210 100% 63%',
            '--color-4': '195 100% 63%',
            '--color-5': '90 100% 63%',
         },
         dark: {
            '--color-1': '0 100% 63%',
            '--color-2': '270 100% 63%',
            '--color-3': '210 100% 63%',
            '--color-4': '195 100% 63%',
            '--color-5': '90 100% 63%',
         },
      },
      tailwind: {
         config: {
            theme: {
               extend: {
                  colors: {
                     'color-1': 'hsl(var(--color-1))',
                     'color-2': 'hsl(var(--color-2))',
                     'color-3': 'hsl(var(--color-3))',
                     'color-4': 'hsl(var(--color-4))',
                     'color-5': 'hsl(var(--color-5))',
                  },
                  animation: {
                     rainbow: 'rainbow var(--speed, 2s) infinite linear',
                  },
                  keyframes: {
                     rainbow: {
                        '0%': { 'background-position': '0%' },
                        '100%': { 'background-position': '200%' },
                     },
                  },
               },
            },
         },
      },
   },
   {
      name: 'flickering-grid',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/flickering-grid.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'hyper-text',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: [
         {
            path: 'ui/hyper-text.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'safari',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/safari.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'iphone-15-pro',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/iphone-15-pro.tsx',
            type: 'registry:component',
         },
      ],
   },
   {
      name: 'animated-circular-progress-bar',
      type: 'registry:ui',
      files: [
         {
            path: 'ui/animated-circular-progress-bar.tsx',
            type: 'registry:component',
         },
      ],
   },
]
