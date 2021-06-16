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
        updater={props.updater}
        planetPerClick={props.planetPerClick}
        increasePerClick={props.increasePerClick}
        planetPerSecond={props.planetPerSecond}
        updateRate={props.updateRate}
        incrementScorePerRate={props.incrementScorePerRate}
      ></Purchase>
    ));
  return <PurchasesStyled>{purchases}</PurchasesStyled>;
};

export default Purchases;
