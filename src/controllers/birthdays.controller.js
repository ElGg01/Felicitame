import Birthday from "../models/birthday.model.js";

export const getBirthdays = async (req, res) => {
  try {
    const birthdays = await Birthday.find({
      user: req.user.id
    }).populate("user");
    res.json(birthdays);
  } catch (error) {
    return res.status(404).json({message: "Algo fue mal"});
  }
};

export const createBirthday = async (req, res) => {
  try {
    const { name, relationship, date } = req.body;

    const newBirthday = new Birthday({
      name, relationship, date, user: req.user.id
    });

    const savedBirthday = await newBirthday.save();
    res.json(savedBirthday);
  } catch (error) {
    return res.status(404).json({message: "Algo fue mal"});
  }
};

export const getBirthday = async (req, res) => {
  try {
    const birthday = await Birthday.findById(req.params.id).populate("user");
    if (!birthday) return res.status(404).json({message: "Cumpleaños no encontrado"});
    res.json(birthday);
  } catch (error) {
    return res.status(404).json({message: "Cumpleaños no encontrado"});
  }
};

export const updateBirthday = async (req, res) => {
  try {
    const birthday = await Birthday.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!birthday) return res.status(404).json({message: "Cumpleaños no encontrado"});
    res.json(birthday);
  } catch (error) {
    return res.status(404).json({message: "Cumpleaños no encontrado"});
  }
};

export const deleteBirthday = async (req, res) => {
  try {
    const birthday = await Birthday.findByIdAndDelete(req.params.id);
    if (!birthday) return res.status(404).json({message: "Cumpleaños no encontrado"});
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({message: "Cumpleaños no encontrado"});
  }
};