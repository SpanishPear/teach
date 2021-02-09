/* eslint-disable no-unused-vars */
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TutorialDetailsCard } from '../../components';
import API_URL from '../../api';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    width: '30%',
    marginTop: '10px',
    marginRight: 40,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    paddingBottom: 0,
  },
  primary: {
    color: '#4f4f4f',
    textAlign: 'center',
  },
  secondary: {
    color: '#378199',
    textAlign: 'center',
  },
  container: {
    [theme.breakpoints.down('729')]: {
      flexDirection: 'column',
    },
  },
  headings: {
    [theme.breakpoints.down('729')]: {
      marginTop: 10,
    },
  },
}));

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    Axios.get(`${API_URL}/all-tutorials`).then((res) => setTutorials(res.data));
  }, []);

  return (
    <Box
      height="80vh"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Box className={classes.headings} mt={20}>
        <Typography className={classes.primary} variant="h1" component="h1">
          Shrey&apos;s Teaching Site
        </Typography>
        <Typography className={classes.secondary} variant="h5" component="h5">
          Collection of class resources, feedback, etc for Shrey&apos;s students
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        height="60%"
        width="60%"
        className={classes.container}
      >
        {[...tutorials].map((t) => (
          <TutorialDetailsCard key={t.id} data={t.Tutorial} />
        ))}
      </Box>
    </Box>
  );
};
export default Home;
