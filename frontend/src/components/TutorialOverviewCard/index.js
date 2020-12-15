import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import API_URL from '../../api';
// modified from https://material-ui.com/components/cards/

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

const TutorialOverviewCard = ({ weekNum, subject }) => {
  const classes = useStyles();
  const [content, setContent] = useState();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const url = `${API_URL}/tutorial-content?week=${weekNum}`;
    axios.get(url).then((res) => setContent(res.data[0]));
  }, [weekNum]);

  console.log(location.pathname);

  return (
    <Card className={classes.root}>
      <CardContent>
        {content === undefined ? (
          <CircularProgress />
        ) : (
          <Box>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {subject}
            </Typography>
            <Typography variant="h5" component="h2">
              {content.title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Week {content.week}
            </Typography>
            <ul>
              {[...content.topics].map((item) => (
                // hacky capitalise
                <li key={item.id}>
                  {item.topic.charAt(0).toUpperCase() + item.topic.slice(1)}
                </li>
              ))}
            </ul>
          </Box>
        )}
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            history.push(`${location.pathname}/content/${content.week}`);
          }}
        >
          View Content
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {}}
        >
          Give Feedback
        </Button>
      </CardActions>
    </Card>
  );
};

TutorialOverviewCard.propTypes = {
  // data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  subject: PropTypes.string.isRequired,
  weekNum: PropTypes.number.isRequired,
};

export default TutorialOverviewCard;
