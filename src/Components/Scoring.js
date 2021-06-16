import { AwesomeButton } from "react-awesome-button";
import { Score, Description } from "../styles";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";

const Scoring = (props) => {
  const handleUpdate = () => {
    props.addToScore();
  };
  return (
    <div>
      <Score>{props.score}</Score>
      <Description>Planets Destroyed</Description>
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
