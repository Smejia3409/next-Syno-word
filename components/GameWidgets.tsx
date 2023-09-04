import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Col,
  Modal,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";
import { GameContext } from "./GameContext";
import PopTrigger from "./PopTrigger";

const GameWidgets = (props: { score: number; tries: number; word: string }) => {
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
        <PopTrigger word={props.word} />
      </Col>
    </div>
  );
};

const LetterHint = (props: { word: string }) => {
  const wordLen = props.word.length;
  const first = props.word[0];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Hint
      </Button>

      <Modal show={show} onHide={handleClose} size="sm">
        <Modal.Header closeButton>
          <Modal.Title className="text-light">Hint</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-light">
            First Letter: <span className="text-danger">{first}</span>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="Danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GameWidgets;
