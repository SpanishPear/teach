import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { TutorialOverviewCard } from '../../components';
import API_URL from '../../api';

const LandingPage = () => {
  const [tutorial, setTutorial] = useState([]);
  const { classcode } = useParams();

  useEffect(() => {
    const url = `${API_URL}/all-tutorials`;
    axios.get(url).then((res) => {
      res.data.forEach((_, i) => {
        // console.log(res.data[i].Tutorial.classcode);
        if (res.data[i].Tutorial.classcode === classcode) {
          setTutorial(res.data[i].Tutorial);
        }
      });
    });
  }, [classcode]);

  return tutorial === undefined ? (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      404 Class not found
    </Box>
  ) : (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {tutorial.weeks !== undefined ? (
        tutorial.weeks
          .slice()
          .map((weekNum) => (
            <TutorialOverviewCard
              subject={tutorial.coursecode}
              key={weekNum}
              weekNum={weekNum}
            />
          ))
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default LandingPage;
