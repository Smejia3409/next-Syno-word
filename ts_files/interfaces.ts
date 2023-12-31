export interface IGame {
  words: object[];
  tries: number;
  score: number;
  hints: number;
  hintStatus: boolean;
}

export interface IWord {
  _id: string;
  createdAt: string;
  definition: string;
  synonym: string[];
  updatedAt: string;
  word: string;
  __v: number;
}
