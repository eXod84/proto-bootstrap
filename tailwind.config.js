/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Custom colors based on your design tokens
      colors: {
        // Gray scale
        "gray-white": "#ffffff",
        "gray-50": "#f4f5f9",
        "gray-100": "#e0e1e9",
        "gray-200": "#c4c7cf",
        "gray-300": "#a9abb6",
        "gray-400": "#8a8e9b",
        "gray-500": "#6c6e79",
        "gray-600": "#484a54",
        "gray-700": "#2b2e38",
        "gray-800": "#191b23",

        // Blue scale
        "blue-50": "#e9f7ff",
        "blue-100": "#c4e5fe",
        "blue-200": "#8ecdff",
        "blue-300": "#2bb3ff",
        "blue-400": "#008ff8",
        "blue-500": "#006dca",
        "blue-600": "#044792",
        "blue-700": "#002b5f",
        "blue-800": "#001b3d",

        // Green scale
        "green-50": "#dbfee8",
        "green-100": "#9ef2c9",
        "green-200": "#59ddaa",
        "green-300": "#00c192",
        "green-400": "#009f81",
        "green-500": "#007c65",
        "green-600": "#055345",
        "green-700": "#00342d",
        "green-800": "#00201e",

        // Red scale
        "red-50": "#fff0f7",
        "red-100": "#ffd7df",
        "red-200": "#ffaeb5",
        "red-300": "#ff8786",
        "red-400": "#ff4953",
        "red-500": "#d1002f",
        "red-600": "#8e0016",
        "red-700": "#58000a",
        "red-800": "#410101",

        // Orange scale
        "orange-50": "#fff3d9",
        "orange-100": "#ffdca2",
        "orange-200": "#ffb26e",
        "orange-300": "#ff8c43",
        "orange-400": "#ff642d",
        "orange-500": "#c33909",
        "orange-600": "#8b1500",
        "orange-700": "#551200",
        "orange-800": "#351000",

        // Violet scale
        "violet-50": "#f9f2ff",
        "violet-100": "#edd9ff",
        "violet-200": "#dcb8ff",
        "violet-300": "#c695ff",
        "violet-400": "#ab6cfe",
        "violet-500": "#8649e1",
        "violet-600": "#5925ab",
        "violet-700": "#421983",
        "violet-800": "#220358",

        // Violet dusty scale
        "violet-dusty-50": "#f5f4ff",
        "violet-dusty-100": "#e2ddff",
        "violet-dusty-200": "#bcb1e9",
        "violet-dusty-300": "#a79cd6",
        "violet-dusty-400": "#9083c5",
        "violet-dusty-500": "#6d619f",
        "violet-dusty-600": "#4d407e",
        "violet-dusty-700": "#382e5e",
        "violet-dusty-800": "#1d113e",

        // Semantic colors
        "bg-primary": "var(--bg-primary-neutral, #ffffff)",
        "bg-secondary": "var(--bg-secondary-neutral, #f4f5f9)",
        "text-primary": "var(--text-primary, #191b23)",
        "text-secondary": "var(--text-secondary, #6c6e79)",
        "border-primary": "var(--border-primary, #c4c7cf)",
        "border-secondary": "var(--border-secondary, #e0e1e9)",
      },

      // Custom spacing based on your design tokens
      spacing: {
        "0.5x": "2px", // spacing-05x
        "1x": "4px", // spacing-1x
        "2x": "8px", // spacing-2x
        "3x": "12px", // spacing-3x
        "4x": "16px", // spacing-4x
        "5x": "20px", // spacing-5x
        "6x": "24px", // spacing-6x
        "8x": "32px", // spacing-8x
        "10x": "40px", // spacing-10x
        "14x": "56px", // spacing-14x
        "20x": "80px", // spacing-20x
      },

      // Custom border radius
      borderRadius: {
        "extra-small": "2px",
        small: "4px",
        medium: "6px",
        large: "12px",
        "extra-large": "24px",
      },

      // Custom font sizes
      fontSize: {
        100: "12px",
        200: "14px",
        300: "16px",
        400: "20px",
        500: "24px",
        600: "32px",
        700: "36px",
        800: "48px",
      },

      // Custom line heights
      lineHeight: {
        100: "133%",
        200: "142%",
        300: "150%",
        400: "120%",
        500: "117%",
        600: "125%",
        700: "110%",
        800: "117%",
      },

      // Custom font weights
      fontWeight: {
        regular: "400",
        medium: "500",
        "semi-bold": "600",
        bold: "700",
      },

      // Custom box shadows
      boxShadow: {
        card: "0 0 1px rgba(25, 27, 35, 0.16), 0 1px 2px rgba(25, 27, 35, 0.12)",
        "card-hover": "3px 3px 30px rgba(25, 27, 35, 0.15)",
        modal: "0 3px 8px rgba(25, 27, 35, 0.2)",
        popper: "0 1px 12px rgba(25, 27, 35, 0.15)",
        focus: "0 0 0 3px rgba(0, 143, 248, 0.5)",
        "focus-error": "0 0 0 3px rgba(255, 73, 83, 0.5)",
        "focus-success": "0 0 0 3px rgba(0, 159, 129, 0.5)",
      },

      // Custom z-index
      zIndex: {
        overlay: "500",
        popper: "700",
        dropdown: "750",
        tooltip: "800",
        modal: "900",
        notification: "999",
      },

      // Custom opacity
      opacity: {
        disabled: "0.3",
        secondary: "0.8",
        subtle: "0.5",
      },
    },
  },
  plugins: [],
};
