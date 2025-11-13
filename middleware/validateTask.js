export default (req, res, next) => {
  const method = req.method;
  const { title, description, completed } = req.body;

  if (method === "POST") {
    if (!title || typeof title !== "string" || !title.trim())
      return res
        .status(400)
        .json({ message: "Title is required and must be a string" });

    if (!description || typeof description !== "string" || !description.trim())
      return res
        .status(400)
        .json({ message: "description is required and must be a string" });
  }

  if (method === "PUT") {
    if (
      title === undefined &&
      description === undefined &&
      completed === undefined
    )
      return res.status(400).json({
        message: "Provide at least one field to update",
      });

    if (title && typeof title !== "string")
      return res
        .status(400)
        .json({ message: "Title must be a string if provided" });

    if (description && typeof description !== "string")
      return res
        .status(400)
        .json({ message: "description must be a string if provided" });

    if (completed !== undefined && typeof completed !== "boolean")
      return res
        .status(400)
        .json({ message: "Completed must be true or false" });
  }

  next();
};
