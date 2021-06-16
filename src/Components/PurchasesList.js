import { PurchasesWrapper } from "../styles";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";
import Purchases from "./Purchases";

const PurchasesList = () => {
  return (
    <PurchasesWrapper>
      <Purchases></Purchases>
      <Purchases></Purchases>
    </PurchasesWrapper>
  );
};

export default PurchasesList;
