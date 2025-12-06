import mongoose from "mongoose";


const user = new mongoose.Schema({
  exercice: {
    type: String,
    required: true,
  },
  load: {
    type: String,
    required: true,
    unique: true,
  },
  reps: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const User = mongoose.model("user", user);

export default User; 