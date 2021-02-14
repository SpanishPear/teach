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
  TextField,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
import { useParams } from 'react-router-dom';

const Form = () => {
  const { classcode, weeknumber } = useParams();

  const [formData, setFormData] = useState({
    zid: null,
  });

  return (
    <Box>
      <Paper>
        <form>
          <TextField
            variant="outlined"
            fullWidth
            id="zid"
            autoFocus
            onChange={(e) => {
              // validation required?
              setFormData({ ...formData, zid: e.target.value });
            }}
          />
        </form>
      </Paper>
    </Box>
  );
};

const Feedback = () => {
  return (
    <Box>
      <CssBaseline />
      <Form />
    </Box>
  );
};

export default Feedback;
