import type { Registry } from "nyxb/registry"

export const examples: Registry["items"] = [
   {
      name: "accordion-demo",
      type: "registry:example",
      registryDependencies: ["accordion"],
      files: [
         {
            path: "examples/accordion-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "alert-demo",
      type: "registry:example",
      registryDependencies: ["alert"],
      files: [
         {
            path: "examples/alert-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "alert-destructive",
      type: "registry:example",
      registryDependencies: ["alert"],
      files: [
         {
            path: "examples/alert-destructive.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "alert-dialog-demo",
      type: "registry:example",
      registryDependencies: ["alert-dialog", "button"],
      files: [
         {
            path: "examples/alert-dialog-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "aspect-ratio-demo",
      type: "registry:example",
      registryDependencies: ["aspect-ratio"],
      files: [
         {
            path: "examples/aspect-ratio-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "avatar-demo",
      type: "registry:example",
      registryDependencies: ["avatar"],
      files: [
         {
            path: "examples/avatar-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "badge-demo",
      type: "registry:example",
      registryDependencies: ["badge"],
      files: [
         {
            path: "examples/badge-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "badge-destructive",
      type: "registry:example",
      registryDependencies: ["badge"],
      files: [
         {
            path: "examples/badge-destructive.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "badge-outline",
      type: "registry:example",
      registryDependencies: ["badge"],
      files: [
         {
            path: "examples/badge-outline.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "badge-secondary",
      type: "registry:example",
      registryDependencies: ["badge"],
      files: [
         {
            path: "examples/badge-secondary.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "breadcrumb-demo",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: [
         {
            path: "examples/breadcrumb-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "breadcrumb-separator",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: [
         {
            path: "examples/breadcrumb-separator.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "breadcrumb-dropdown",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: [
         {
            path: "examples/breadcrumb-dropdown.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "breadcrumb-ellipsis",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: [
         {
            path: "examples/breadcrumb-ellipsis.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "breadcrumb-link",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: [
         {
            path: "examples/breadcrumb-link.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "breadcrumb-responsive",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: [
         {
            path: "examples/breadcrumb-responsive.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "button-demo",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
         {
            path: "examples/button-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "button-secondary",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
         {
            path: "examples/button-secondary.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "button-destructive",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
         {
            path: "examples/button-destructive.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "button-outline",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
         {
            path: "examples/button-outline.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "button-ghost",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
         {
            path: "examples/button-ghost.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "button-link",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
         {
            path: "examples/button-link.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "button-with-icon",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
         {
            path: "examples/button-with-icon.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "button-loading",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
         {
            path: "examples/button-loading.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "button-icon",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
         {
            path: "examples/button-icon.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "button-as-child",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
         {
            path: "examples/button-as-child.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "pulsating-button-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/pulsating-button-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "calendar-demo",
      type: "registry:example",
      registryDependencies: ["calendar"],
      files: [
         {
            path: "examples/calendar-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "calendar-form",
      type: "registry:example",
      registryDependencies: ["calendar", "form", "popover"],
      files: [
         {
            path: "examples/calendar-form.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "card-demo",
      type: "registry:example",
      registryDependencies: ["card", "button", "switch"],
      files: [
         {
            path: "examples/card-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "card-with-form",
      type: "registry:example",
      registryDependencies: ["button", "card", "input", "label", "select"],
      files: [
         {
            path: "examples/card-with-form.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "carousel-demo",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: [
         {
            path: "examples/carousel-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "carousel-size",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: [
         {
            path: "examples/carousel-size.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "carousel-spacing",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: [
         {
            path: "examples/carousel-spacing.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "carousel-orientation",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: [
         {
            path: "examples/carousel-orientation.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "carousel-dots",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: [
         {
            path: "examples/carousel-dots.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "carousel-api",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: [
         {
            path: "examples/carousel-api.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "carousel-plugin",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: [
         {
            path: "examples/carousel-plugin.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "checkbox-demo",
      type: "registry:example",
      registryDependencies: ["checkbox"],
      files: [
         {
            path: "examples/checkbox-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "checkbox-disabled",
      type: "registry:example",
      registryDependencies: ["checkbox"],
      files: [
         {
            path: "examples/checkbox-disabled.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "checkbox-form-multiple",
      type: "registry:example",
      registryDependencies: ["checkbox", "form"],
      files: [
         {
            path: "examples/checkbox-form-multiple.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "checkbox-form-single",
      type: "registry:example",
      registryDependencies: ["checkbox", "form"],
      files: [
         {
            path: "examples/checkbox-form-single.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "checkbox-with-text",
      type: "registry:example",
      registryDependencies: ["checkbox"],
      files: [
         {
            path: "examples/checkbox-with-text.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "collapsible-demo",
      type: "registry:example",
      registryDependencies: ["collapsible"],
      files: [
         {
            path: "examples/collapsible-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "combobox-demo",
      type: "registry:example",
      registryDependencies: ["command"],
      files: [
         {
            path: "examples/combobox-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "combobox-dropdown-menu",
      type: "registry:example",
      registryDependencies: ["command", "dropdown-menu", "button"],
      files: [
         {
            path: "examples/combobox-dropdown-menu.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "combobox-form",
      type: "registry:example",
      registryDependencies: ["command", "form"],
      files: [
         {
            path: "examples/combobox-form.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "combobox-popover",
      type: "registry:example",
      registryDependencies: ["combobox", "popover"],
      files: [
         {
            path: "examples/combobox-popover.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "combobox-responsive",
      type: "registry:example",
      registryDependencies: ["combobox", "popover", "drawer"],
      files: [
         {
            path: "examples/combobox-responsive.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "command-demo",
      type: "registry:example",
      registryDependencies: ["command"],
      files: [
         {
            path: "examples/command-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "command-dialog",
      type: "registry:example",
      registryDependencies: ["command", "dialog"],
      files: [
         {
            path: "examples/command-dialog.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "context-menu-demo",
      type: "registry:example",
      registryDependencies: ["context-menu"],
      files: [
         {
            path: "examples/context-menu-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "data-table-demo",
      type: "registry:example",
      registryDependencies: ["data-table"],
      files: [
         {
            path: "examples/data-table-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "date-picker-demo",
      type: "registry:example",
      registryDependencies: ["button", "calendar", "popover"],
      files: [
         {
            path: "examples/date-picker-demo.tsx",
            type: "registry:example",
         },
      ],
      dependencies: ["date-fns"],
   },
   {
      name: "date-picker-form",
      type: "registry:example",
      registryDependencies: ["button", "calendar", "form", "popover"],
      files: [
         {
            path: "examples/date-picker-form.tsx",
            type: "registry:example",
         },
      ],
      dependencies: ["date-fns"],
   },
   {
      name: "date-picker-with-presets",
      type: "registry:example",
      registryDependencies: ["button", "calendar", "popover", "select"],
      files: [
         {
            path: "examples/date-picker-with-presets.tsx",
            type: "registry:example",
         },
      ],
      dependencies: ["date-fns"],
   },
   {
      name: "date-picker-with-range",
      type: "registry:example",
      registryDependencies: ["button", "calendar", "popover"],
      files: [
         {
            path: "examples/date-picker-with-range.tsx",
            type: "registry:example",
         },
      ],
      dependencies: ["date-fns"],
   },
   {
      name: "dialog-demo",
      type: "registry:example",
      registryDependencies: ["dialog"],
      files: [
         {
            path: "examples/dialog-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "dialog-close-button",
      type: "registry:example",
      registryDependencies: ["dialog", "button"],
      files: [
         {
            path: "examples/dialog-close-button.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "drawer-demo",
      type: "registry:example",
      registryDependencies: ["drawer"],
      files: [
         {
            path: "examples/drawer-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "drawer-dialog",
      type: "registry:example",
      registryDependencies: ["drawer", "dialog"],
      files: [
         {
            path: "examples/drawer-dialog.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "dropdown-menu-demo",
      type: "registry:example",
      registryDependencies: ["dropdown-menu"],
      files: [
         {
            path: "examples/dropdown-menu-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "dropdown-menu-checkboxes",
      type: "registry:example",
      registryDependencies: ["dropdown-menu", "checkbox"],
      files: [
         {
            path: "examples/dropdown-menu-checkboxes.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "dropdown-menu-radio-group",
      type: "registry:example",
      registryDependencies: ["dropdown-menu", "radio-group"],
      files: [
         {
            path: "examples/dropdown-menu-radio-group.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "hover-card-demo",
      type: "registry:example",
      registryDependencies: ["hover-card"],
      files: [
         {
            path: "examples/hover-card-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-demo",
      type: "registry:example",
      registryDependencies: ["input"],
      files: [
         {
            path: "examples/input-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-disabled",
      type: "registry:example",
      registryDependencies: ["input"],
      files: [
         {
            path: "examples/input-disabled.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-file",
      type: "registry:example",
      registryDependencies: ["input"],
      files: [
         {
            path: "examples/input-file.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-form",
      type: "registry:example",
      registryDependencies: ["input", "button", "form"],
      files: [
         {
            path: "examples/input-form.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-with-button",
      type: "registry:example",
      registryDependencies: ["input", "button"],
      files: [
         {
            path: "examples/input-with-button.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-with-label",
      type: "registry:example",
      registryDependencies: ["input", "button", "label"],
      files: [
         {
            path: "examples/input-with-label.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-with-text",
      type: "registry:example",
      registryDependencies: ["input", "button", "label"],
      files: [
         {
            path: "examples/input-with-text.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-otp-demo",
      type: "registry:example",
      registryDependencies: ["input-otp"],
      files: [
         {
            path: "examples/input-otp-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-otp-pattern",
      type: "registry:example",
      registryDependencies: ["input-otp"],
      files: [
         {
            path: "examples/input-otp-pattern.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-otp-separator",
      type: "registry:example",
      registryDependencies: ["input-otp"],
      files: [
         {
            path: "examples/input-otp-separator.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-otp-controlled",
      type: "registry:example",
      registryDependencies: ["input-otp"],
      files: [
         {
            path: "examples/input-otp-controlled.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-otp-form",
      type: "registry:example",
      registryDependencies: ["input-otp", "form"],
      files: [
         {
            path: "examples/input-otp-form.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-otp-disabled",
      type: "registry:example",
      registryDependencies: ["input-otp", "form"],
      files: [
         {
            path: "examples/input-otp-disabled.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-phone-default",
      type: "registry:example",
      registryDependencies: ["button", "input", "popover"],
      files: [
         {
            path: "examples/input-phone-default.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-phone-demo",
      type: "registry:example",
      registryDependencies: ["button", "input", "popover"],
      files: [
         {
            path: "examples/input-phone-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-phone-form",
      type: "registry:example",
      registryDependencies: ["button", "input", "popover"],
      files: [
         {
            path: "examples/input-phone-form.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-phone-initial",
      type: "registry:example",
      registryDependencies: ["button", "input", "popover"],
      files: [
         {
            path: "examples/input-phone-initial.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-phone-international",
      type: "registry:example",
      registryDependencies: ["button", "input", "popover"],
      files: [
         {
            path: "examples/input-phone-international.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "input-phone-national",
      type: "registry:example",
      registryDependencies: ["button", "input", "popover"],
      files: [
         {
            path: "examples/input-phone-national.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "label-demo",
      type: "registry:example",
      registryDependencies: ["label"],
      files: [
         {
            path: "examples/label-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "menubar-demo",
      type: "registry:example",
      registryDependencies: ["menubar"],
      files: [
         {
            path: "examples/menubar-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "navigation-menu-demo",
      type: "registry:example",
      registryDependencies: ["navigation-menu"],
      files: [
         {
            path: "examples/navigation-menu-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "pagination-demo",
      type: "registry:example",
      registryDependencies: ["pagination"],
      files: [
         {
            path: "examples/pagination-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "popover-demo",
      type: "registry:example",
      registryDependencies: ["popover"],
      files: [
         {
            path: "examples/popover-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "progress-demo",
      type: "registry:example",
      registryDependencies: ["progress"],
      files: [
         {
            path: "examples/progress-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "radio-group-demo",
      type: "registry:example",
      registryDependencies: ["radio-group"],
      files: [
         {
            path: "examples/radio-group-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "radio-group-form",
      type: "registry:example",
      registryDependencies: ["radio-group", "form"],
      files: [
         {
            path: "examples/radio-group-form.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "resizable-demo",
      type: "registry:example",
      registryDependencies: ["resizable"],
      files: [
         {
            path: "examples/resizable-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "resizable-demo-with-handle",
      type: "registry:example",
      registryDependencies: ["resizable"],
      files: [
         {
            path: "examples/resizable-demo-with-handle.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "resizable-vertical",
      type: "registry:example",
      registryDependencies: ["resizable"],
      files: [
         {
            path: "examples/resizable-vertical.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "resizable-handle",
      type: "registry:example",
      registryDependencies: ["resizable"],
      files: [
         {
            path: "examples/resizable-handle.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "scroll-area-demo",
      type: "registry:example",
      registryDependencies: ["scroll-area"],
      files: [
         {
            path: "examples/scroll-area-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "scroll-area-horizontal-demo",
      type: "registry:example",
      registryDependencies: ["scroll-area"],
      files: [
         {
            path: "examples/scroll-area-horizontal-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "magic-card-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/magic-card-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "neon-gradient-card-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/neon-gradient-card-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "magic-card-gradient",
      type: "registry:example",
      files: [
         {
            path: "examples/magic-card-gradient.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "meteors-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/meteors-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "grid-pattern-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/grid-pattern-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "grid-pattern-linear-gradient",
      type: "registry:example",
      files: [
         {
            path: "examples/grid-pattern-linear-gradient.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "grid-pattern-dashed",
      type: "registry:example",
      files: [
         {
            path: "examples/grid-pattern-dashed.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "dot-pattern-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/dot-pattern-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "dot-pattern-linear-gradient",
      type: "registry:example",
      files: [
         {
            path: "examples/dot-pattern-linear-gradient.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "marquee-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/marquee-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "marquee-demo-vertical",
      type: "registry:example",
      files: [
         {
            path: "examples/marquee-demo-vertical.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "marquee-logos",
      type: "registry:example",
      files: [
         {
            path: "examples/marquee-logos.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "marquee-3d",
      type: "registry:example",
      files: [
         {
            path: "examples/marquee-3d.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "globe-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/globe-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "tweet-card-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/tweet-card-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "tweet-card-images",
      type: "registry:example",
      files: [
         {
            path: "examples/tweet-card-images.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "tweet-card-meta-preview",
      type: "registry:example",
      files: [
         {
            path: "examples/tweet-card-meta-preview.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "shimmer-button-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/shimmer-button-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "hero-video-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/hero-video-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "hero-video-youtube",
      type: "registry:example",
      files: [
         {
            path: "examples/hero-video-youtube.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "bento-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/bento-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "bento-demo-vertical",
      type: "registry:example",
      files: [
         {
            path: "examples/bento-demo-vertical.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "number-ticker-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/number-ticker-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "ripple-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/ripple-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "retro-grid-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/retro-grid-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-list-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-list-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-shiny-text-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-shiny-text-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "particles-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/particles-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-grid-pattern-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-grid-pattern-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "border-beam-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/border-beam-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-beam-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-beam-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-beam-unidirectional",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-beam-unidirectional.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-beam-bidirectional",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-beam-bidirectional.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-beam-multiple-inputs",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-beam-multiple-inputs.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-beam-multiple-outputs",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-beam-multiple-outputs.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-feature-card-1",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-feature-card-1.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-feature-card-2",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-feature-card-2.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-feature-card-3",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-feature-card-3.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-feature-card-4",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-feature-card-4.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-feature-card-5",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-feature-card-5.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-feature-card-6",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-feature-card-6.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-feature-card-7",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-feature-card-7.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-feature-card-8",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-feature-card-8.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-feature-card-9",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-feature-card-9.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-feature-card-10",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-feature-card-10.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "text-reveal-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/text-reveal-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-gradient-text-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-gradient-text-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "orbiting-circles-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/orbiting-circles-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "dock-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/dock-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "dock-demo-2",
      type: "registry:example",
      files: [
         {
            path: "examples/dock-demo-2.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "dock-demo-3",
      type: "registry:example",
      files: [
         {
            path: "examples/dock-demo-3.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "word-rotate-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/word-rotate-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "avatar-circles-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/avatar-circles-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "word-pull-up-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/word-pull-up-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "typing-animation-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/typing-animation-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "wavy-text-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/wavy-text-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "blur-in-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/blur-in-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "separate-away-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/separate-away-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "scroll-based-velocity-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/scroll-based-velocity-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "letter-pullup-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/letter-pullup-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "flip-text-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/flip-text-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "sparkles-text-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/sparkles-text-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "icon-cloud-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/icon-cloud-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "wavy-dot-pattern-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/wavy-dot-pattern-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "gradual-spacing-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/gradual-spacing-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "word-fade-in-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/word-fade-in-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "fade-text-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/fade-text-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "shiny-button-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/shiny-button-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "box-reveal-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/box-reveal-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "gauge-circle-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/gauge-circle-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "shine-border-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/shine-border-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "shine-border-demo-2",
      type: "registry:example",
      files: [
         {
            path: "examples/shine-border-demo-2.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "confetti-hover",
      type: "registry:example",
      files: [
         {
            path: "examples/confetti-hover.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "confetti-basic-cannon",
      type: "registry:example",
      files: [
         {
            path: "examples/confetti-basic-cannon.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "confetti-random-direction",
      type: "registry:example",
      files: [
         {
            path: "examples/confetti-random-direction.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "confetti-fireworks",
      type: "registry:example",
      files: [
         {
            path: "examples/confetti-fireworks.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "confetti-stars",
      type: "registry:example",
      files: [
         {
            path: "examples/confetti-stars.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "confetti-side-cannons",
      type: "registry:example",
      files: [
         {
            path: "examples/confetti-side-cannons.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "confetti-custom-shapes",
      type: "registry:example",
      files: [
         {
            path: "examples/confetti-custom-shapes.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "confetti-emoji",
      type: "registry:example",
      files: [
         {
            path: "examples/confetti-emoji.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-subscribe-button-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-subscribe-button-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "mode-toggle",
      type: "registry:example",
      files: [
         {
            path: "examples/mode-toggle.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "mode-toggle-group",
      type: "registry:example",
      files: [
         {
            path: "examples/mode-toggle.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "cool-mode-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/cool-mode-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "cool-mode-custom",
      type: "registry:example",
      files: [
         {
            path: "examples/cool-mode-custom.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "timeline-demo",
      type: "registry:example",
      registryDependencies: ["timeline"],
      files: [
         {
            path: "examples/timeline-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "timeline-right",
      type: "registry:example",
      registryDependencies: ["timeline"],
      files: [
         {
            path: "examples/timeline-right.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "timeline-alternate",
      type: "registry:example",
      registryDependencies: ["timeline"],
      files: [
         {
            path: "examples/timeline-alternate.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "timeline-labels",
      type: "registry:example",
      registryDependencies: ["timeline"],
      files: [
         {
            path: "examples/timeline-labels.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "star-rating-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/star-rating-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "star-rating-colored",
      type: "registry:example",
      files: [
         {
            path: "examples/star-rating-colored.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "star-rating-icon",
      type: "registry:example",
      files: [
         {
            path: "examples/star-rating-icon.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "stepper-demo",
      type: "registry:example",
      registryDependencies: ["stepper"],
      files: [
         {
            path: "examples/stepper-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "stepper-custom-styles",
      type: "registry:example",
      registryDependencies: ["stepper"],
      files: [
         {
            path: "examples/stepper-custom-styles.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "stepper-orientation",
      type: "registry:example",
      registryDependencies: ["stepper"],
      files: [
         {
            path: "examples/stepper-orientation.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "stepper-description",
      type: "registry:example",
      registryDependencies: ["stepper"],
      files: [
         {
            path: "examples/stepper-description.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "stepper-sizes",
      type: "registry:example",
      registryDependencies: ["stepper"],
      files: [
         {
            path: "examples/stepper-sizes.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "stepper-form",
      type: "registry:example",
      registryDependencies: ["stepper"],
      files: [
         {
            path: "examples/stepper-form.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "stepper-variants",
      type: "registry:example",
      registryDependencies: ["stepper"],
      files: [
         {
            path: "examples/stepper-variants.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "stepper-custom-icons",
      type: "registry:example",
      registryDependencies: ["stepper"],
      files: [
         {
            path: "examples/stepper-custom-icons.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "stepper-footer-inside",
      type: "registry:example",
      registryDependencies: ["stepper"],
      files: [
         {
            path: "examples/stepper-footer-inside.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "stepper-scroll-tracking",
      type: "registry:example",
      registryDependencies: ["stepper"],
      files: [
         {
            path: "examples/stepper-scroll-tracking.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "stepper-clickable-steps",
      type: "registry:example",
      registryDependencies: ["stepper"],
      files: [
         {
            path: "examples/stepper-clickable-steps.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "stepper-optional-steps",
      type: "registry:example",
      registryDependencies: ["stepper"],
      files: [
         {
            path: "examples/stepper-optional-steps.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "stepper-state",
      type: "registry:example",
      registryDependencies: ["stepper"],
      files: [
         {
            path: "examples/stepper-state.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "tour-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/tour-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toc-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/toc-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toc-nested",
      type: "registry:example",
      files: [
         {
            path: "examples/toc-nested.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toc-active",
      type: "registry:example",
      files: [
         {
            path: "examples/toc-active.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "multi-select-basic",
      type: "registry:example",
      registryDependencies: ["multi-select"],
      files: [
         {
            path: "examples/multi-select-basic.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "multi-select-filter",
      type: "registry:example",
      registryDependencies: ["multi-select"],
      files: [
         {
            path: "examples/multi-select-filter.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "multi-select-controllable-search",
      type: "registry:example",
      registryDependencies: ["multi-select"],
      files: [
         {
            path: "examples/multi-select-controllable-search.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "multi-select-input-custom",
      type: "registry:example",
      registryDependencies: ["multi-select"],
      files: [
         {
            path: "examples/multi-select-input-custom.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "multi-select-limit-count",
      type: "registry:example",
      registryDependencies: ["multi-select"],
      files: [
         {
            path: "examples/multi-select-limit-count.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "multi-select-limit-display-length",
      type: "registry:example",
      registryDependencies: ["multi-select"],
      files: [
         {
            path: "examples/multi-select-limit-display-length.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "multi-select-form",
      type: "registry:example",
      registryDependencies: ["multi-select"],
      files: [
         {
            path: "examples/multi-select-form.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "scroll-progress-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/scroll-progress-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "video-modal-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/video-modal-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "scratch-to-reveal-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/scratch-to-reveal-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "confetti-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/confetti-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "blur-fade-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/blur-fade-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "blur-fade-text-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/blur-fade-text-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "file-tree-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/file-tree-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "rainbow-button-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/rainbow-button-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "hero-video-dialog-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/hero-video-dialog-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "hero-video-dialog-demo-top-in-bottom-out",
      type: "registry:example",
      files: [
         {
            path: "examples/hero-video-dialog-demo-top-in-bottom-out.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "flickering-grid-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/flickering-grid-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "flickering-grid-rounded-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/flickering-grid-rounded-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "hyper-text-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/hyper-text-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "safari-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/safari-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "safari-demo-2",
      type: "registry:example",
      files: [
         {
            path: "examples/safari-demo-2.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "iphone-15-pro-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/iphone-15-pro-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "iphone-15-pro-demo-2",
      type: "registry:example",
      files: [
         {
            path: "examples/iphone-15-pro-demo-2.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "animated-circular-progress-bar-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/animated-circular-progress-bar-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toast-demo",
      type: "registry:example",
      registryDependencies: ["toast"],
      files: [
         {
            path: "examples/toast-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toast-destructive",
      type: "registry:example",
      registryDependencies: ["toast"],
      files: [
         {
            path: "examples/toast-destructive.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toast-simple",
      type: "registry:example",
      registryDependencies: ["toast"],
      files: [
         {
            path: "examples/toast-simple.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toast-with-action",
      type: "registry:example",
      registryDependencies: ["toast"],
      files: [
         {
            path: "examples/toast-with-action.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toast-with-title",
      type: "registry:example",
      registryDependencies: ["toast"],
      files: [
         {
            path: "examples/toast-with-title.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "sonner-demo",
      type: "registry:example",
      registryDependencies: ["sonner"],
      files: [
         {
            path: "examples/sonner-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "select-demo",
      type: "registry:example",
      registryDependencies: ["select"],
      files: [
         {
            path: "examples/select-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "select-scrollable",
      type: "registry:example",
      registryDependencies: ["select"],
      files: [
         {
            path: "examples/select-scrollable.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "select-form",
      type: "registry:example",
      registryDependencies: ["select"],
      files: [
         {
            path: "examples/select-form.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "separator-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/separator-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "sheet-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/sheet-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "sheet-side",
      type: "registry:example",
      files: [
         {
            path: "examples/sheet-side.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "skeleton-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/skeleton-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "skeleton-card",
      type: "registry:example",
      files: [
         {
            path: "examples/skeleton-card.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "slider-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/slider-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "slider-disabled",
      type: "registry:example",
      files: [
         {
            path: "examples/slider-disabled.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "slider-inverted",
      type: "registry:example",
      files: [
         {
            path: "examples/slider-inverted.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "slider-vertical",
      type: "registry:example",
      files: [
         {
            path: "examples/slider-vertical.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "slider-range",
      type: "registry:example",
      files: [
         {
            path: "examples/slider-range.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "slider-tick-marks-half",
      type: "registry:example",
      files: [
         {
            path: "examples/slider-tick-marks-half.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "slider-tick-marks-full",
      type: "registry:example",
      files: [
         {
            path: "examples/slider-tick-marks-full.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "slider-format-label",
      type: "registry:example",
      files: [
         {
            path: "examples/slider-format-label.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "slider-format-label-side",
      type: "registry:example",
      files: [
         {
            path: "examples/slider-format-label-side.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "switch-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/switch-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "switch-form",
      type: "registry:example",
      files: [
         {
            path: "examples/switch-form.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "table-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/table-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "tabs-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/tabs-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "textarea-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/textarea-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "textarea-disabled",
      type: "registry:example",
      files: [
         {
            path: "examples/textarea-disabled.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "textarea-with-label",
      type: "registry:example",
      files: [
         {
            path: "examples/textarea-with-label.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "textarea-with-text",
      type: "registry:example",
      files: [
         {
            path: "examples/textarea-with-text.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "textarea-with-button",
      type: "registry:example",
      files: [
         {
            path: "examples/textarea-with-button.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "textarea-form",
      type: "registry:example",
      files: [
         {
            path: "examples/textarea-form.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toggle-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/toggle-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toggle-outline",
      type: "registry:example",
      files: [
         {
            path: "examples/toggle-outline.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toggle-with-text",
      type: "registry:example",
      files: [
         {
            path: "examples/toggle-with-text.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toggle-sm",
      type: "registry:example",
      files: [
         {
            path: "examples/toggle-sm.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toggle-lg",
      type: "registry:example",
      files: [
         {
            path: "examples/toggle-lg.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toggle-disabled",
      type: "registry:example",
      files: [
         {
            path: "examples/toggle-disabled.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toggle-group-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/toggle-group-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toggle-group-outline",
      type: "registry:example",
      files: [
         {
            path: "examples/toggle-group-outline.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toggle-group-single",
      type: "registry:example",
      files: [
         {
            path: "examples/toggle-group-single.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toggle-group-sm",
      type: "registry:example",
      files: [
         {
            path: "examples/toggle-group-sm.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toggle-group-lg",
      type: "registry:example",
      files: [
         {
            path: "examples/toggle-group-lg.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "toggle-group-disabled",
      type: "registry:example",
      files: [
         {
            path: "examples/toggle-group-disabled.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "tooltip-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/tooltip-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "tooltip-secondary",
      type: "registry:example",
      files: [
         {
            path: "examples/tooltip-secondary.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "tooltip-outline",
      type: "registry:example",
      files: [
         {
            path: "examples/tooltip-outline.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "tooltip-with-toggle-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/tooltip-with-toggle-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "grid-layout-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/grid-layout-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "grid-layout-crosshairs-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/grid-layout-crosshairs-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "grid-layout-columns-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/grid-layout-columns-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "grid-layout-variants-demo",
      type: "registry:example",
      registryDependencies: ["grid-layout"],
      files: [
         {
            path: "examples/grid-layout-variants-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "globe-grid-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/globe-grid-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "globe-grid-full-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/globe-grid-full-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "nyx-toc-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/nyx-toc-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "nyx-toc-popover-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/nyx-toc-popover-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "typography-demo",
      type: "registry:example",
      files: [
         {
            path: "examples/typography-demo.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "typography-h1",
      type: "registry:example",
      files: [
         {
            path: "examples/typography-h1.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "typography-h2",
      type: "registry:example",
      files: [
         {
            path: "examples/typography-h2.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "typography-h3",
      type: "registry:example",
      files: [
         {
            path: "examples/typography-h3.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "typography-h4",
      type: "registry:example",
      files: [
         {
            path: "examples/typography-h4.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "typography-blockquote",
      type: "registry:example",
      files: [
         {
            path: "examples/typography-blockquote.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "typography-table",
      type: "registry:example",
      files: [
         {
            path: "examples/typography-table.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "typography-list",
      type: "registry:example",
      files: [
         {
            path: "examples/typography-list.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "typography-inline-code",
      type: "registry:example",
      files: [
         {
            path: "examples/typography-inline-code.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "typography-lead",
      type: "registry:example",
      files: [
         {
            path: "examples/typography-lead.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "typography-large",
      type: "registry:example",
      files: [
         {
            path: "examples/typography-large.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "typography-small",
      type: "registry:example",
      files: [
         {
            path: "examples/typography-small.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "typography-muted",
      type: "registry:example",
      files: [
         {
            path: "examples/typography-muted.tsx",
            type: "registry:example",
         },
      ],
   },
   {
      name: "typography-p",
      type: "registry:example",
      files: [
         {
            path: "examples/typography-p.tsx",
            type: "registry:example",
         },
      ],
   },
]
