const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: ['class'],
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
            rubik: ['Rubik', 'sans-serif'],
            urbanist: ['Urbanist', 'sans-serif'],
         },
         fontWeight: {
            regular: '450',
            semibold: '600',
            bold: '700',
         },
         fontSize: {
            xs: '0.75rem', // 12px
            sm: '0.875rem', // 14px
            base: '1rem', // 16px
            lg: '1.125rem', // 18px
            xl: '1.375rem', // 22px
            xxl: '1.75rem', // 28px
            xxl2: '2rem', // 32px
            xxl3: '4rem', // 64px
         },
         colors: {
            // Background Colors
            'primary-dark': 'hsl(222, 25%, 7.8%)',
            'primary-lighter': 'hsl(222, 25%, 10.8%)',
            'primary-badge': 'hsl(222, 25%, 13.8%)',

            'blue-50': 'hsl(207, 60%, 97%)',
            'blue-100': 'hsl(203, 56%, 94%)',
            'blue-200': 'hsl(200, 58%, 86%)',
            'blue-300': 'hsl(200, 59%, 80%)',
            'blue-400': 'hsl(199, 58%, 60%)',
            'blue-500': 'hsl(199, 55%, 48%)',
            'blue-600': 'hsl(201, 61%, 39%)',
            'blue-700': 'hsl(201, 60%, 32%)',
            'blue-800': 'hsl(201, 56%, 27%)',
            'blue-900': 'hsl(202, 49%, 24%)',
            'blue-950': 'hsl(203, 51%, 16%)',

            'mindnight-blue-50': 'hsl(208, 100%, 97%)',
            'mindnight-blue-100': 'hsl(209, 100%, 93%)',
            'mindnight-blue-200': 'hsl(206, 100%, 85%)',
            'mindnight-blue-300': 'hsl(204, 100%, 71%)',
            'mindnight-blue-400': 'hsl(204, 100%, 56%)',
            'mindnight-blue-500': 'hsl(207, 100%, 50%)',
            'mindnight-blue-600': 'hsl(211, 100%, 44%)',
            'mindnight-blue-700': 'hsl(212, 100%, 35%)',
            'mindnight-blue-800': 'hsl(210, 100%, 29%)',
            'mindnight-blue-900': 'hsl(211, 100%, 20%)',
            'mindnight-blue-950': 'hsl(213, 100%, 16%)',

            'cotton-candy-50': 'hsl(342, 87%, 97%)',
            'cotton-candy-100': 'hsl(338, 93%, 95%)',
            'cotton-candy-200': 'hsl(340, 96%, 90%)',
            'cotton-candy-300': 'hsl(341, 100%, 85%)',
            'cotton-candy-400': 'hsl(342, 99%, 70%)',
            'cotton-candy-500': 'hsl(343, 93%, 60%)',
            'cotton-candy-600': 'hsl(346, 82%, 51%)',
            'cotton-candy-700': 'hsl(348, 89%, 42%)',
            'cotton-candy-800': 'hsl(349, 86%, 35%)',
            'cotton-candy-900': 'hsl(349, 79%, 30%)',
            'cotton-candy-950': 'hsl(349, 95%, 17%)',

            'pig-pink': {
               50: 'hsl(343, 100%, 97%)',
               100: 'hsl(343, 100%, 93%)',
               200: 'hsl(340, 96%, 90%)',
               300: 'hsl(340, 96%, 82%)',
               400: 'hsl(339, 95%, 71%)',
               500: 'hsl(337, 89%, 60%)',
               600: 'hsl(334, 77%, 50%)',
               700: 'hsl(333, 83%, 41%)',
               800: 'hsl(331, 80%, 35%)',
               900: 'hsl(329, 75%, 30%)',
               950: 'hsl(330, 88%, 16%)',
            },

            charade: {
               50: 'hsl(240, 20%, 97%)',
               100: 'hsl(240, 19%, 94%)',
               200: 'hsl(240, 15%, 86%)',
               300: 'hsl(237, 16%, 74%)',
               400: 'hsl(234, 16%, 60%)',
               500: 'hsl(235, 15%, 48%)',
               600: 'hsl(236, 16%, 39%)',
               700: 'hsl(238, 16%, 32%)',
               800: 'hsl(237, 16%, 27%)',
               900: 'hsl(240, 13%, 24%)',
               950: 'hsl(240, 13%, 19%)',
            },

            'buttermilk-50': 'hsl(49, 92%, 95%)',
            'buttermilk-100': 'hsl(50, 100%, 85%)',
            'buttermilk-200': 'hsl(48, 100%, 77%)',
            'buttermilk-300': 'hsl(46, 100%, 63%)',
            'buttermilk-400': 'hsl(43, 99%, 53%)',
            'buttermilk-500': 'hsl(40, 97%, 47%)',
            'buttermilk-600': 'hsl(36, 99%, 40%)',
            'buttermilk-700': 'hsl(30, 95%, 33%)',
            'buttermilk-800': 'hsl(27, 84%, 29%)',
            'buttermilk-900': 'hsl(24, 76%, 26%)',
            'buttermilk-950': 'hsl(21, 86%, 14%)',
            // Text Colors
            'white-50': 'hsl(0, 0%, 100%)',
            'white-100': 'hsl(0, 0%, 94%)',
            'white-200': 'hsl(0, 0%, 86%)',
            'white-300': 'hsl(0, 0%, 74%)',
            'white-400': 'hsl(0, 0%, 60%)',
            'white-500': 'hsl(0, 0%, 49%)',
            'white-600': 'hsl(0, 0%, 40%)',
            'white-700': 'hsl(0, 0%, 32%)',
            'white-800': 'hsl(0, 0%, 27%)',
            'white-900': 'hsl(0, 0%, 24%)',
            'white-950': 'hsl(0, 0%, 16%)',
            // Accents Colors
            'accent-50': `hsl(var(--accent-hue), 75%, 97%)`,
            'accent-100': `hsl(var(--accent-hue), 73%, 93%)`,
            'accent-200': `hsl(var(--accent-hue), 75%, 87%)`,
            'accent-300': `hsl(var(--accent-hue), 76%, 78%)`,
            'accent-400': `hsl(var(--accent-hue), 74%, 68%)`,
            'accent-500': `hsl(var(--accent-hue), 72%, 60%)`,
            'accent-600': `hsl(var(--accent-hue), 66%, 54%)`,
            'accent-700': `hsl(var(--accent-hue), 60%, 48%)`,
            'accent-800': `hsl(var(--accent-hue), 56%, 40%)`,
            'accent-900': `hsl(var(--accent-hue), 51%, 33%)`,
            'accent-950': `hsl(var(--accent-hue), 46%, 21%)`,
            // Danger Colors
            'danger-50': 'hsl(0, 86%, 97%)',
            'danger-100': 'hsl(0, 100%, 94%)',
            'danger-200': 'hsl(0, 100%, 89%)',
            'danger-300': 'hsl(0, 98%, 82%)',
            'danger-400': 'hsl(0, 95%, 71%)',
            'danger-500': 'hsl(0, 88%, 60%)',
            'danger-600': 'hsl(0, 75%, 49%)',
            'danger-700': 'hsl(0, 77%, 42%)',
            'danger-800': 'hsl(0, 73%, 35%)',
            'danger-900': 'hsl(0, 65%, 31%)',
            'danger-950': 'hsl(0, 77%, 15%)',
            // Warning Colors
            'warning-50': 'hsl(42, 100%, 96%)',
            'warning-100': 'hsl(43, 100%, 89%)',
            'warning-200': 'hsl(43, 100%, 71%)',
            'warning-300': 'hsl(41, 100%, 65%)',
            'warning-400': 'hsl(38, 100%, 56%)',
            'warning-500': 'hsl(33, 95%, 50%)',
            'warning-600': 'hsl(27, 98%, 44%)',
            'warning-700': 'hsl(21, 94%, 37%)',
            'warning-800': 'hsl(18, 85%, 31%)',
            'warning-900': 'hsl(17, 81%, 26%)',
            'warning-950': 'hsl(16, 94%, 14%)',
            // Success Colors
            'success-50': 'hsl(140, 53%, 97%)',
            'success-100': 'hsl(139, 58%, 93%)',
            'success-200': 'hsl(138, 53%, 85%)',
            'success-300': 'hsl(139, 52%, 73%)',
            'success-400': 'hsl(139, 47%, 58%)',
            'success-500': 'hsl(139, 47%, 44%)',
            'success-600': 'hsl(140, 51%, 36%)',
            'success-700': 'hsl(139, 48%, 29%)',
            'success-800': 'hsl(139, 43%, 24%)',
            'success-900': 'hsl(141, 42%, 20%)',
            'success-950': 'hsl(142, 53%, 10%)',
            // PostStats Colors
            'color-star': 'hsl(43, 100%, 71%)',
            'color-star-subtle': 'hsla(43, 100%, 71%, 0.12)',
            'color-comment': 'hsl(219, 76%, 68%)',
            'color-comment-subtle': 'hsla(219, 76%, 68%, 0.12)',
            'color-repost': 'hsl(139, 47%, 44%)',
            'color-repost-subtle': 'hsla(139, 47%, 44%, 0.12)',
         },
         keyframes: {
            'accordion-down': {
               from: { height: 0 },
               to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
               from: {
                  height: 'var(--radix-accordion-content-height)',
               },
               to: { height: 0 },
            },
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
         },
         minHeight: {
            'min-h-device': '100dvh',
         },
         height: {
            device: '100dvh',
         },
      },
   },
   plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
      require('tailwindcss-animate'),
      nextui({
         layout: {}, // common layout options
         themes: {
            light: {
               colors: {},
               layout: {}, // light theme layout options
               // ...
            },
            dark: {
               colors: {},
               layout: {}, // dark theme layout options
               // ...
            },
            // starOwl: {
            // 	colors: {
            // 		background: '#0D001A',
            // 		foreground: '#ffffff',
            // 		primary: {
            // 			50: `hsl(var(--accent-hue), 75%, 97%)`,
            // 			100: `hsl(var(--accent-hue), 73%, 93%)`,
            // 			200: `hsl(var(--accent-hue), 75%, 87%)`,
            // 			300: `hsl(var(--accent-hue), 76%, 78%)`,
            // 			400: `hsl(var(--accent-hue), 74%, 68%)`,
            // 			500: `hsl(var(--accent-hue), 72%, 60%)`,
            // 			600: `hsl(var(--accent-hue), 66%, 54%)`,
            // 			700: `hsl(var(--accent-hue), 60%, 48%)`,
            // 			800: `hsl(var(--accent-hue), 56%, 40%)`,
            // 			900: `hsl(var(--accent-hue), 51%, 33%)`,
            // 			DEFAULT: `hsl(var(--accent-hue), 72%, 60%)`,
            // 			foreground: `hsl(var(--accent-hue), 72%, 60%)`,
            // 		},
            // 	},
            // },
         },
      }),
   ],
}
