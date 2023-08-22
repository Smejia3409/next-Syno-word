import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { GameContext } from "./GameContext";
import GameOver from "./GameOver";
import axios from "axios";
import { getWords } from "../ts_files/fetching";
// import { getSynonym } from "./fetching";

const Game = () => {
  const [wordInput, setWordInput] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [wordList, setWordList] = useState<Object[]>([]);

  const gameContext = useContext(GameContext);

  const submitRes = () => {};

  useEffect(() => {
    const words = async () => {
      try {
        let words: any = await axios.get("/api/word");
        setWordList(words.data);
      } catch (error) {
        console.log(error);
      }
    };

    words();
  }, []);
  return (
    <div className="game-container border border-light">
      <Row className="game-options"></Row>
      <p className="text-light">{gameContext.words[wordIndex]}</p>
      <br />

      <Form>
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
  );
};

export default Game;
