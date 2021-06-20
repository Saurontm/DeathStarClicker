import { AwesomeButton } from "react-awesome-button";
import { Score, Description } from "../styles";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";
import AnimatedNumber from "react-animated-numbers";

const Scoring = (props) => {
  //update score and credit
  const handleUpdate = () => {
    props.addToScore(props.planetPerClick);
    props.changeCredit("add", props.planetPerClick);
  };
  return (
    <div>
      <Score>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AnimatedNumber
            animateToNumber={props.score}
            config={{ tension: 400, friction: 40 }}
            animationType={"random"}
          />
        </div>
      </Score>
      <Description>
        {props.score === 1 ? "Planet" : "Planets"} Destroyed
      </Description>
      <AwesomeButton
        type="primary"
        className="gameButton"
        onPress={() => handleUpdate()}
      >
        Destroy Planet
      </AwesomeButton>
    </div>
  );
};

export default Scoring;
