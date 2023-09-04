import { useRef, useState } from "react";
import {
  Popover,
  OverlayTrigger,
  Button,
  Overlay,
  Tooltip,
} from "react-bootstrap";

const PopTrigger = (props: { word: string }) => {
  const [btnColor, setBtnColor] = useState<string>("btn-success");
  const target = useRef(null);
  const wordLen = props.word.length;
  const first = props.word[0];

  return (
    <>
      <OverlayTrigger
        trigger="click"
        key="right"
        placement="right"
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
          onClick={() => {
            if (btnColor == "btn-success") {
              setBtnColor("btn-danger");
            } else {
              setBtnColor("btn-success");
            }
          }}
        >
          Hint
        </Button>
      </OverlayTrigger>
    </>
  );
};
export default PopTrigger;
