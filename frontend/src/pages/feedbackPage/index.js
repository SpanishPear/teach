/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  CssBaseline,
  Slider,
  TextField,
  Checkbox,
  FormControlLabel,
  makeStyles,
} from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { submitFeedback } from '../../api';
import { SlideDialog } from '../../components';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    boxShadow: '0px 5px 20px 0px rgba(50, 50, 50, 0.52)',
    padding: theme.spacing(5),
    'padding-top': theme.spacing(1),
  },

  label: {
    // marginLeft: theme.spacing(1), // not sure i like this tbh
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  spacing: {
    marginTop: theme.spacing(2),
  },
  submit: {
    color: 'white',
    marginTop: 10,
    display: 'block',
  },
}));

const Form = () => {
  //  wow that's a LOT of hook
  const { classcode, weeknumber } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const history = useHistory();
  const [formData, setFormData] = useState({
    zid: null,
    classcode,
    week: weeknumber,
    confidence: 3,
    speed: 3,
    overall: 3,
    share: false,
    liked_comment: null,
    improve_comment: null,
    general_comments: null,
  });

  const doSubmitFeedback = () => {
    submitFeedback(formData)
      .then((response) => {
        console.log(response);
        history.goBack();
        enqueueSnackbar('Succesfully submitted feedback! Thank you!!', {
          variant: 'success',
          autoHideDuration: 2000,
        });
      })
      .catch((err) => {
        enqueueSnackbar(`Something went wrong: ${err}`, {
          variant: 'error',
          autoHideDuration: 2000,
        });
      });
  };

  return (
    <Box className={classes.paper} width="80%" height="80%">
      <form>
        <Typography variant="h4" className={classes.label} gutterBottom>
          Feedback for week {weeknumber} tutorial - (note, not live)
        </Typography>

        <TextField
          variant="outlined"
          fullWidth
          id="zid"
          autoFocus
          label="zid - OPTIONAL, so I can see your progress!"
          onChange={(e) => {
            // validation required?
            setFormData({ ...formData, zid: e.target.value });
          }}
        />

        <Typography id="" className={classes.label} gutterBottom>
          How confident did you feel with the content taught today?
        </Typography>

        <Slider
          value={formData.confidence || 3}
          getAriaValueText={(v) => `${v} points`}
          valueLabelFormat={(v) => `${v}pts`}
          aria-labelledby="discrete-points-slider"
          step={1}
          marks={[
            { value: 1, label: '1 - ???' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5 - easy' },
          ]}
          min={1}
          onChange={(_, val) => {
            setFormData({ ...formData, confidence: val });
          }}
          max={5}
        />

        <Typography id="" className={classes.label} gutterBottom>
          How would you rate the tut overall?
        </Typography>

        <Slider
          value={formData.overall || 3}
          getAriaValueText={(v) => `${v} points`}
          valueLabelFormat={(v) => `${v}pts`}
          aria-labelledby="discrete-points-slider"
          step={1}
          marks={[
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5' },
          ]}
          min={1}
          onChange={(_, val) => {
            setFormData({ ...formData, overall: val });
          }}
          max={5}
        />
        <Typography id="" className={classes.label} gutterBottom>
          How did you find the speed of delivery?
        </Typography>

        <Slider
          value={formData.speed || 3}
          getAriaValueText={(v) => `${v} points`}
          valueLabelFormat={(v) => `${v}pts`}
          aria-labelledby="discrete-points-slider"
          step={1}
          marks={[
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3 - Perfect' },
            { value: 4, label: '4' },
            { value: 5, label: '5' },
          ]}
          min={1}
          onChange={(_, val) => {
            setFormData({ ...formData, speed: val });
          }}
          max={5}
        />

        <TextField
          variant="outlined"
          id="standard-multiline-static"
          label="What did you like about the tut?"
          multiline
          className={classes.spacing}
          fullWidth
          onChange={(e) => {
            setFormData({ ...formData, liked_comment: e.target.value });
          }}
        />

        <TextField
          variant="outlined"
          id="standard-multiline-static"
          className={classes.spacing}
          label="What do you think could be improved?"
          multiline
          fullWidth
          onChange={(e) => {
            setFormData({ ...formData, improve_comment: e.target.value });
          }}
        />
        <TextField
          variant="outlined"
          id="standard-multiline-static"
          className={classes.spacing}
          label="Any other comments: feedback, requests, or concerns?"
          multiline
          fullWidth
          onChange={(e) => {
            setFormData({ ...formData, general_comments: e.target.value });
          }}
        />

        <FormControlLabel
          value="Permission to share (anonymously) with the class?"
          control={
            <Checkbox
              color="primary"
              checked={formData.share == null ? true : formData.share}
              onChange={(e) => {
                setFormData({ ...formData, share: e.target.checked });
              }}
            />
          }
          label="Permission to share (anonymously) with the class?"
          labelPlacement="start"
        />
        <Box display="flex" justifyContent="space-between">
          <SlideDialog
            handleRightButtonClick={() => {
              doSubmitFeedback(formData);
            }}
            rightButtonText="Confirm"
            leftButtonText="Go Back"
            description="Check you've answered everything you want to!! I'm too lazy to implement editing submitted feedback!"
            title="Are you finished writing feedback?"
            openButtonText="Submit"
            buttonColour="primary"
          />
          <SlideDialog
            rightButtonText="Confirm"
            leftButtonText="Go Back"
            description="Are you sure you want to leave this page? Your feedback will not be saved :( Please give feedback if you have any!"
            title="Are you want to leave?"
            openButtonText="Cancel"
            buttonColour="secondary"
            handleRightButtonClick={() => {
              history.goBack();
            }}
          />
        </Box>
      </form>
    </Box>
  );
};

const Feedback = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      //   border="1px solid black"
    >
      <CssBaseline />
      <Form />
    </Box>
  );
};

export default Feedback;
