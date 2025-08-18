import fetch from "node-fetch";
import { Section } from "./models/questionSection.model.js";
import { Question } from "./models/question.model.js";

const seedDB = async () => {
  try {
    console.log("Seeding DB...");

    // fetch JSON
    const res = await fetch("https://test-data-gules.vercel.app/data.json");
    const json = await res.json();
    const data = json.data;
    // console.log(json);
    // clear old data
    await Section.deleteMany({});
    await Question.deleteMany({});
    console.log("Old data removed");

    for (const section of data) {
      const questionIds = [];

      // Save each question first
      for (const q of section.ques) {
        // console.log(q);
        const newQ = await Question.create(q);
        // break;
        questionIds.push(newQ._id); // collect its id
      }

      // Now save section with refs
      await Section.create({
        sl_no: section.sl_no,
        title: section.title,
        ques: questionIds
      });
    }

    console.log("Seeding complete");
  } catch (err) {
    console.error("Seeder error:", err);
  }
};

export { seedDB };
