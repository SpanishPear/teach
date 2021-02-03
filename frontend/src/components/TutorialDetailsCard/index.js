import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
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
  content: {
    paddingBottom: 0,
  },
});

const TutorialDetailsCard = ({ data }) => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {data.course_code}
        </Typography>
        <Typography variant="h5" component="h2">
          {data.classcode}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          With: {data.lab_demonstrator_name}
        </Typography>
      </CardContent>
      <CardActions>
        <Container>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              onClick={() => {
                history.push(`/class/${data.classcode}`);
              }}
              variant="contained"
              color="primary"
              size="small"
            >
              Go
            </Button>
          </Box>
        </Container>
      </CardActions>
    </Card>
  );
};

TutorialDetailsCard.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default TutorialDetailsCard;
