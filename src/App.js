import React from 'react'
import { Main } from './pages/Main'
import { Header } from './features/Header'
import styles from './App.module.scss'

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <Main />
        </div>
    )
}

export default App
