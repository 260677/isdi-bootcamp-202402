// @ts-nocheck
import { logger, showFeedback } from '../utils'
import logic from '../logic'
import pics from './pics'
import Logo from './pics/wiineseekertrans2.png'

function Register({ onUserRegistered, onLoginClick }) {

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        try {
            logic.registerUser(name, email, password)
                .then(() => {
                    form.reset()

                    onUserRegistered()
                })
                .catch(error => showFeedback(error, 'error'))

        } catch (error) {
            showFeedback(error)
        }

    }

    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }

    return <>
        <main>
            <div>
                <img
                    className="mx-auto w-[200px]"
                    src={Logo}
                    alt="logo" />
            </div>

            <div className="flex flex-col items-center justify-center">

                <h1 className="font-bold text-xl text-fuchsia-800 antialiased font-sans">REGISTER</h1>

                <form className="bg-white flex flex-col items-center justify-center shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md" onSubmit={handleSubmit}>

                    <label className="block text-gray-700 text-ml mb-2 font-semibold" htmlFor="name">Name</label>
                    <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="name" id="name" />

                    <label className="block text-gray-700 text-ml mb-2 font-semibold" htmlFor="email">E-mail</label>
                    <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" />

                    <label className="block text-gray-700 text-ml mb-2 font-semibold" htmlFor="email" htmlFor="password">Password</label>
                    <input className="shadow appearance-none border border-fuchsia-700 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" />

                    <button className="bg-fuchsia-800 hover:bg-purple-900 text-white font- py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>Register</button>

                    <a href="" className="inline-block align-baseline italic text-sm text-fuchsia-700 hover:text-purple-900" onClick={handleLoginClick}>Login</a>

                </form>


            </div>



        </main>
    </>
}


export default Register