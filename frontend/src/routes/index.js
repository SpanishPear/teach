import React from 'react';
import { Route } from 'react-router-dom';
import { Home, TutorialPage } from '../pages';

const routes = [
  <Route key="home" exact path="/" component={Home} />,
  <Route key="class" path="/class/:classcode" component={TutorialPage} />,
];

export default routes;
