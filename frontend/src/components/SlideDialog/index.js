/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide = ({
  handleLeftButtonClick,
  handleRightButtonClick,
  leftButtonText,
  rightButtonText,
  title,
  description,
  openButtonText,
  buttonColour,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (fn) => {
    if (fn !== undefined && fn !== null) {
      console.group('function is: ');
      console.log(fn);
      console.groupEnd();
      fn();
    }
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color={buttonColour}
        onClick={handleClickOpen}
      >
        {openButtonText}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose(handleLeftButtonClick);
            }}
            color="primary"
          >
            {leftButtonText}
          </Button>
          <Button
            onClick={() => {
              handleClose(handleRightButtonClick);
            }}
            color="primary"
          >
            {rightButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialogSlide;
