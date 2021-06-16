import { AwesomeButton } from "react-awesome-button";
import { CurrentRate } from "../styles";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";

const Purchase = (props) => {
  const buyUpgrade = () => {
    props.upgrade.status = false;
    console.log(props.score);
    props.updater("deduct", props.upgrade.cost);
    // props.deductFromScore(props.upgrade.cost);
    console.log(props.score);
    if (props.upgrade.type === "perClick") {
      props.increasePerClick(props.upgrade.update(props.planetPerClick));
    } else if (props.upgrade.type === "perSecond") {
      props.updateRate(props.upgrade.update(props.planetPerSecond));
      // props.incrementScorePerRate();
      console.log(props.planetPerSecond);
    }
  };
  return (
    <div>
      <AwesomeButton type="secondary" onPress={() => buyUpgrade()}>
        {props.upgrade.title}
      </AwesomeButton>
      <CurrentRate>{props.upgrade.description}</CurrentRate>
    </div>
  );
};

export default Purchase;
