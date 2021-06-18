import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
import achievements from "../gameAchievements";
import Confetti from "./Confetti";

const AcheivementDialog = (props) => {
  const [open, setOpen] = React.useState(false);
  const [achievementReached, updateAchievement] = useState(0);
  const [isExploding, setIsExploding] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setIsExploding(!isExploding);
  };

  const checkForAcheivement = () => {
    if (props.score >= achievements[achievementReached].planets) {
      handleClickOpen();
    }
  };

  useEffect(() => {
    checkForAcheivement();
  }, [props.score]);

  const handleClose = () => {
    setOpen(false);
    setTimeout(1000);

    if (achievementReached !== 5) {
      updateAchievement(achievementReached + 1);
    } else {
      window.location.reload(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {achievements[achievementReached].title}
      </DialogTitle>
      <Confetti></Confetti>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {achievements[achievementReached].description}
        </DialogContentText>
        <DialogContent></DialogContent>
      </DialogContent>
      {achievements[achievementReached].gif}
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {achievements[achievementReached].buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AcheivementDialog;
