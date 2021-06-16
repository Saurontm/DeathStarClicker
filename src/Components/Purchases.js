import { PurchasesStyled } from "../styles";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";
import Purchase from "./Purchase";
import gameRules from "../gameRules";

const Purchases = (props) => {
  const purchases = gameRules
    .filter((upgrade) => upgrade.cost <= props.score && upgrade.status)
    .map((upgrade) => (
      <Purchase
        upgrade={upgrade}
        score={props.score}
        deductFromScore={props.deductFromScore}
        planetPerClick={props.planetPerClick}
        increasePerClick={props.increasePerClick}
      ></Purchase>
    ));
  return <PurchasesStyled>{purchases}</PurchasesStyled>;
};

export default Purchases;
