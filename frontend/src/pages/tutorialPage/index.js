import React, { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { TutorialOverviewCard } from '../../components';
import { getClassData } from '../../api';

const LandingPage = () => {
  const [tutorial, setTutorial] = useState([]);
  const { classcode } = useParams();

  useEffect(() => {
    getClassData(classcode, setTutorial);
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
