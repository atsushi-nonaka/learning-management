import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import LearningRegistration from '../components/LearingRegistration'
import LearningEdit from '../components/LearningEdit'
import { MailForm } from '../components/MailForm'
import { NotFoundPage } from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/registration" component={LearningRegistration} />
            <Route path="/edit/:id" component={LearningEdit} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter