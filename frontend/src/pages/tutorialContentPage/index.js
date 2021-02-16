/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from '@material-ui/core';
import { Link, SaveAlt } from '@material-ui/icons/';

import API_URL, { getClassData } from '../../api';
import SlidesEmbed from '../../components/SlidesEmbed';

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
            <Typography variant="h3" component="h3" align="center">
              {content.title}
            </Typography>
            <SlidesEmbed link={content.slides_link} />
            <Box mt={2}>
              <Typography variant="h4" component="h4">
                Links and Resources
              </Typography>
            </Box>
            <Box mt={2}>
              {content.length !== 0 &&
                content.code_snippet.map(({ link, title }) => {
                  const query = link.split('?');
                  let download = `${link}.zip`;
                  if (query.length > 1) {
                    download = `${query[0]}.zip`;
                  }
                  return (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mb={2}
                    >
                      <Typography variant="p" component="p">
                        • {title}
                      </Typography>
                      <Box ml={2}>
                        <Button
                          href={link}
                          startIcon={<Link />}
                          target="_blank"
                          variant="contained"
                          color="primary"
                        >
                          View
                        </Button>
                      </Box>
                      <Box ml={2}>
                        <Button
                          href={download}
                          startIcon={<SaveAlt />}
                          target="_blank"
                          variant="contained"
                          color="primary"
                        >
                          Download
                        </Button>
                      </Box>
                    </Box>
                  );
                })}
            </Box>
          </Box>
        );
      })()}
    </Container>
  );
};

export default TutorialContentPage;
