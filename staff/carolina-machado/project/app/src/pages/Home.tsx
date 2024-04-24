// @ts-nocheck
import { logger, showFeedback } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Logo from './pics/wiineseekertrans2.png'

function Home ({ onUserLoggedOut }) {
    const [user, setUser] = useState(null)
    const [view, setView] = useState(null)
    const [stamp, setStamp] = useState(null)

    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(setUser)
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }, [])



    const handleLogoutClick = () => {
        try {
            logic.logoutUser()
        } catch (error) {
            logic.cleanUpLoggedInUserId()
        } finally {
            onUserLoggedOut()
        }
    }

    return <>
    
        <header className="px-[5vw] fixed top-0 bg-white w-full">
        <div>
                <img
                    className="mx-auto w-48"
                    src={Logo}
                    alt="logo" />
            </div>
        <div className="flex justify-center" >
        {user && <h1>{user.name}</h1>}
        </div>
        <nav>

        <button className="bg-purple-700  text-white rounded-[5px] border-[1px] border-black my-[10px] p-2" onClick={handleLogoutClick}>Logout</button>

        </nav>

       

        </header>

    </>
}

export default Home

