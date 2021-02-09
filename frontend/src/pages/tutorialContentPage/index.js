import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Box,
  CircularProgress,
  Container,
  Typography,
} from '@material-ui/core';
import API_URL, { getClassData } from '../../api';
import SlidesEmbed from '../../components/SlidesEmbed';
import { ReplEmbed } from '../../components';

const TutorialContentPage = () => {
  const [tutorial, setTutorial] = useState([]);
  const [content, setContent] = useState([]);
  // const classes = useStyles();

  const { classcode, weeknumber } = useParams();

  useEffect(() => {
    // TODO - This is being called multiple times? See network tab for more

    getClassData(classcode, setTutorial);

    axios
      .get(`${API_URL}/tutorial-content?week=${weeknumber}`)
      .then((res) => setContent(res.data[0]));
  }, [weeknumber, classcode]);

  return (
    // here be the devils code - IIFE inside IIFE
    // TODO - refactor
    <Container>
      {(() => {
        // theres definitely nicer way to do error handling but.. whatever

        if (tutorial === undefined) {
          return (
            <Typography variant="h1">
              Unable to get class {classcode}
            </Typography>
          );
        }

        if (content === undefined) {
          return <Box> Unable to fetch content for week {weeknumber} </Box>;
        }

        if (content.length === 0 && tutorial.length === 0) {
          return <CircularProgress />;
        }

        return (
          <Box
            mt={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h2" component="h2" align="center">
              {content.title}
            </Typography>
            <SlidesEmbed link={content.slides_link} />
            {content.length !== 0 &&
              content.code_snippet.map(({ link, platform, title }) => {
                return (() => {
                  switch (platform) {
                    case 'repl':
                      return (
                        <Box>
                          <ReplEmbed link={link} title={title} />{' '}
                        </Box>
                      );
                    case 'github':
                      return <p>github not supported</p>;
                    case 'gitlab':
                      return <p>gitlab not supported</p>;
                    default:
                      return null;
                  }
                })();
              })}
          </Box>
        );
      })()}
    </Container>
  );
};

export default TutorialContentPage;
