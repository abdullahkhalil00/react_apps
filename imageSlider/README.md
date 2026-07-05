# Image Slider

A full-screen image carousel that lets users browse through a collection of landscape photos using previous/next buttons or dot indicators.

## Overview

This project implements a classic image slider with manual navigation. Images are displayed as full-screen backgrounds, and users can cycle through them in both directions with wrap-around at the start and end.

## Features

- Full-screen background image display
- Previous and next navigation buttons
- Dot indicators for direct image selection
- Smooth transitions between slides
- Wrap-around navigation (last → first, first → last)

## Concepts Practiced

- `useState` for tracking the current image index
- Conditional logic for circular navigation
- Dynamic inline styles for background images
- Rendering lists with `map()` for dot indicators
- Event handling for multiple interaction types

## Project Structure

```text
imageSlider/
├── src/
│   ├── App.jsx
│   ├── componenet/
│   │   ├── imageSlide.jsx   # Slider component
│   │   └── Data.jsx         # Image URLs
│   └── main.jsx
└── package.json
```

## Getting Started

```bash
cd imageSlider
npm install
npm run dev
```

## Tech Stack

- React 19
- Vite
- Tailwind CSS
