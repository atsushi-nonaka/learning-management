import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { setLearningDataListFromDB } from './actions/data'
import { login, logout } from './actions/auth'
import { firebase } from './firebase/firebase'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRenders = false
const renderApp = () => {
    if(!hasRenders) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRenders = true
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

firebase.auth().onAuthStateChanged(async (user) => {
    if(user) {
        await store.dispatch(setLearningDataListFromDB(user.uid))
        await store.dispatch(login(user.uid))
        renderApp()
        if(history.location.pathname === '/') {
            history.push('/dashboard') 
        }
    }else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})

