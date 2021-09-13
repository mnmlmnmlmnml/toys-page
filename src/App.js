import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styles from './App.module.scss'
import { Main } from './pages/Main'

import { Header } from './features/Header'

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/' exact component={Main} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
