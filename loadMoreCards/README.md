# Load More Cards

A product listing app that fetches items from an API and loads more products each time the user clicks the "Load More" button.

## Overview

This project demonstrates pagination-style data loading using the [DummyJSON Products API](https://dummyjson.com/docs/products). Products are displayed in a responsive card grid, and additional batches of 20 items are appended on each load.

## Features

- Fetches products from DummyJSON API
- Responsive product card grid
- "Load More" button for pagination
- Product thumbnails and titles
- Hover effects on cards

## Concepts Practiced

- `useState` for products and page count
- `useEffect` for fetching data on mount and page change
- Async/await with the Fetch API
- Appending new data to existing state
- Rendering dynamic lists with `map()`

## Project Structure

```text
loadMoreCards/
├── src/
│   ├── App.jsx
│   ├── component/
│   │   └── load.jsx     # LoadButton component
│   └── main.jsx
└── package.json
```

## Getting Started

```bash
cd loadMoreCards
npm install
npm run dev
```

## API Used

- **DummyJSON Products API** — `https://dummyjson.com/products?limit=20&skip={offset}`

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Fetch API
