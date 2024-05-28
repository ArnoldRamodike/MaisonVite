/** @type {import('tailwindcss').Config} */
import styled from 'styled-components/native';
import { css } from 'styled-components';

const StyledView = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    // Your styles here
  `}
`;

module.exports = {
  content: [
      "./App/Screens/**/*.{js,ts,jsx,tsx,mdx}", 
      "./App/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}

