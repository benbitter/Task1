import {Router} from "express"
import { questionFromCategory ,questionFromQuestionIdArray} from "../controllers/question.controller.js";

const router = Router();

router.get("/category/:sl_no", questionFromCategory);
router.post("/questions", questionFromQuestionIdArray);

export default router;