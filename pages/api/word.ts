import { connectDb } from "@/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";
import Word from "@/models/wordModel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDb();
  const { method } = req;

  switch (method) {
    case `GET`:
      try {
        const word = await Word.find();
        if (word) {
          res.status(200).json(word);
        } else {
          res.status(200).json("Error");
        }
      } catch (error) {
        res.status(404).json(error);
      }
  }
}
