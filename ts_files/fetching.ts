import axios from "axios";

//  export const getWords = async () => {
//    try {
//      let words = await axios.get(
//        "http://random-word-api.vercel.app/api?words=100"
//      );

//      return words.data;
//    } catch (error) {
//      console.log(error);
//    }
//  };

// export const getSynonym = async (word: string) => {
//   try {
//     const synonym = await axios.get(
//       `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
//     );

//     return synonym["data"][0]["meanings"];
//   } catch (error) {
//     return [];
//   }
// };

export const getWords = async () => {
  try {
    let words: any = await axios.get("/api/word");

    return words.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
