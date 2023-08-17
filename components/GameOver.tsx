import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { GameContext } from "./GameContext";

const GameOver = (props: { showProp: boolean }) => {
  const gameContext = useContext(GameContext);
  const [show, setShow] = useState<boolean>(props.showProp);

  const handleClose = () => setShow(props.showProp);
  const handleShow = () => setShow(props.showProp);

  const reset = () => {
    gameContext.tries = 3;
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-danger">Game Over!</Modal.Title>
      </Modal.Header>

      <Button variant="success" onClick={() => reset()}>
        Play again
      </Button>
    </Modal>
  );
};

export default GameOver;
