import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';

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

const TutorialOverviewCard = ({ data, subject }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {subject}
        </Typography>
        <Typography variant="h5" component="h2">
          {data.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {data.week}
        </Typography>
        <ul>
          {[...data.topics].map((item) => (
            // hacky capitalise
            <li key={item.id}>
              {item.topic.charAt(0).toUpperCase() + item.topic.slice(1)}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onclick={() => {}}
        >
          View Content
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onclick={() => {}}
        >
          Give Feedback
        </Button>
      </CardActions>
    </Card>
  );
};

TutorialOverviewCard.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  subject: PropTypes.string.isRequired,
};

export default TutorialOverviewCard;
