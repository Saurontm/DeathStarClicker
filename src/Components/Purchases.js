import { PurchasesStyled, UpgradesTitle } from "../styles";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";
import Purchase from "./Purchase";
import gameRules from "../gameRules";
import { PurchasesWrapper } from "../styles";

const Purchases = (props) => {
  //filter based on credits required for upgrade, and if unlocked
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
    <PurchasesWrapper>
      {purchases.length > 0 ? (
        <UpgradesTitle> Available upgrades: </UpgradesTitle>
      ) : (
        ""
      )}

      <PurchasesStyled>{purchases}</PurchasesStyled>
    </PurchasesWrapper>
  );
};

export default Purchases;
