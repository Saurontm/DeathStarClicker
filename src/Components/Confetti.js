import ConfettiExplosion from "@reonomy/react-confetti-explosion";
import React from "react";

class Confetti extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    //confetti style
    const bigExplodeProps = {
      force: 0.6,
      particleSize: 9,
      duration: 3000,
      particleCount: 200,
      floorHeight: 500,
      floorWidth: 600,
    };
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ConfettiExplosion {...bigExplodeProps} />
      </div>
    );
  }
}
export default Confetti;
