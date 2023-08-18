import mongoose, { Schema } from "mongoose";
interface IWord {
  word: String;
  definition: String;
  synonym: String[];
}

const wordModel = new mongoose.Schema<IWord>(
  {
    word: {
      type: String,
      required: true,
      unique: true,
    },
    definition: { type: String, required: true },
    synonym: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Word = mongoose.models.Word || mongoose.model<IWord>("Word", wordModel);

export default Word;
