import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, CircularProgress } from '@material-ui/core';
import { TutorialContentCard } from '../../components';
import API_URL from '../../api';

const LandingPage = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    const url = `${API_URL}/tutorials`;
    axios.get(url).then((res) => setTutorials(res.data[0]));
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {tutorials.tutorial_contents !== undefined ? (
        tutorials.tutorial_contents
          .slice()
          // .reverse() -- perhaps itd be better with the most recent tut first?
          .map((data) => (
            <TutorialContentCard
              subject={tutorials.course_code}
              key={data.id}
              data={data}
            />
          ))
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default LandingPage;
