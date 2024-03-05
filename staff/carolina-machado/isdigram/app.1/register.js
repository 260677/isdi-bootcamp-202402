<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
</head>

<body>
    <main>
        <h1>Register</h1>

        <form action="">
            <label for="name">Name</label>
            <input type="text" id="name">

            <label for="birthdate">Age</label>
            <input type="date" name="" id="birthdate">

            <label for="email">E-mail</label>
            <input type="email" name="" id="email">

            <label for="username">Username</label>
            <input type="text" id="username">

            <label for="password">Password</label>
            <input type="password" name="" id="password">

            <button type="submit">Register</button>

            <a href="login.html">Login</a>
        </form>
    </main>

    <style>
        main {
            margin: 0 20vw;
        }

        form {
            display: flex;
            flex-direction: column;
        }
    </style>

    <script>
        // utils

        function block(millis) {
            var before = Date.now()
            //for (; Date.now() - before < 3000;);
            while (Date.now() - before < millis);
        }

        // data

        var users = [
            {
                name: 'Peter Pan',
                birthdate: '2001-01-01',
                email: 'peter@pan.com',
                username: 'peterpan',
                password: '123123123'
            }
        ]

        // presentation

        var form = document.querySelector('form')

        form.addEventListener('submit', function (event) {
            console.log('form submit')

            event.preventDefault()

            var nameInput = document.getElementById('name')
            var name = nameInput.value

            var birthdateInput = document.getElementById('birthdate')
            var birthdate = birthdateInput.value

            var emailInput = document.getElementById('email')
            var email = emailInput.value

            var usernameInput = document.getElementById('username')
            var username = usernameInput.value

            var passwordInput = document.getElementById('password')
            var password = passwordInput.value

            try {
                // business (logic)

                function registerUser(name, birthdate, email, username, password) {
                    var exists = users.some(function (user) {
                        return user.email === email || user.username === username
                    })

                    if (exists) throw new Error('user already exists')

                    var user = {
                        name: name,
                        birthdate: birthdate,
                        email: email,
                        username: username,
                        password: password
                    }

                    users.push(user)
                }

                registerUser(name, birthdate, email, username, password)

                form.reset()
            } catch (error) {
                alert(error.message)
            }
        })
    </script>
</body>

</html>