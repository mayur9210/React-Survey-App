import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppPage from './containers/appPage';
import HomePage from './containers/homePage';
import SurveyPage from './containers/surveyPage';


const Routes = () => (
    <Route path="/" component={AppPage}>
        <IndexRoute component={HomePage} />
        <Route path="survey" component={SurveyPage} />
    </Route>
);
export default Routes;

