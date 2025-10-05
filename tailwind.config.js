const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './data/*.{js,ts}',
    ],
    safelist: [
        // Text colors
        'text-gray-900', 'text-gray-700', 'text-gray-300', 'text-white',

        // Font weights & sizes
        'font-bold', 'font-semibold', 'font-main', 'text-2xl', 'text-xl', 'text-lg',

        // Spacing utilities
        'space-y-4', 'space-y-6', 'space-y-8', 'mb-2', 'mb-3', 'mb-4', 'mb-6',

        // Backgrounds & gradients
        'bg-gradient-to-r', 
        'from-blue-50', 'to-purple-50', 
        'from-blue-900', 'to-purple-900',
        'from-purple-50', 'to-pink-50',
        'from-purple-900', 'to-pink-900',

        // Borders & rounding
        'border', 'border-blue-200', 'border-blue-800', 
        'border-purple-200', 'border-purple-800', 
        'rounded-xl',

        // Layout
        'p-6',

        // Lists
        'list-disc', 'list-inside',

        // Dark mode variants
        'dark:text-white', 'dark:text-gray-300', 
        'dark:border-blue-800', 'dark:border-purple-800',
        'dark:from-blue-900', 'dark:to-purple-900',
        'dark:from-purple-900', 'dark:to-pink-900',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: { 
                main: ['Poppins', ...defaultTheme.fontFamily.sans],
                lora: ['Lora', ...defaultTheme.fontFamily.serif]
            },

            colors: {
                primary: "#2b7efe",
                'primary-dark': "#2CC295",
                'dark-theme': "#1B1F22",
                'dark-gray': "#313538"
            },
            gridTemplateColumns: {
                'auto-1': ' repeat(1, minmax(0, auto))',
                'auto-2': ' repeat(2, minmax(0, auto))',
              }
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            cursor: ['disabled'],
          
        },

    },
    plugins: [],
}