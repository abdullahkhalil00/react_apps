# Accordion

A React accordion component that displays expandable FAQ-style questions and answers. Users can click a question to reveal or hide its answer.

## Overview

This project demonstrates how to build an interactive accordion UI using React state. It supports both single-selection mode (only one panel open at a time) and multi-selection mode (multiple panels can be open simultaneously).

## Features

- Expand and collapse FAQ items on click
- Toggle between single and multi-selection modes
- Smooth hover and transition effects
- Responsive layout with Tailwind CSS
- Preloaded React learning questions and answers

## Concepts Practiced

- React components and JSX
- `useState` for managing open/closed state
- Conditional rendering
- Rendering lists with `map()`
- Event handling (`onClick`)

## Project Structure

```text
accordion/
├── src/
│   ├── App.jsx
│   ├── componenet/
│   │   ├── index.jsx    # Accordion component
│   │   └── data.jsx     # FAQ data
│   └── main.jsx
└── package.json
```

## Getting Started

```bash
cd accordion
npm install
npm run dev
```

## Tech Stack

- React 19
- Vite
- Tailwind CSS
