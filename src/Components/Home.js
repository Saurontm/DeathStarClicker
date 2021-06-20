import React from "react";
import { LogoImage } from "../styles";
import logo from "../assets/images/the-death-star.png";
import "react-awesome-button/dist/styles.css";
import Game from "./Game";

function HomePage() {
  return (
    <div>
      <a href=".">
        <LogoImage id="logo" src={logo} alt="THE DEATH STAR" />
      </a>{" "}
      <Game></Game>
    </div>
  );
}
export default HomePage;
