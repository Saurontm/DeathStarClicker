import { PurchasesWrapper } from "../styles";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";
import Purchases from "./Purchases";

const PurchasesList = (props) => {
  console.log(props.planetPerClick);
  return (
    <PurchasesWrapper>
      <Purchases
        score={props.score}
        deductFromScore={props.deductFromScore}
        planetPerClick={props.planetPerClick}
        increasePerClick={props.increasePerClick}
      ></Purchases>
    </PurchasesWrapper>
  );
};

export default PurchasesList;
