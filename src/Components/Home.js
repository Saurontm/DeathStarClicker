import { LogoImage, GameWrapper, CurrentRate } from "../styles";
import logo from "../the-death-star.png";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";
import PurchasesList from "./PurchasesList";
import Scoring from "./Scoring";
import React, { useState, useEffect } from "react";

function HomePage() {
  const [score, updateScore] = useState(0);
  const [planetPerClick, increasePerClick] = useState(1);
  const [planetPerSecond, increasePerSecond] = useState(0);

  // const incrementScore = () => {
  //   addToScore(planetPerClick);
  // };

  const addToScore = (amount) => {
    console.log("now adding");
    console.log(amount);
    updateScore(score + amount);
    console.log("new score");
    console.log(score);
  };

  const updater = (type, amount) => {
    switch (type) {
      case "add":
        addToScore(amount);
        break;

      case "deduct":
        deductFromScore(amount);
        break;

      default:
        break;
    }
  };

  const deductFromScore = (amount) => {
    updateScore(score - amount);
  };

  const updateRate = (amount) => {
    increasePerSecond(planetPerSecond + amount);
  };

  const incrementScorePerRate = () => {
    setInterval(() => {
      updateScore(score + planetPerSecond);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateScore((score) => score + planetPerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [planetPerSecond]);

  return (
    <div>
      <a href=".">
        <LogoImage id="logo" src={logo} alt="THE DEATH STAR" />
      </a>
      <GameWrapper>
        <Scoring
          score={score}
          updater={updater}
          planetPerClick={planetPerClick}
        ></Scoring>
        <CurrentRate>
          {planetPerClick} {planetPerClick > 1 ? "planets" : "planet"} per click{" "}
          {planetPerSecond > 0
            ? ", " + planetPerSecond + " planets per second"
            : ""}
        </CurrentRate>
        <PurchasesList
          score={score}
          updater={updater}
          increasePerClick={increasePerClick}
          planetPerClick={planetPerClick}
          planetPerSecond={planetPerSecond}
          updateRate={updateRate}
          incrementScorePerRate={incrementScorePerRate}
        ></PurchasesList>
      </GameWrapper>
    </div>
  );
}
export default HomePage;
