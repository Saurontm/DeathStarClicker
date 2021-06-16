import { LogoImage, GameWrapper, CurrentRate } from "../styles";
import logo from "../the-death-star.png";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";
import PurchasesList from "./PurchasesList";
import Scoring from "./Scoring";
import { useState } from "react";

function HomePage() {
  const [score, updateScore] = useState(0);
  const [planetPerClick, increasePerClick] = useState(1);

  const addToScore = () => {
    updateScore(score + planetPerClick);
  };

  const deductFromScore = (amount) => {
    updateScore(score - amount);
  };

  return (
    <div>
      <a href=".">
        <LogoImage id="logo" src={logo} alt="THE DEATH STAR" />
      </a>
      <GameWrapper>
        <Scoring score={score} addToScore={addToScore}></Scoring>
        <CurrentRate>
          {planetPerClick} {planetPerClick > 1 ? "planets" : "planet"} per click
        </CurrentRate>
        <PurchasesList
          score={score}
          deductFromScore={deductFromScore}
          increasePerClick={increasePerClick}
          planetPerClick={planetPerClick}
        ></PurchasesList>
      </GameWrapper>
    </div>
  );
}
export default HomePage;
