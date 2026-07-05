# Tree View

A hierarchical accordion-style tree view that displays nested questions and answers about React concepts. Parent items expand to reveal answers and optional child items.

## Overview

This project builds a tree-structured UI where top-level nodes can contain nested children. Clicking a parent expands its content, and child nodes can be expanded independently to show deeper-level answers.

## Features

- Expandable parent and child nodes
- Nested data structure with multiple levels
- Toggle open/close on click
- React learning Q&A content with sub-questions
- Clean card-based layout

## Concepts Practiced

- `useState` for parent and child selection state
- Nested data rendering
- Conditional rendering for expanded/collapsed nodes
- Rendering lists with `map()` at multiple levels
- Component structure for hierarchical UI

## Project Structure

```text
treeView/
├── src/
│   ├── App.jsx
│   ├── component/
│   │   ├── TreeView.jsx   # Tree view component
│   │   └── data.jsx       # Nested Q&A data
│   └── main.jsx
└── package.json
```

## Getting Started

```bash
cd treeView
npm install
npm run dev
```

## Tech Stack

- React 19
- Vite
- Tailwind CSS
