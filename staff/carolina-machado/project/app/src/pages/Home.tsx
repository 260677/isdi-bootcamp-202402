// @ts-nocheck
import { logger, showFeedback } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Logo from '../img/wiineseekertrans2.png'
import Header from '../components/Header'

function Home({ onUserLoggedOut }) {
    const [user, setUser] = useState(null)
    const [view, setView] = useState(null)
    const [stamp, setStamp] = useState(null)
    const [wines, setWines] = useState(null)

    /*useEffect(() => {
        try {
            logic.retrieveUser()
                .then(setUser)
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }, [])
    */

    useEffect(() => {
        try {
            logic.retrieveWines()
                .then(setWines)
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }, [])

    //console.log(typeof wines, wines)

    /*
    const handleLogoutClick = () => {
        try {
            logic.logoutUser()
        } catch (error) {
            logic.cleanUpLoggedInUserId()
        } finally {
            onUserLoggedOut()
        }
    }
    */

    return <>

        <main>

            <Header />

            {wines && <ul>{wines.map(wine => (
                <li key={wine._id}>
                    {wine.title}
                </li>
            ))}</ul>}


        </main>








    </>
}

export default Home

