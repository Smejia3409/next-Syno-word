import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { GameContext } from "./GameContext";
import GameOver from "./GameOver";
import axios from "axios";
import { getWords } from "../ts_files/fetching";
import { Loading } from "./Loading";
import { IWord } from "@/ts_files/interfaces";
import GameWidgets from "./GameWidgets";
import PopTrigger from "./PopTrigger";
// import { getSynonym } from "./fetching";

const Game = () => {
  const [wordInput, setWordInput] = useState<string>("");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [wordList, setWordList] = useState<IWord[]>([]);
  const [wordIndex, setWordIndex] = useState<number>(getRandomInt);
  const [hintSatus, setHintStatus] = useState<boolean>(false);

  const gameContext = useContext(GameContext);

  const submitRes = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (
      wordList[wordIndex].word === wordInput.toLowerCase() ||
      wordList[wordIndex].synonym.includes(wordInput)
    ) {
      gameContext.score = gameContext.score + 1;
      gameContext.hintStatus = false;
    } else {
      gameContext.tries = gameContext.tries - 1;
      gameContext.hintStatus = false;
    }
    setWordInput("");
    setWordIndex(getRandomInt);
  };

  function getRandomInt() {
    return (
      Math.floor(Math.random() * wordList.length) ||
      Math.floor(Math.random() * 30)
    );
  }

  useEffect(() => {
    const words = async () => {
      try {
        let words: IWord[] = (await axios.get("/api/word")).data;
        setWordList(words);
      } catch (error) {
        console.log(error);
      }
    };

    words();

    gameContext.words = wordList;
  }, [gameContext]);

  console.log(wordList[wordIndex]);

  return (
    <>
      <div className="game-container ">
        {wordList.length > 0 ? (
          <div className="">
            <GameWidgets
              score={gameContext.score}
              tries={gameContext.tries}
              word={wordList[wordIndex]["word"]}
              hint={hintSatus}
            />
            <Row className="game-options"></Row>
            <p className="text-light">{wordList[wordIndex]["definition"]}</p>
            <br />

            <Form onSubmit={submitRes}>
              <Form.Control
                value={wordInput}
                onChange={(word) => {
                  setWordInput(word.target.value);
                }}
              />
              <Button onClick={submitRes}>Submit</Button>
            </Form>

            {gameOver && <GameOver showProp={gameOver} />}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Game;
