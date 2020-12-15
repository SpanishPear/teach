import React from 'react';
import { Route } from 'react-router-dom';
import { Home, TutorialPage, TutorialContentPage } from '../pages';

const routes = [
  <Route key="home" exact path="/" component={Home} />,
  <Route
    exact
    key="week-content"
    path="/class/:classcode/content/:weeknumber"
    component={TutorialContentPage}
  />,
  <Route key="class" path="/class/:classcode" component={TutorialPage} />,
];

export default routes;
