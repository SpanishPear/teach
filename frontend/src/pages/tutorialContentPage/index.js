import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Box,
  CircularProgress,
  Container,
  Typography,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import API_URL from '../../api';
import SlidesEmbed from '../../components/SlidesEmbed';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '30%',
    marginTop: '10px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const TutorialContentPage = () => {
  const [content, setContent] = useState();
  const classes = useStyles();

  const { weeknumber } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/tutorial-content?week=${weeknumber}`)
      .then((res) => setContent(res.data[0]));
  }, [weeknumber]);

  return (
    <Container>
      {content === undefined ? (
        <CircularProgress />
      ) : (
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
          {content.code_snippet.map(({ link, platform, title }) => {
            return (
              <Paper className={classes.card}>
                {link}
                {platform}
                {title}
              </Paper>
            );
          })}
        </Box>
      )}
    </Container>
  );
};

export default TutorialContentPage;

/*

content['code-snippet'].map(({ link, platform, title }) => {
            console.log(link, platform, title);
            return (
              <Box>
                {link}
                {platform}
                {title}
              </Box>
            );
          })

*/
