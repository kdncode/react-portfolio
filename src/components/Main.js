import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';
import Contact from './Contact';

const Main = () => (
    <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Landing} />
        <Route path={`${process.env.PUBLIC_URL}/projects`} component={Projects} />
        <Route path={`${process.env.PUBLIC_URL}/resume`} component={Resume} />
        <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
    </Switch>
)

export default Main;