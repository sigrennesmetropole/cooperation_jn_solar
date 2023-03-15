/* eslint-env node */
module.exports = {
  content: ['index.html', './src/**/*.{html,js,ts,vue}'],
  safelist: [
    'bg-indigo-100',
    'bg-pink-100',
    'bg-emerald-100',
    'bg-purple-100',

    'bg-indigo-300',
    'bg-pink-300',
    'bg-emerald-300',
    'bg-purple-300',

    'bg-indigo-600',
    'bg-pink-600',
    'bg-emerald-600',
    'bg-purple-600',

    'bg-lime-500',
    'bg-sky-600',
    { pattern: /bg-./ },
    { pattern: /border-./ },

    'border-indigo-50',
    'border-pink-50',
    'border-emerald-50',
    'border-purple-50',

    'fill-indigo-600',
    'fill-pink-600',
    'fill-emerald-600',
    'fill-purple-600',

    'stroke-indigo-50',
    'stroke-pink-50',
    'stroke-emerald-50',
    'stroke-purple-50',

    'stroke-indigo-600',
    'stroke-pink-600',
    'stroke-emerald-600',
    'stroke-purple-600',

    'text-indigo-600',
    'text-pink-600',
    'text-emerald-600',
    'text-purple-600',

    // Link colors
    'before:bg-neutral-900',
    'stroke-neutral-900',

    'before:bg-red-600',
    'stroke-red-600',
    'text-neutral-500',
    'before:bg-neutral-500',
    'text-neutral-900',
    'before:bg-neutral-900',
    'border-red-600',

    'before:border-indigo-500',
    'before:border-indigo-600',
    'before:border-pink-500',
    'before:border-pink-600',
    'before:border-emerald-500',
    'before:border-emerald-600',
    'before:border-purple-500',
    'before:border-purple-600',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans'],
      },
      colors: {
        'gray-dark': '#5E5E5E',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),
  ],
}
