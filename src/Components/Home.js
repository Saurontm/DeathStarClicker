import { AwesomeButton } from "react-awesome-button";
import {
  LogoImage,
  GameWrapper,
  Score,
  Description,
  PurchasesWrapper,
  CurrentRate,
  Purchase,
} from "../styles";
import logo from "../the-death-star.png";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";

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
        <PurchasesWrapper>
          <Purchase>
            <AwesomeButton type="secondary">Increase Laser Power</AwesomeButton>
            <CurrentRate>Destroy double the planets</CurrentRate>
          </Purchase>
          <Purchase>
            <AwesomeButton type="secondary">Call TIE Fighter</AwesomeButton>
            <CurrentRate>Destroy 5 planets per second</CurrentRate>
          </Purchase>
        </PurchasesWrapper>
      </GameWrapper>
    </div>
  );
}
export default HomePage;
