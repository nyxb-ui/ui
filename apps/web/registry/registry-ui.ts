import type { Registry } from '~/registry/schema'

export const ui: Registry = [
   {
      name: 'accordion',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-accordion'],
      files: ['ui/accordion.tsx'],
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
      files: ['ui/alert.tsx'],
   },
   {
      name: 'alert-dialog',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-alert-dialog'],
      registryDependencies: ['button'],
      files: ['ui/alert-dialog.tsx'],
   },
   {
      name: 'animated-beam',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/animated-beam.tsx'],
   },
   {
      name: 'animated-grid-pattern',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/animated-grid-pattern.tsx'],
   },
   {
      name: 'animated-list',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/animated-list.tsx'],
   },
   {
      name: 'animated-shiny-text',
      type: 'registry:ui',
      files: ['ui/animated-shiny-text.tsx'],
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
      files: ['ui/animated-subscribe-button.tsx'],
   },
   {
      name: 'animated-gradient-text',
      type: 'registry:ui',
      files: ['ui/animated-gradient-text.tsx'],
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
      files: ['ui/aspect-ratio.tsx'],
   },
   {
      name: 'avatar',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-avatar'],
      files: ['ui/avatar.tsx'],
   },
   {
      name: 'avatar-circles',
      type: 'registry:ui',
      files: ['ui/avatar-circles.tsx'],
   },
   {
      name: 'badge',
      type: 'registry:ui',
      files: ['ui/badge.tsx'],
   },
   {
      name: 'bento-grid',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-icons'],
      files: ['ui/bento-grid.tsx'],
   },
   {
      name: 'blur-in',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/blur-in.tsx'],
   },
   {
      name: 'border-beam',
      type: 'registry:ui',
      files: ['ui/border-beam.tsx'],
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
      files: ['ui/box-reveal.tsx'],
   },
   {
      name: 'breadcrumb',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-slot'],
      files: ['ui/breadcrumb.tsx'],
   },
   {
      name: 'blur-fade',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/blur-fade.tsx'],
   },
   {
      name: 'button',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-slot'],
      files: ['ui/button.tsx'],
   },
   {
      name: 'calendar',
      type: 'registry:ui',
      dependencies: ['react-day-picker@8.10.1', 'date-fns'],
      registryDependencies: ['button'],
      files: ['ui/calendar.tsx'],
   },
   {
      name: 'card',
      type: 'registry:ui',
      files: ['ui/card.tsx'],
   },
   {
      name: 'carousel',
      type: 'registry:ui',
      files: ['ui/carousel.tsx'],
      registryDependencies: ['button'],
      dependencies: ['embla-carousel-react'],
   },
   {
      name: 'chart',
      type: 'registry:ui',
      files: ['ui/chart.tsx'],
      registryDependencies: ['card'],
      dependencies: ['recharts', 'lucide-react'],
   },
   {
      name: 'checkbox',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-checkbox'],
      files: ['ui/checkbox.tsx'],
   },
   {
      name: 'client-tweet-card',
      type: 'registry:ui',
      dependencies: ['react-tweet'],
      files: ['ui/client-tweet-card.tsx'],
   },
   {
      name: 'collapsible',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-collapsible'],
      files: ['ui/collapsible.tsx'],
   },
   {
      name: 'command',
      type: 'registry:ui',
      dependencies: ['cmdk@1.0.0'],
      registryDependencies: ['dialog'],
      files: ['ui/command.tsx'],
   },
   {
      name: 'confetti',
      type: 'registry:ui',
      dependencies: ['canvas-confetti', '@types/canvas-confetti'],
      files: ['ui/confetti.tsx'],
   },
   {
      name: 'context-menu',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-context-menu'],
      files: ['ui/context-menu.tsx'],
   },
   {
      name: 'cool-mode',
      type: 'registry:ui',
      files: ['ui/cool-mode.tsx'],
   },
   {
      name: 'dialog',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-dialog'],
      files: ['ui/dialog.tsx'],
   },
   {
      name: 'dock',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/dock.tsx'],
   },
   {
      name: 'dot-pattern',
      type: 'registry:ui',
      files: ['ui/dot-pattern.tsx'],
   },
   {
      name: 'drawer',
      type: 'registry:ui',
      dependencies: ['vaul', '@radix-ui/react-dialog'],
      files: ['ui/drawer.tsx'],
   },
   {
      name: 'dropdown-menu',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-dropdown-menu'],
      files: ['ui/dropdown-menu.tsx'],
   },
   {
      name: 'fade-text',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/fade-text.tsx'],
   },
   {
      name: 'file-tree',
      type: 'registry:ui',
      files: ['ui/file-tree.tsx'],
   },
   {
      name: 'flip-text',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/flip-text.tsx'],
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
      files: ['ui/form.tsx'],
   },
   {
      name: 'globe',
      type: 'registry:ui',
      dependencies: ['cobe', 'react-spring'],
      files: ['ui/globe.tsx'],
   },
   {
      name: 'gradual-spacing',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/gradual-spacing.tsx'],
   },
   {
      name: 'grid-pattern',
      type: 'registry:ui',
      files: ['ui/grid-pattern.tsx'],
   },
   {
      name: 'gauge-circle',
      type: 'registry:ui',
      files: ['ui/gauge-circle.tsx'],
   },
   {
      name: 'hero-video-dialog',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/hero-video-dialog.tsx'],
   },
   {
      name: 'hover-card',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-hover-card'],
      files: ['ui/hover-card.tsx'],
   },
   {
      name: 'icon-cloud',
      type: 'registry:ui',
      dependencies: ['next-themes', 'react-icon-cloud'],
      files: ['ui/icon-cloud.tsx'],
   },
   {
      name: 'input',
      type: 'registry:ui',
      files: ['ui/input.tsx'],
   },
   {
      name: 'input-otp',
      type: 'registry:ui',
      dependencies: ['input-otp'],
      files: ['ui/input-otp.tsx'],
   },
   {
      name: 'input-phone',
      type: 'registry:ui',
      dependencies: ['react-phone-number-input', '@radix-ui/react-icons'],
      registryDependencies: ['button', 'input', 'popover', 'command'],
      files: ['ui/input-phone.tsx'],
   },
   {
      name: 'label',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-label'],
      files: ['ui/label.tsx'],
   },
   {
      name: 'letter-pullup',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/letter-pullup.tsx'],
   },
   {
      name: 'magic-card',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/magic-card.tsx'],
   },
   {
      name: 'marquee',
      type: 'registry:ui',
      files: ['ui/marquee.tsx'],
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
      files: ['ui/menubar.tsx'],
   },
   {
      name: 'meteors',
      type: 'registry:ui',
      files: ['ui/meteors.tsx'],
   },
   {
      name: 'multi-select',
      type: 'registry:ui',
      files: ['ui/multi-select.tsx'],
   },
   {
      name: 'navigation-menu',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-navigation-menu'],
      files: ['ui/navigation-menu.tsx'],
   },
   {
      name: 'neon-gradient-card',
      type: 'registry:ui',
      files: ['ui/neon-gradient-card.tsx'],
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
      files: ['ui/number-ticker.tsx'],
   },
   {
      name: 'orbiting-circles',
      type: 'registry:ui',
      files: ['ui/orbiting-circles.tsx'],
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
      files: ['ui/pagination.tsx'],
   },
   {
      name: 'particles',
      type: 'registry:ui',
      files: ['ui/particles.tsx'],
   },
   {
      name: 'popover',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-popover'],
      files: ['ui/popover.tsx'],
   },
   {
      name: 'progress',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-progress'],
      files: ['ui/progress.tsx'],
   },
   {
      name: 'pulsating-button',
      type: 'registry:ui',
      files: ['ui/pulsating-button.tsx'],
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
      files: ['ui/radio-group.tsx'],
   },
   {
      name: 'resizable',
      type: 'registry:ui',
      dependencies: ['react-resizable-panels'],
      files: ['ui/resizable.tsx'],
   },
   {
      name: 'retro-grid',
      type: 'registry:ui',
      files: ['ui/retro-grid.tsx'],
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
      files: ['ui/ripple.tsx'],
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
      files: ['ui/scroll-area.tsx'],
   },
   {
      name: 'scroll-based-velocity',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/scroll-based-velocity.tsx'],
   },
   {
      name: 'scroll-progress',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/scroll-progress.tsx'],
   },
   {
      name: 'select',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-select'],
      files: ['ui/select.tsx'],
   },
   {
      name: 'separate-away',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/separate-away.tsx'],
   },
   {
      name: 'separator',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-separator'],
      files: ['ui/separator.tsx'],
   },
   {
      name: 'sheet',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-dialog'],
      files: ['ui/sheet.tsx'],
   },
   {
      name: 'shimmer-button',
      type: 'registry:ui',
      files: ['ui/shimmer-button.tsx'],
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
      files: ['ui/shine-border.tsx'],
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
      files: ['ui/shiny-button.tsx'],
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
      files: ['ui/sidebar.tsx'],
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
      files: ['ui/skeleton.tsx'],
   },
   {
      name: 'slider',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-slider'],
      files: ['ui/slider.tsx'],
   },
   {
      name: 'sonner',
      type: 'registry:ui',
      dependencies: ['sonner', 'next-themes'],
      files: ['ui/sonner.tsx'],
   },
   {
      name: 'sparkles-text',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/sparkles-text.tsx'],
   },
   {
      name: 'star-rating',
      type: 'registry:ui',
      dependencies: ['lucide-react'],
      files: ['ui/star-rating.tsx'],
   },
   {
      name: 'switch',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-switch'],
      files: ['ui/switch.tsx'],
   },
   {
      name: 'stepper',
      type: 'registry:ui',
      dependencies: ['lucide-react'],
      registryDependencies: ['collapsible'],
      files: ['ui/stepper.tsx'],
   },
   {
      name: 'scratch-to-reveal',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/scratch-to-reveal.tsx'],
   },
   {
      name: 'table',
      type: 'registry:ui',
      files: ['ui/table.tsx'],
   },
   {
      name: 'tabs',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-tabs'],
      files: ['ui/tabs.tsx'],
   },
   {
      name: 'textarea',
      type: 'registry:ui',
      files: ['ui/textarea.tsx'],
   },
   {
      name: 'text-reveal',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/text-reveal.tsx'],
   },
   {
      name: 'timeline',
      type: 'registry:ui',
      dependencies: ['lucide-react'],
      files: ['ui/timeline.tsx'],
   },
   {
      name: 'toc',
      type: 'registry:ui',
      files: ['ui/toc.tsx'],
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
      files: ['ui/toggle.tsx'],
   },
   {
      name: 'toggle-group',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-toggle-group'],
      registryDependencies: ['toggle'],
      files: ['ui/toggle-group.tsx'],
   },
   {
      name: 'tooltip',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-tooltip'],
      files: ['ui/tooltip.tsx'],
   },
   {
      name: 'tour',
      type: 'registry:ui',
      files: ['ui/tour.tsx'],
   },
   {
      name: 'typing-animation',
      type: 'registry:ui',
      files: ['ui/typing-animation.tsx'],
   },
   {
      name: 'tweet-card',
      type: 'registry:ui',
      dependencies: ['react-tweet'],
      files: ['ui/tweet-card.tsx'],
   },
   {
      name: 'video-modal',
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-dialog'],
      files: ['ui/video-modal.tsx'],
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
      files: ['ui/wavy-dot-pattern.tsx'],
   },
   {
      name: 'wavy-text',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/wavy-text.tsx'],
   },
   {
      name: 'word-fade-in',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/word-fade-in.tsx'],
   },
   {
      name: 'word-pull-up',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/word-pull-up.tsx'],
   },
   {
      name: 'word-rotate',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/word-rotate.tsx'],
   },
   {
      name: 'rainbow-button',
      type: 'registry:ui',
      files: ['ui/rainbow-button.tsx'],
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
      files: ['ui/flickering-grid.tsx'],
   },
   {
      name: 'hyper-text',
      type: 'registry:ui',
      dependencies: ['framer-motion'],
      files: ['ui/hyper-text.tsx'],
   },
   {
      name: 'safari',
      type: 'registry:ui',
      files: ['ui/safari.tsx'],
   },
   {
      name: 'iphone-15-pro',
      type: 'registry:ui',
      files: ['ui/iphone-15-pro.tsx'],
   },
]
