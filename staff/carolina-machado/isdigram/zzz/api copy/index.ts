//@ts-nocheck

import express from 'express'
import logic from './logic/index.ts'

const api = express()

const jsonBodyParser = express.json()

api.post('/users', jsonBodyParser, (req, res) => {
    try {
        const { name, birthdate, email, username, password } = req.body

        logic.registerUser(name, birthdate, email, username, password, error => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(201).send()
        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})



// TODO login user -> POST /users/auth

api.post('/users/auth', jsonBodyParser, (req, res) => {
    try {
        const { username, password } = req.body

        logic.loginUser(username, password, error => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(201).send()
        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})


// TODO retrieve user -> GET /users


api.get("/users/:userId", jsonBodyParser, (req, res) => {
    try {
      logic.retrieveUser(req.params.userId, (error, user) => {
        if (error) {
          res
            .status(500)
            .json({ error: error.constructor.name, message: error.message });
  
          return;
        }
  
        if (user) {
          res.status(200).send(`<!DOCTYPE html>
                  <html lang="en">
  
                  <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>API</title>
                  </head>
  
                  <body>
                      <h1>La APP es API</h1>
  
                      <p>${user.name}</p>
                      <p>${user.birthdate}</p>
                      <p>${user.email}</p>
                      <p>${user.username}</p>
                      
                  </body>
  
                  </html>`);
        } else {
          res.status(404).json(null);
        }
      });
    } catch (error) {
      res.status(500).json(null);
    }
});

// TODO retrieve posts -> GET /posts

// Logout User:

api.patch("/users/:userId", jsonBodyParser, (req, res) => {
  logic.logoutUser(req.params.userId, (error, user) => {
    if (error) {
      res
        .status(400)
        .json({ error: error.constructor.name, message: error.message });

      return;
    }
    if (!user) {
      res.status(404);
    } else {
      res.status(200).json(user.status);
    }
  });
});



api.listen(8080, () => console.log('API listening on port 8080'))