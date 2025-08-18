import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  id: { type: String},
  tags: { type: String },
  title: { type: String},
  yt_link: { type: String },
  p1_link: { type: String },
  p2_link: { type: String },
  submission:{
    type:Number,
    default:0
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "medium"
  }
});

export const Question = mongoose.model("Question", questionSchema);

