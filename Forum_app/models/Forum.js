import mongoose from "mongoose";

const ForumSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: [true, "Please provide a topic"],
      minlenght: 3,
      maxlength: 50,
    },
    content: {
      type: String,
      required: [true, "Please provide content"],
      minlenght: 4,
    },
    forumLocation: {
      type: String,
      default: "my city",
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Forum", ForumSchema);
