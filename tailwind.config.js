/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    // colors:{
    //   green:{
    //     one:'#E7F3EF',
    //   two:'#DDEEE9',
    //   three:'#C6E2D9',
    //   },
    //   gray:{
    //     one:'#E5E7EB',
    //     two:'#D1D5DB',
    //   },
    // },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

