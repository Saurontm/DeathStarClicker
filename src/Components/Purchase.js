import { AwesomeButton } from "react-awesome-button";
import { CurrentRate } from "../styles";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";
import gameRules from "../gameRules";

const Purchase = (props) => {
  //upgrades
  const buyUpgrade = () => {
    props.upgrade.status = false;
    props.changeCredit("deduct", props.upgrade.cost);
    //check if unlocks upgrde
    if (props.upgrade.hasOwnProperty("opens")) {
      gameRules.find((rule) => rule.id === props.upgrade.opens).status = true;
    }
    //type of upgrade
    if (props.upgrade.type === "perClick") {
      props.increasePerClick(props.upgrade.update(props.planetPerClick));
    } else if (props.upgrade.type === "perSecond") {
      props.updateRate(props.upgrade.update(props.planetPerSecond));
    }
  };
  return (
    <div style={{ float: "left", padding: 30 }}>
      <AwesomeButton type="secondary" onPress={() => buyUpgrade()}>
        {props.upgrade.title}
      </AwesomeButton>
      <CurrentRate>{props.upgrade.description}</CurrentRate>
    </div>
  );
};

export default Purchase;
