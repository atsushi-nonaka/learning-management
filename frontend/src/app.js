import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { setLearningDataListFromDB } from './actions/data'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

var firebaseConfig = {
    apiKey: "AIzaSyAUTaHHoAydCeM1sHOu5rpwBpghD6O3bo0",
    authDomain: "learning-management-2850c.firebaseapp.com",
    databaseURL: "https://learning-management-2850c.firebaseio.com",
    projectId: "learning-management-2850c",
    storageBucket: "learning-management-2850c.appspot.com",
    messagingSenderId: "618198019832",
    appId: "1:618198019832:web:01e272441a6b10ed2f150d",
    measurementId: "G-0STHXHT9YP"
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

store.dispatch(setLearningDataListFromDB()).then(() =>{
    ReactDOM.render(jsx, document.getElementById('app'))
})

