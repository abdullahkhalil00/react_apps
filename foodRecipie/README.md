# Food Recipe (Recipe Finder)

A recipe search app that lets users find meals by name, browse results in a card grid, and view full recipe details including ingredients and cooking time.

## Overview

This project connects to the Forkify API to search for recipes and display detailed information. Users can search by keyword, browse matching recipes, and click "View Recipe" to see ingredients, servings, cooking time, and more.

## Features

- Search recipes by name
- Responsive recipe card grid with images
- Detailed recipe view with ingredients list
- Publisher, servings, and cooking time info
- Default search for "pizza" on load

## Concepts Practiced

- `useState` for search input, results, and selected recipe
- `useEffect` for initial data fetch
- Async/await with the Fetch API
- Two-step API calls (search list + detail by ID)
- Conditional rendering for selected recipe details
- Dynamic list rendering for ingredients

## Project Structure

```text
foodRecipie/
├── src/
│   ├── App.jsx
│   ├── component/
│   │   └── fooRecipie.jsx   # Recipe finder component
│   └── main.jsx
└── package.json
```

## Getting Started

```bash
cd foodRecipie
npm install
npm run dev
```

## API Used

- **Forkify API** — `https://forkify-api.jonas.io/api/v2/recipes`

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Fetch API
