import { AwesomeButton } from "react-awesome-button";
import { CurrentRate } from "../styles";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";

const Purchase = () => {
  return (
    <div>
      <AwesomeButton type="secondary">Call TIE Fighter</AwesomeButton>
      <CurrentRate>double the planets/ second</CurrentRate>
    </div>
  );
};

export default Purchase;
