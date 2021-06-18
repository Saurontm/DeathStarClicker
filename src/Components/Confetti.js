import ConfettiExplosion from "@reonomy/react-confetti-explosion";
import React from "react";

class Confetti extends React.Component {
  shouldComponentUpdate(_nextProps, _nextState) {
    return false;
  }
  render() {
    console.log(this.props.height);
    const bigExplodeProps = {
      force: 0.6,
      particleSize: 10,
      duration: 2000,
      particleCount: 200,
      floorHeight: this.props.height + 180,
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
