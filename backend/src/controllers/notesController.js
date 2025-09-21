export const getAllNotes = (req, res) => {
  res.status(200).send("5 notes are include");
};

export const createANote = (req, res) => {
  res.status(201).json({ message: "note created successfully" });
};

export const updateAnote = (req, res) => {
  res.status(200).json({ message: "note update successfully" });
};

export const deleteAnote = (req, res) => {
  res.status(200).json({ message: "note delete successfully" });
};
