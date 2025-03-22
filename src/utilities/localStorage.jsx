
export const employees = [
  {
    id: "1",
    firstName: "Swaraj",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Report",
        description: "Prepare the monthly sales report.",
        date: "2025-02-10",
        category: "Reports",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Client Meeting",
        description: "Attend a meeting with the new client.",
        date: "2025-02-12",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: "2",
    firstName: "Aman",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Code Review",
        description: "Review the new feature code before deployment.",
        date: "2025-02-11",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Bug Fixing",
        description: "Fix the reported UI bugs.",
        date: "2025-02-15",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: "3",
    firstName: "Ashutosh",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Team Training",
        description: "Conduct training on the new software tool.",
        date: "2025-02-20",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Project Documentation",
        description: "Update project documentation with recent changes.",
        date: "2025-02-14",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: "4",
    firstName: "Aniket",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Database Optimization",
        description: "Optimize database queries for better performance.",
        date: "2025-02-18",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Security Audit",
        description: "Perform a security audit on the application.",
        date: "2025-02-22",
        category: "Security",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: "5",
    firstName: "Arun",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Marketing Strategy",
        description: "Develop a marketing strategy for the new product launch.",
        date: "2025-02-25",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Social Media Campaign",
        description: "Plan a social media campaign for brand awareness.",
        date: "2025-02-28",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
];
export const admin = [
  {
    id: "admin",
    email: "admin@example.com",
    password: "123",
    name: "Raksha", 
  },
];


export const setLocalStorage = (employees, admin) => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
