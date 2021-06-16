import { PurchasesWrapper } from "../styles";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";
import Purchases from "./Purchases";

const PurchasesList = (props) => {
  return (
    <PurchasesWrapper>
      <Purchases
        score={props.score}
        credit={props.credit}
        changeCredit={props.changeCredit}
        planetPerClick={props.planetPerClick}
        increasePerClick={props.increasePerClick}
        planetPerSecond={props.planetPerSecond}
        updateRate={props.updateRate}
      ></Purchases>
    </PurchasesWrapper>
  );
};

export default PurchasesList;
