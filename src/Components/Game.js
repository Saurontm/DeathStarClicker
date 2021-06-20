import { GameWrapper, CurrentRate, Credit } from "../styles";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";
import Scoring from "./Scoring";
import React, { useState, useEffect } from "react";
import { BiCoinStack } from "react-icons/bi";
import AcheivementDialog from "./AcheivementDialog";
import Purchases from "./Purchases";

const Game = () => {
  //score
  const [score, updateScore] = useState(0);
  const addToScore = (amount) => {
    updateScore(score + amount);
  };

  //credit
  const [credit, updateCredit] = useState(0);
  const changeCredit = (type, amount) => {
    switch (type) {
      case "add":
        updateCredit(credit + amount);
        break;
      case "deduct":
        updateCredit(credit - amount);
        break;
      default:
        break;
    }
  };

  //increments
  const [planetPerClick, increasePerClick] = useState(1);
  const [planetPerSecond, increasePerSecond] = useState(0);
  const updateRate = (planetPerSecond) => {
    increasePerSecond(planetPerSecond);
  };

  //auto increments
  useEffect(() => {
    const interval = setInterval(() => {
      updateScore((score) => score + planetPerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [planetPerSecond]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateCredit((credit) => credit + planetPerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [planetPerSecond]);

  return (
    <div>
      <GameWrapper>
        <Credit>
          <BiCoinStack color={"#D6B94E"} />
          {" x " + credit}
        </Credit>
        <Scoring
          score={score}
          addToScore={addToScore}
          changeCredit={changeCredit}
          planetPerClick={planetPerClick}
        ></Scoring>
        <CurrentRate>
          {planetPerClick} {planetPerClick > 1 ? "planets" : "planet"} per click{" "}
          {planetPerSecond > 0
            ? ", " + planetPerSecond + " planets per second"
            : ""}
        </CurrentRate>
        <Purchases
          score={score}
          credit={credit}
          changeCredit={changeCredit}
          addToScore={addToScore}
          increasePerClick={increasePerClick}
          planetPerClick={planetPerClick}
          planetPerSecond={planetPerSecond}
          updateRate={updateRate}
        ></Purchases>
      </GameWrapper>
      <AcheivementDialog
        score={score}
        increasePerSecond={increasePerSecond}
      ></AcheivementDialog>
    </div>
  );
};

export default Game;
