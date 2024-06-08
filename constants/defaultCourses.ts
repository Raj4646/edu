import { Course } from "../types/course";

export const defaultCourses: Course[] = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "In Progress",
    thumbnail: "/thumbnail.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      {
        week: 3,
        topic: "Styling in React Native",
        content: "Applying styles and themes to your React Native app.",
      },
      {
        week: 4,
        topic: "Navigation",
        content: "Implementing navigation using React Navigation.",
      },
      {
        week: 5,
        topic: "State Management",
        content: "Managing state with Redux.",
      },
      {
        week: 6,
        topic: "Working with APIs",
        content: "Fetching data from APIs and displaying it in your app.",
      },
      {
        week: 7,
        topic: "Testing in React Native",
        content: "Writing and running tests for your React Native app.",
      },
      {
        week: 8,
        topic: "Deployment",
        content: "Deploying your app to the App Store and Google Play.",
      },
    ],
    students: [
      { id: 101, name: "Alice Johnson", email: "alice@example.com" },
      { id: 102, name: "Bob Smith", email: "bob@example.com" },
    ],
  },
  {
    id: 2,
    name: "Advanced React",
    instructor: "Jane Doe",
    description: "Dive deeper into React and learn advanced concepts.",
    enrollmentStatus: "Open",
    thumbnail: "/thumbnail.png",
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic React knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Hooks in Depth",
        content: "Understanding and using React Hooks effectively.",
      },
      {
        week: 2,
        topic: "Context API",
        content: "Managing state with the Context API.",
      },
      {
        week: 3,
        topic: "Performance Optimization",
        content: "Optimizing the performance of your React applications.",
      },
      {
        week: 4,
        topic: "Server-Side Rendering",
        content: "Implementing server-side rendering with Next.js.",
      },
      {
        week: 5,
        topic: "Advanced State Management",
        content: "Using Redux and MobX for complex state management.",
      },
      {
        week: 6,
        topic: "Testing and Debugging",
        content:
          "Advanced techniques for testing and debugging React applications.",
      },
    ],
    students: [
      { id: 103, name: "Charlie Brown", email: "charlie@example.com" },
      { id: 104, name: "Dana White", email: "dana@example.com" },
    ],
  },
  {
    id: 3,
    name: "Full-Stack Web Development",
    instructor: "Mark Twain",
    description:
      "Become a full-stack developer by learning both front-end and back-end technologies.",
    enrollmentStatus: "Open",
    thumbnail: "/thumbnail.png",
    duration: "12 weeks",
    schedule: "Mondays, Wednesdays, and Fridays, 6:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic HTML, CSS, and JavaScript"],
    syllabus: [
      {
        week: 1,
        topic: "HTML & CSS Basics",
        content: "Introduction to HTML and CSS for building web pages.",
      },
      {
        week: 2,
        topic: "JavaScript Essentials",
        content: "Learn the basics of JavaScript programming.",
      },
      {
        week: 3,
        topic: "Advanced JavaScript",
        content: "Dive deeper into JavaScript and learn advanced concepts.",
      },
      {
        week: 4,
        topic: "Front-End Frameworks",
        content:
          "Introduction to popular front-end frameworks like React and Angular.",
      },
      {
        week: 5,
        topic: "Back-End Development",
        content: "Learn about back-end development with Node.js and Express.",
      },
      {
        week: 6,
        topic: "Databases",
        content: "Introduction to databases and working with MongoDB.",
      },
      {
        week: 7,
        topic: "Authentication",
        content:
          "Implementing authentication and authorization in your web apps.",
      },
      {
        week: 8,
        topic: "RESTful APIs",
        content: "Building and consuming RESTful APIs.",
      },
      {
        week: 9,
        topic: "GraphQL",
        content: "Introduction to GraphQL and how to use it in your projects.",
      },
      {
        week: 10,
        topic: "Testing",
        content: "Testing your full-stack applications.",
      },
      {
        week: 11,
        topic: "DevOps",
        content: "Introduction to DevOps practices and tools.",
      },
      {
        week: 12,
        topic: "Final Project",
        content: "Build a full-stack web application as a final project.",
      },
    ],
    students: [
      { id: 105, name: "Eve Adams", email: "eve@example.com" },
      { id: 106, name: "Frank Taylor", email: "frank@example.com" },
    ],
  },
  {
    id: 4,
    name: "Data Science with Python",
    instructor: "Ada Lovelace",
    description: "Learn data science concepts and techniques using Python.",
    enrollmentStatus: "Open",
    thumbnail: "/thumbnail.png",
    duration: "10 weeks",
    schedule: "Tuesdays and Thursdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic Python knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content: "Overview of data science and its importance.",
      },
      {
        week: 2,
        topic: "Python for Data Analysis",
        content: "Using Python libraries for data analysis (NumPy, Pandas).",
      },
      {
        week: 3,
        topic: "Data Visualization",
        content: "Visualizing data with Matplotlib and Seaborn.",
      },
      {
        week: 4,
        topic: "Statistical Analysis",
        content: "Performing statistical analysis on data.",
      },
      {
        week: 5,
        topic: "Machine Learning Basics",
        content: "Introduction to machine learning concepts and algorithms.",
      },
      {
        week: 6,
        topic: "Supervised Learning",
        content: "Implementing supervised learning algorithms.",
      },
      {
        week: 7,
        topic: "Unsupervised Learning",
        content: "Implementing unsupervised learning algorithms.",
      },
      {
        week: 8,
        topic: "Model Evaluation",
        content: "Evaluating and fine-tuning machine learning models.",
      },
      {
        week: 9,
        topic: "Time Series Analysis",
        content: "Analyzing time series data.",
      },
      {
        week: 10,
        topic: "Final Project",
        content: "Apply your knowledge to a data science project.",
      },
    ],
    students: [
      { id: 107, name: "Grace Hopper", email: "grace@example.com" },
      { id: 108, name: "Hank Williams", email: "hank@example.com" },
    ],
  },
];
