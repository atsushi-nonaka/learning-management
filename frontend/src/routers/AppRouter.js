import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import LearningRegistration from '../components/LearingRegistration'
import LearningEdit from '../components/LearningEdit'
import LoginPage from '../components/LoginPage'
import { NotFoundPage } from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={LoginPage} exact/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/registration" component={LearningRegistration} />
            <Route path="/edit/:id" component={LearningEdit} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter