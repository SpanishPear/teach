/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  Slider,
  TextField,
  Checkbox,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
  makeStyles,
} from '@material-ui/core';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

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
  const classes = useStyles();
  const { classcode, weeknumber } = useParams();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const history = useHistory();
  const location = useLocation();
  const [formData, setFormData] = useState({
    zid: null,
    confidence: 3,
    speed: 3,
    overall: 3,
    share: false,
    liked: null,
    improved: null,
    comments: null,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    history.goBack();

    enqueueSnackbar('Succesfully submitted feedback! Thank you!!', {
      variant: 'success',
      autoHideDuration: 2000,
    });
  };
  return (
    <Box className={classes.paper} width="80%" height="80%">
      <form onSubmit={handleSubmit}>
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
            { value: 5, label: '5 - can do this in my sleep' },
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
            { value: 1, label: '1 - Literally falling asleep' },
            { value: 2, label: '2' },
            { value: 3, label: '3 - Perfect' },
            { value: 4, label: '4' },
            { value: 5, label: '5 - Too Fast!!' },
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
            setFormData({ ...formData, liked: e.target.value });
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
            setFormData({ ...formData, improved: e.target.value });
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
            setFormData({ ...formData, comments: e.target.value });
          }}
        />

        <FormControlLabel
          value="Permission to share (anonymously) with the class?"
          control={
            <Checkbox
              color="primary"
              checked={formData.share ?? true}
              onChange={(e) => {
                setFormData({ ...formData, share: e.target.checked });
              }}
            />
          }
          label="Permission to share (anonymously) with the class?"
          labelPlacement="start"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Submit
        </Button>
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
