const Data = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces using reusable components.",
    children: [
      {
        id: 11,
        question: "Who created React?",
        answer: "React was created by Facebook, now known as Meta.",
      },
      {
        id: 12,
        question: "Is React a framework?",
        answer: "No. React is a JavaScript library, not a full framework.",
      },
    ],
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that lets you write HTML-like code inside React components.",
    children: [
      {
        id: 21,
        question: "Is JSX required?",
        answer:
          "No. React can be written without JSX, but JSX makes components easier to read and write.",
      },
    ],
  },
  {
    id: 3,
    question: "What is a Component?",
    answer:
      "A component is a reusable piece of UI that can accept props and manage its own state.",
    children: [
      {
        id: 31,
        question: "What are Functional Components?",
        answer:
          "Functional components are JavaScript functions that return JSX.",
      },
      {
        id: 32,
        question: "What are Class Components?",
        answer:
          "Class components are the older way of creating React components using ES6 classes.",
      },
    ],
  },
  {
    id: 4,
    question: "What is useState?",
    answer:
      "useState is a React Hook that lets functional components store and update state.",
  },
  {
    id: 5,
    question: "What is useEffect?",
    answer:
      "useEffect is a React Hook used to perform side effects such as fetching data, setting timers, or subscribing to events.",
    children: [
      {
        id: 51,
        question: "When does useEffect run?",
        answer:
          "It runs after the component renders and whenever its dependencies change.",
      },
      {
        id: 52,
        question: "Can useEffect fetch data?",
        answer:
          "Yes. It is commonly used to fetch data from APIs after the component mounts.",
      },
    ],
  },
  {
    id: 6,
    question: "What are Props?",
    answer:
      "Props are read-only values passed from a parent component to a child component.",
  },
  {
    id: 7,
    question: "What is Virtual DOM?",
    answer:
      "The Virtual DOM is a lightweight copy of the real DOM that React uses to efficiently update the UI.",
  },
  {
    id: 8,
    question: "What is Conditional Rendering?",
    answer:
      "Conditional rendering allows you to display different UI elements based on specific conditions.",
  },
  {
    id: 9,
    question: "What is State?",
    answer:
      "State is data managed by a component that can change over time and trigger re-renders.",
  },
  {
    id: 10,
    question: "Why use React?",
    answer:
      "React makes it easier to build fast, reusable, and maintainable user interfaces for web applications.",
  },
];

export default Data;