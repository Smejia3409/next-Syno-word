import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { GameContext } from "./GameContext";

const GameWidgets = (props: { score: number; tries: number }) => {
  const gameContext = useContext(GameContext);

  useEffect(() => {
    if (gameContext.tries === 0) {
      alert("Game over");
    }
  });

  return (
    <div className="d-flex ">
      <Button variant="success">Hint</Button>
      <p className="text-primary">Score:{props.score}</p>
      <p className="text-danger">Tries:{props.tries}</p>
    </div>
  );
};

export default GameWidgets;
