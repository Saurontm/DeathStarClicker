import { PurchasesStyled, UpgradesTitle } from "../styles";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";
import Purchase from "./Purchase";
import gameRules from "../gameRules";

const Purchases = (props) => {
  const purchases = gameRules
    .filter((upgrade) => upgrade.cost <= props.credit && upgrade.status)
    .map((upgrade) => (
      <Purchase
        upgrade={upgrade}
        score={props.score}
        changeCredit={props.changeCredit}
        planetPerClick={props.planetPerClick}
        increasePerClick={props.increasePerClick}
        planetPerSecond={props.planetPerSecond}
        updateRate={props.updateRate}
      ></Purchase>
    ));
  return (
    <div>
      {purchases.length > 0 ? (
        <UpgradesTitle> Available upgrades: </UpgradesTitle>
      ) : (
        ""
      )}

      <PurchasesStyled>{purchases}</PurchasesStyled>
    </div>
  );
};

export default Purchases;
