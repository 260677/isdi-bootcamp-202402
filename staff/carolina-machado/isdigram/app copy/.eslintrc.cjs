

import utils from '../utils'
import logic from '../logic'
import { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
    }

    render() {
        try {
            const user = logic.retrieveUser();
            return (
                <main>
                    <h1>Hello, {user.name}!</h1>
                </main>
            );
        } catch (error) {
            utils.showFeedback(error);
            return null; // Or display an error message here
        }
    }
}

export default Home