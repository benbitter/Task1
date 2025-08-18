import { Section } from "../models/questionSection.model.js";
import { Question } from "../models/question.model.js";

const questionFromCategory = async (req, res) => {
    try {
        const { sl_no } = req.params;
        if (+sl_no === 0) 
        {
            const arr = [];
            const sectioncs = await Section.find();
            // console.log("Fetched questions:", sectioncs);
            for(const x of sectioncs) {
                const section = x.ques;
                if (section) {
                    for (const id of section) {
                        const question = await Question.findById(id);
                        if (question) {
                            arr.push(question);
                        }
                    }
                }
            }
            // console.log("Fetched ques:", arr);
            return res.json(arr);
        } 
        else
        {

            const questions = await Section.findOne({ sl_no: +sl_no });
            // console.log("Fetched questions:", questions);
            const arr = [];
            if (questions) {
                const questionIds = questions.ques;
                for (const id of questionIds) {
                const question = await Question.findById(id);
                if (question) {
                    arr.push(question);
                }
            }
        }
        // console.log("Fetched questions:", arr);
        return res.json(arr);
        }
    } catch (error) {
        console.error("Error fetching questions by category:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const questionFromQuestionIdArray = async (req, res) => {
    try {
        const { ids } = req.body;
        console.log(ids);
        if (!Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({ error: "Invalid request" });
        }

        const questions = await Question.find({ id: { $in: ids } });
        console.log("Fetched questions by IDs:", questions);
        return res.json(questions);
    } catch (error) {
        console.error("Error fetching questions by IDs:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export { questionFromCategory, questionFromQuestionIdArray };