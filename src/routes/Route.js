import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import CoursesView from '../courses/CoursesView';
import StudentsView from '../students/StudentsView';

const Routes = () => {
  return <Fragment>
    <Route path="/courses" component={CoursesView}></Route>
    <Route path="/students" component={StudentsView}></Route>
  </Fragment>
}

export default Routes