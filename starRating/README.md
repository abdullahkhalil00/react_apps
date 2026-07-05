# Star Rating

An interactive star rating component where users can click or hover over stars to give a rating from 1 to 5.

## Overview

This project builds a reusable star rating UI with visual feedback on hover and click. Stars highlight in yellow when selected or hovered, and the current rating is displayed below.

## Features

- Click to set a permanent rating
- Hover preview before selecting
- Configurable number of stars (default: 5)
- Live rating display (e.g. "Rating: 3 / 5")
- Scale animation on hover using Tailwind CSS

## Concepts Practiced

- `useState` for hover and rating state
- Mouse events (`onClick`, `onMouseEnter`, `onMouseLeave`)
- Conditional class names for active/inactive stars
- Rendering dynamic lists with `map()`
- Third-party icons (`react-icons`)

## Project Structure

```text
starRating/
├── src/
│   ├── App.jsx
│   ├── component/
│   │   └── index.jsx    # Stars component
│   └── main.jsx
└── package.json
```

## Getting Started

```bash
cd starRating
npm install
npm run dev
```

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- react-icons
