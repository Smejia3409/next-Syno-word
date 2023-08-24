import React, { useContext, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { GameContext } from "./GameContext";

const GameWidgets = (props: { score: number; tries: number }) => {
  const gameContext = useContext(GameContext);

  useEffect(() => {
    if (gameContext.tries === 0) {
      alert("Game over");
      gameContext.tries = 3;
      gameContext.score = 0;
    }
  });

  return (
    <div className="d-flex ">
      <Col className="d-flex align-self-center" xs={10} sm={10} md={10} lg={10}>
        <p className="text-primary">Score:{props.score}</p>
        <p className="text-danger">Tries:{props.tries}</p>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2}>
        <Button variant="success">Hint</Button>
      </Col>
    </div>
  );
};

const letterHint = (props: { word: string }) => {
  const wordLen = props.word.length;
  const first = props.word[0];

  return <></>;
};

export default GameWidgets;
