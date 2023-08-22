import Game from "@/components/Game";
import { GameContext } from "@/components/GameContext";
import { getWords } from "@/ts_files/fetching";
import { IGame } from "@/ts_files/interfaces";
import { GetStaticProps } from "next/types";
import { useState, useContext } from "react";
import { Row, Button } from "react-bootstrap";

export default function Home() {
  const [gameValue, setGameValue] = useState<IGame>({ words: [], tries: 3 });
  const [words, setWords] = useState<string[]>([""]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     gameValue.words = await getWords();
  //   };

  //   fetchData();
  // }, [gameValue]);

  return (
    <GameContext.Provider value={gameValue}>
      <div className="App ">
        <Start />
      </div>
    </GameContext.Provider>
  );
}

const Start = () => {
  const gameContext = useContext(GameContext);

  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [startGame, setStartGame] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  const clickStart = () => {
    setStartGame(true);
  };

  return (
    <>
      {startGame ? (
        <Game />
      ) : (
        <div className="start-container text-center">
          <Row>
            <p className="start-title text-danger">SynWord</p>

            <Button variant="danger" className="start-btn" onClick={clickStart}>
              Start
            </Button>
          </Row>
        </div>
      )}
    </>
  );
};

// export const getStaticProps = async () => {
//   const res = await getWords();

//   return { props: { res } };
// };
