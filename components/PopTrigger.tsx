import { useContext, useRef, useState } from "react";
import {
  Popover,
  OverlayTrigger,
  Button,
  Overlay,
  Tooltip,
} from "react-bootstrap";
import { GameContext } from "./GameContext";

const PopTrigger = (props: { word: string; hintStatus: boolean }) => {
  const [btnColor, setBtnColor] = useState<string>("btn-success");
  const [disable, setDisable] = useState<boolean>(false);
  const wordLen = props.word.length;
  const first = props.word[0];

  const gameContext = useContext(GameContext);

  const clickOverLay = () => {
    if (gameContext.hints === 0) {
      gameContext.hintStatus = true;
    } else {
      if (btnColor == "btn-success") {
        setBtnColor("btn-danger");
        setDisable(true);
        gameContext.hints = gameContext.hints - 1;
      } else {
        setBtnColor("btn-success");
        setDisable(false);

        gameContext.hintStatus = true;
      }

      setTimeout(() => {
        gameContext.hints = gameContext.hints - 1;
        setBtnColor("btn-success");
        gameContext.hintStatus = true;
        setDisable(false);
      }, 5000);
    }
  };

  return (
    <>
      <OverlayTrigger
        trigger="click"
        key="right"
        placement="right"
        show={disable}
        overlay={
          <Popover>
            <Popover.Header as="h3">{`Hint`}</Popover.Header>
            <Popover.Body className="text-light">
              <p>
                First letter is <span>{first}</span>
              </p>
              <p>This word has {wordLen} letters</p>
            </Popover.Body>
          </Popover>
        }
      >
        <Button
          className={btnColor}
          disabled={gameContext.hintStatus}
          onClick={clickOverLay}
        >
          Hint
        </Button>
      </OverlayTrigger>
    </>
  );
};
export default PopTrigger;
