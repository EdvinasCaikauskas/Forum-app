import express from "express";
const router = express.Router();

import {
  createForum,
  deleteForum,
  getAllForums,
  updateForum,
} from "../controllers/forumController.js";

router.route("/").post(createForum).get(getAllForums);
router.route("/:id").delete(deleteForum).patch(updateForum);

export default router;
