import { tasks, getNextId } from "../data/tasksData.js";

export const getAllTasks = (req, res) => {
  res.status(200).json(tasks);
};

export const getTaskById = (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) return res.status(404).json({ message: "Task not found" });
  res.status(200).json(task);
};

export const createTask = (req, res) => {
  const { title, description } = req.body;

  const newTask = {
    id: getNextId(),
    title,
    description,
    completed: false,
    createdAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) return res.status(404).json({ message: "Task not found" });

  const { title, description, completed } = req.body;
  if (title !== undefined) tasks[index].title = title;
  if (description !== undefined) tasks[index].description = description;
  if (completed !== undefined) tasks[index].completed = completed;
  tasks[index].updatedAt = new Date().toISOString();

  res.status(200).json(tasks[index]);
};

export const deleteTask = (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) return res.status(404).json({ message: "Task not found" });

  const deleteTask = tasks.splice(index, 1)[0];
  res.status(200).json({ message: "Task deleted", deleteTask });
};
