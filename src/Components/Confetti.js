import ConfettiExplosion from "@reonomy/react-confetti-explosion";
import React from "react";

class Confetti extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    const bigExplodeProps = {
      force: 0.6,
      particleSize: 10,
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
