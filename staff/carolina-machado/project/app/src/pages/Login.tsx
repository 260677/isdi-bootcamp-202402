// @ts-nocheck
import logic from '../logic'


import { logger, showFeedback } from '../utils'

function Login({ onUserLogin, onRegisterUser }) {

    const handleSubmit = event  => {
        event.preventDefault()

        const form = event.target 

        const username = form.username.value 
        const password = form.password.value 

        try {

            logic.loginUser(username, password)
                .then(() => {

                    form.reset 

                    onUserLoggedIn()

                })
                .catch(error => showFeedback(error, 'error'))

        
        } catch (error) {
            showFeedback (error)
        }


    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }


    return <main>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input id="username" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" />

            <button type='submit'>Login</button>

        </form>

        <a href="" onClick={handleRegisterClick}>Register</a>

    </main>
}

export default Login
