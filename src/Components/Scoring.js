import { AwesomeButton } from "react-awesome-button";
import { Score, Description } from "../styles";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";

const Scoring = () => {
  return (
    <div>
      <Score> 10 </Score>
      <Description>Planets Destroyed</Description>
      <AwesomeButton type="primary" className="gameButton">
        Destroy Planet
      </AwesomeButton>
    </div>
  );
};

export default Scoring;
