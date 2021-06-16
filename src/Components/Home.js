import { AwesomeButton } from "react-awesome-button";
import {
  LogoImage,
  GameWrapper,
  Score,
  Description,
  CurrentRate,
} from "../styles";
import logo from "../the-death-star.png";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";
import PurchasesList from "./PurchasesList";

function HomePage() {
  return (
    <div>
      <LogoImage id="logo" src={logo} alt="THE DEATH STAR" />
      <GameWrapper>
        <Score> 10 </Score>
        <Description>Planets Destroyed</Description>
        <AwesomeButton type="primary" className="gameButton">
          Destroy Planet
        </AwesomeButton>
        <CurrentRate>1 planet per click, 1 planet per second</CurrentRate>
        <PurchasesList></PurchasesList>
      </GameWrapper>
    </div>
  );
}
export default HomePage;
