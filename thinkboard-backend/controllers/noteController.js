const Note = require('../models/Note');

exports.getNotes = async (req, res) => {
  const notes = await Note.find({ user: req.userId });
  res.json(notes);
};

exports.createNote = async (req, res) => {
  const { title, content } = req.body;
  const note = await Note.create({ user: req.userId, title, content });
  res.status(201).json(note);
};

exports.updateNote = async (req, res) => {
  const note = await Note.findOneAndUpdate(
    { _id: req.params.id, user: req.userId },
    req.body,
    { new: true }
  );
  res.json(note);
};

exports.deleteNote = async (req, res) => {
  await Note.findOneAndDelete({ _id: req.params.id, user: req.userId });
  res.json({ message: "Note deleted" });
};
