import Forum from "../models/Forum.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const createForum = async (req, res) => {
  const { topic, content } = req.body;

  if (!topic || !content) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const forum = await Forum.create(req.body);
  res.status(StatusCodes.CREATED).json({ forum });
};

const getAllForums = async (req, res) => {
  const forums = await Forum.find({ createdBy: req.user.userId });
  res
    .status(StatusCodes.OK)
    .json({ forums, totalForums: forums.length, numOfPages: 1 });
};
const updateForum = async (req, res) => {
  res.send("update forum");
};
const deleteForum = async (req, res) => {
  res.send("delete forum");
};

export { createForum, deleteForum, getAllForums, updateForum };
