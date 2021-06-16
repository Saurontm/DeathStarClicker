import { LogoImage, GameWrapper, CurrentRate } from "../styles";
import logo from "../the-death-star.png";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";
import PurchasesList from "./PurchasesList";
import Scoring from "./Scoring";
import { useState } from "react";

function HomePage() {
  const [score, updateScore] = useState(0);
  let planetPerClick = 1;

  const addToScore = () => {
    updateScore(score + planetPerClick);
  };

  return (
    <div>
      <a href=".">
        <LogoImage id="logo" src={logo} alt="THE DEATH STAR" />
      </a>
      <GameWrapper>
        <Scoring score={score} addToScore={addToScore}></Scoring>
        <CurrentRate>1 planet per click</CurrentRate>
        <PurchasesList></PurchasesList>
      </GameWrapper>
    </div>
  );
}
export default HomePage;
