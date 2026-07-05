# Weather Detail

A weather lookup app that fetches and displays current weather details for any city using the OpenWeatherMap API.

## Overview

This project lets users search for a city and view real-time weather information including temperature, conditions, humidity, wind speed, visibility, and sunrise/sunset times.

## Features

- Search weather by city name
- Current temperature and weather description
- Feels-like temperature, humidity, wind, and visibility
- Sunrise and sunset times
- Gradient background with card-based layout
- Defaults to Lahore on initial load

## Concepts Practiced

- `useState` for city input and weather data
- `useEffect` for fetching weather on mount
- Async/await with the Fetch API
- Conditional rendering with optional chaining (`?.`)
- Date formatting for sunrise/sunset

## Project Structure

```text
weatherDetail/
├── src/
│   ├── App.jsx
│   ├── component/
│   │   └── weather.jsx    # Weather component
│   └── main.jsx
└── package.json
```

## Getting Started

```bash
cd weatherDetail
npm install
npm run dev
```

## API Used

- **OpenWeatherMap API** — `https://api.openweathermap.org/data/2.5/weather`

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Fetch API
