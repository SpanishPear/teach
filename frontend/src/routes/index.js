import React from 'react';
import { Route } from 'react-router-dom';
import {
  Home,
  TutorialPage,
  TutorialContentPage,
  GiveFeedbackPage,
} from '../pages';

const routes = [
  <Route key="home" exact path="/" component={Home} />,
  <Route
    exact
    key="week-content"
    path="/class/:classcode/week/:weeknumber/content"
    component={TutorialContentPage}
  />,
  <Route
    exact
    key="week-content"
    path="/class/:classcode/week/:weeknumber/feedback"
    component={GiveFeedbackPage}
  />,
  <Route key="class" path="/class/:classcode" component={TutorialPage} />,
];

export default routes;
