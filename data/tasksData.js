export const tasks = [
  {
    id: 1,
    title: "Sample Task",
    description: "This is a sample task for testing",
    completed: false,
    createdAt: new Date().toISOString(),
  },
];

let nextId = 2;
export const getNextId = () => {
  return nextId++;
};
