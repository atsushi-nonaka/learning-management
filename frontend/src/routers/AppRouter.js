import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Dashboard from '../components/Dashboard'
import LearningRegistration from '../components/LearingRegistration'
import LearningEdit from '../components/LearningEdit'
import LoginPage from '../components/LoginPage'
import { NotFoundPage } from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <PrivateRoute path="/registration" component={LearningRegistration} />
            <PrivateRoute path="/edit/:id" component={LearningEdit} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
)

export default AppRouter