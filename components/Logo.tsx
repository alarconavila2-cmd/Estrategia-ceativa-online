
import React from 'react';

// This SVG is based on the provided logo image.
// It uses `currentColor` for the lightbulb part to be easily styled via Tailwind's text color classes.
// The brain/filament part is hardcoded with the brand's orange color.
export const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M32.5 56.5V59.5M35.5 62.5H29.5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M38.5 59.5H26.5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M41 40.75C41 33.98 37.38 28.25 32 28.25C26.62 28.25 23 33.98 23 40.75C23 46.25 26.62 50.75 30.25 52.63V56.5H34.75V52.63C38.38 50.75 41 46.25 41 40.75Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.5 52.5V46.5"
      stroke="#F97316"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M35.5 52.5V48"
      stroke="#F97316"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32.14 33.25C30.64 33.25 29.41 34.15 29.05 35.5C28.51 37.48 29.53 39.52 31.15 40.3C32.77 41.08 34.75 40.42 35.65 38.92C36.55 37.42 36.13 35.44 34.72 34.33C33.88 33.64 33.01 33.25 32.14 33.25Z"
      stroke="#F97316"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32.05 44.5C33.55 44.5 34.78 43.6 35.14 42.25C35.68 40.27 34.66 38.23 33.04 37.45C31.42 36.67 29.44 37.33 28.54 38.83"
      stroke="#F97316"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29 35.5C27.9 36.17 27.25 37.52 27.73 38.65"
      stroke="#F97316"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M35.1 38.9C36.2 38.23 36.85 36.88 36.37 35.75"
      stroke="#F97316"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 28.25V24.25M32 20.25V18.25"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M41 29.25L43 27.25"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M23 29.25L21 27.25"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M47.5 40.75H49.5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path d="M14.5 40.75H16.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
  </svg>
);
