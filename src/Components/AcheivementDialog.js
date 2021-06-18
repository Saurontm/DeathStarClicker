import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import React, { useEffect } from "react";
import achievements from "../gameAchievements";
import ConfettiExplosion from "@reonomy/react-confetti-explosion";

const AcheivementDialog = (props) => {
  const bigExplodeProps = {
    force: 0.6,
    duration: 4000,
    particleCount: 200,
    floorHeight: 600,
    floorWidth: 600,
  };

  const [open, setOpen] = React.useState(false);
  const [isExploding, setIsExploding] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setIsExploding(!isExploding);
  };

  const checkForAcheivement = () => {
    if (props.score >= achievements[props.achievementReached].planets) {
      handleClickOpen();
    }
  };

  useEffect(() => {
    checkForAcheivement();
  }, [props.score]);

  const handleClose = () => {
    setIsExploding(false);
    setOpen(false);
    setTimeout(1000);

    if (props.achievementReached !== 5) {
      props.updateAchievement(props.achievementReached + 1);
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
        {achievements[props.achievementReached].title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {achievements[props.achievementReached].description}
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
      {achievements[props.achievementReached].gif}
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {achievements[props.achievementReached].buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AcheivementDialog;
