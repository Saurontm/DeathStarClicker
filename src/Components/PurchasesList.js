import { PurchasesWrapper } from "../styles";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";
import Purchases from "./Purchases";

const PurchasesList = (props) => {
  return (
    <PurchasesWrapper>
      <Purchases
        score={props.score}
        updater={props.updater}
        planetPerClick={props.planetPerClick}
        increasePerClick={props.increasePerClick}
        planetPerSecond={props.planetPerSecond}
        updateRate={props.updateRate}
        incrementScorePerRate={props.incrementScorePerRate}
      ></Purchases>
    </PurchasesWrapper>
  );
};

export default PurchasesList;
