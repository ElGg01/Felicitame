import Birthday from "../models/birthday.model.js";

export const getBirthdays = async (req, res) => {
  const birthdays = await Birthday.find({
    user: req.user.id
  }).populate("user");
  res.json(birthdays);
};

export const createBirthday = async (req, res) => {
  const { name, relationship, date } = req.body;

  const newBirthday = new Birthday({
    name, relationship, date, user: req.user.id
  });

  const savedBirthday = await newBirthday.save();
  res.json(savedBirthday);
};

export const getBirthday = async (req, res) => {
  const birthday = await Birthday.findById(req.params.id).populate("user");
  if (!birthday) return res.status(404).json({message: "Cumpleaños no encontrado"});
  res.json(birthday);
};

export const updateBirthday = async (req, res) => {
  const birthday = await Birthday.findByIdAndUpdate(req.params.id, req.body, {new: true});
  if (!birthday) return res.status(404).json({message: "Cumpleaños no encontrado"});
  res.json(birthday);
};

export const deleteBirthday = async (req, res) => {
  const birthday = await Birthday.findByIdAndDelete(req.params.id);
  if (!birthday) return res.status(404).json({message: "Cumpleaños no encontrado"});
  return res.sendStatus(204);
};