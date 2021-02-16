import React from 'react';
import { Route } from 'react-router-dom';
import {
  Home,
  TutorialPage,
  TutorialContentPage,
  GiveFeedbackPage,
  NotFoundPage,
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
  <Route exact key="class" path="/class/:classcode" component={TutorialPage} />,
  <Route key="class" path="/" component={NotFoundPage} />,
];

export default routes;
