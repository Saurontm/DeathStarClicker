import {
  LogoImage,
  GameWrapper,
  CurrentRate,
  Credit,
  Description,
} from "../styles";
import logo from "../the-death-star.png";
import achievements from "../gameAchievements";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";
import PurchasesList from "./PurchasesList";
import Scoring from "./Scoring";
import React, { useState, useEffect } from "react";
import { BiCoinStack } from "react-icons/bi";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import ConfettiExplosion from "@reonomy/react-confetti-explosion";

function HomePage() {
  const [score, updateScore] = useState(0);
  const [achievementReached, updateAchievement] = useState(0);
  const [credit, updateCredit] = useState(0);
  const [planetPerClick, increasePerClick] = useState(1);
  const [planetPerSecond, increasePerSecond] = useState(0);
  const [isExploding, setIsExploding] = React.useState(false);
  const bigExplodeProps = {
    force: 0.6,
    duration: 5000,
    particleCount: 200,
    floorHeight: 700,
    floorWidth: 700,
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setIsExploding(!isExploding);
    setOpen(true);
  };

  const checkForAcheivement = () => {
    if (score >= achievements[achievementReached].planets) {
      handleClickOpen();
    }
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(1000);

    if (achievementReached !== 5) {
      updateAchievement(achievementReached + 1);
    } else {
      window.location.reload(false);
    }
  };

  const addToScore = (amount) => {
    setIsExploding(false);
    updateScore(score + amount);
  };

  const changeCredit = (type, amount) => {
    switch (type) {
      case "add":
        updateCredit(credit + amount);
        break;

      case "deduct":
        updateCredit(credit - amount);
        // setIsExploding(!isExploding);

        break;

      default:
        break;
    }
  };

  const updateRate = (planetPerSecond) => {
    increasePerSecond(planetPerSecond);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateScore((score) => score + planetPerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [planetPerSecond]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateCredit((credit) => credit + planetPerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [planetPerSecond]);

  useEffect(() => {
    setIsExploding(false);
    checkForAcheivement();
  }, [score]);

  return (
    <div>
      <a href=".">
        <LogoImage id="logo" src={logo} alt="THE DEATH STAR" />
      </a>{" "}
      <Credit>
        <BiCoinStack color={"#D6B94E"} />
        {"x " + credit}
      </Credit>
      <GameWrapper>
        <Scoring
          score={score}
          addToScore={addToScore}
          changeCredit={changeCredit}
          planetPerClick={planetPerClick}
        ></Scoring>
        <CurrentRate>
          {planetPerClick} {planetPerClick > 1 ? "planets" : "planet"} per click{" "}
          {planetPerSecond > 0
            ? ", " + planetPerSecond + " planets per second"
            : ""}
        </CurrentRate>

        <PurchasesList
          score={score}
          credit={credit}
          changeCredit={changeCredit}
          addToScore={addToScore}
          increasePerClick={increasePerClick}
          planetPerClick={planetPerClick}
          planetPerSecond={planetPerSecond}
          updateRate={updateRate}
        ></PurchasesList>
      </GameWrapper>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {achievements[achievementReached].title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {achievements[achievementReached].description}
          </DialogContentText>
          <DialogContent></DialogContent>
        </DialogContent>
        {isExploding && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ConfettiExplosion {...bigExplodeProps} />
          </div>
        )}
        {achievements[achievementReached].gif}
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {achievements[achievementReached].buttonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default HomePage;
