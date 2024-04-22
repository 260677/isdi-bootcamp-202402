import { validate, errors } from 'com'

function registerUser(name, birthdate, email, username, password) {
    validate.text(name, 'name')
    validate.date(birthdate, 'birthdate')
    validate.email(email)
    validate.text(username, 'username', true)
    validate.password(password)

    const user = { name, birthdate, email, username, password }

    const json = JSON.stringify(user)

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': application/json
        },
        body: json

    })
        .then(res => {
            if (res.status === 201) return

            return res.json()
                .then(body => {

                    const { error, message } = body
                    
                    const contructor = errors[error]

                    throw new contructor(message)
                })
        })

}



export default registerUser