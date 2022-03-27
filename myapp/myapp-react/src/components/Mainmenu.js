import React, { useContext } from "react";
import QuizContext from "../Helpers/Context";
import "../App.css";

const Mainmenu = () => {
  const { gamestate, setGameState } = useContext(QuizContext);
  return (
    <div className="Menu">
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Mainmenu;
