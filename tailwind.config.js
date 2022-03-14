module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        body: 'EEEEEE',
        header: '#E5E5E5',
        btn: '#1089FF',
        bg: '#23374D',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
