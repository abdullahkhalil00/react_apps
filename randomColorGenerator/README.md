# Random Color Generator

A simple React app that generates random background colors with a single button click. The entire screen updates to display the new color.

## Overview

This project shows how to manage dynamic styling in React using state. Each click generates a random 6-digit hexadecimal color and applies it as the page background.

## Features

- Full-screen background color changes
- Random hex color generation on button click
- Smooth color transition with CSS duration
- Centered "Change Color" button with clean UI

## Concepts Practiced

- `useState` for storing the current color
- Event handling with `onClick`
- Inline dynamic styles (`style={{ background: color }}`)
- JavaScript loops and random number generation

## Project Structure

```text
randomColorGenerator/
├── src/
│   ├── App.jsx          # Color generator logic and UI
│   └── main.jsx
└── package.json
```

## Getting Started

```bash
cd randomColorGenerator
npm install
npm run dev
```

## Tech Stack

- React 19
- Vite
- Tailwind CSS
