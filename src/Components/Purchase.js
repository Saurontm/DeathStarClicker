import { AwesomeButton } from "react-awesome-button";
import { CurrentRate } from "../styles";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";

const Purchase = (props) => {
  const buyUpgrade = () => {
    props.upgrade.status = false;
    props.deductFromScore(props.upgrade.cost);
    console.log(props.planetPerClick);
    console.log(props.upgrade.update(props.planetPerClick));
    props.increasePerClick(props.upgrade.update(props.planetPerClick));
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
