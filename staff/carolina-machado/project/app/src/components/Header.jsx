
import { logger, showFeedback } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Logo from '../img/wiineseekertrans2.png'
import exiticon from '../img/blacklogouticon.svg'

function Header({ onUserLoggedOut }) {
    const [user, setUser] = useState(null)

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

    return (
        <header className="bg-fuchsia border shadow-sm shadow-fuchsia-700">
            <div className="flex justify-center">
                <img
                className="w-36 flex"
                src={Logo}
                alt="logo"
                />
            </div>
        <div className="flex items-center">
            {user && <h1 className="text-black-500 text-sm font-light absolute top-2 right-4">{user.name}</h1>}
            <button className="absolute top-8 right-4" onClick={handleLogoutClick}>
                <img className="w-5" src={exiticon} alt="exit" />
            </button>
        </div>
    </header >
    );
}


export default Header