import user from "../models/user.models.js";

export const newt = async (req, res) => {
  const { exercice, load, reps } = req.body;

  try {
    const newUser = new user({ exercice, load, reps });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const gett = async (req, res) => {
  try {
    const users = await user.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};      