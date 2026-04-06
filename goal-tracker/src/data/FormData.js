// export const defaultGoals = [
//     { id: 1, title: "Learn React", description: "Study hooks", progress: 40, completed: false, startDate: "2026-03-11", endDate: "2026-03-12" },
//     { id: 2, title: "Build Goal Tracker", description: "Finish project", progress: 70, completed: false, startDate: "2026-03-10", endDate: "2026-03-15" },
//     { id: 3, title: "Read a Book", description: "Read 30 pages", progress: 100, completed: true, startDate: "2026-03-09", endDate: "2026-03-11" },
//     { id: 4, title: "create a project", description: "Create goal project", progress: 50, completed: false, startDate: "2026-03-09", endDate: "2026-03-11" },

//   // ]


// Goals (test data)
export const initialGoals = [
  {
    id: 1,
    title: "Learn React",
    description: "Study hooks",
    progress: 40,
    completed: false,
    startDate: "2026-03-11",
    endDate: "2026-03-12",
  },
  {
    id: 2,
    title: "Build Goal Tracker",
    description: "Finish project",
    progress: 70,
    completed: false,
    startDate: "2026-03-10",
    endDate: "2026-03-15",
  },
  {
    id: 4,
    title: "Read a Book",
    description: "Read 30 pages",
    progress: 100,
    completed: true,
    startDate: "2026-03-09",
    endDate: "2026-03-11",
  },

  {
  id: 3,
  title: "Test Today",
  description: "Read 30 pages",
  progress: 10,
  completed: false,
  startDate: "2026-04-04",
  endDate: "2026-04-04",
}
];

// Form default values
export const initialFormData = {
  title: "",
  description: "",
  type: "Work",
  startDate: "",
  endDate: "",
  progress: 0,
};