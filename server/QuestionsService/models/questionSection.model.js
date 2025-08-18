import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
  sl_no: { type: Number, required: true },
  title: { type: String, required: true },
  ques: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }] // store references
});

export const Section = mongoose.model("Section", sectionSchema);