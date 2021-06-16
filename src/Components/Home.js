import { LogoImage, GameWrapper, CurrentRate } from "../styles";
import logo from "../the-death-star.png";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";
import PurchasesList from "./PurchasesList";
import Scoring from "./Scoring";

function HomePage() {
  return (
    <div>
      <LogoImage id="logo" src={logo} alt="THE DEATH STAR" />
      <GameWrapper>
        <Scoring></Scoring>
        <CurrentRate>1 planet per click, 1 planet per second</CurrentRate>
        <PurchasesList></PurchasesList>
      </GameWrapper>
    </div>
  );
}
export default HomePage;
