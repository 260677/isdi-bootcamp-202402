import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(connection => {
        const db = connection.db('test')

        const users = db.collection('users')
        const posts = db.collection('posts')

        // users.insertOne({ name: 'Pepito Grillo', birthdate: '2000-01-01', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123qwe123' })
        //     .then(result => console.log('inserted', result))
        //     .catch(error => console.error(error))

        // users.insertOne({ name: 'Campa Nilla', birthdate: '2000-01-01', email: 'campa@nilla.com', username: 'campanilla', password: '123qwe123' })
        //     .then(result => console.log('inserted', result))
        //     .catch(error => console.error(error))

         users.findOne({ _id: new ObjectId('66151100e345d985ddaedc0c') })
             .then(user => console.log('user', user))
             .catch(error => console.error(error))

        // users.updateOne({ _id: new ObjectId('66150f8de45b1bc620df4852') }, { $set: { password: '234qwe234' } })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error))

        // users.deleteOne({ _id: new ObjectId('66150f8de45b1bc620df4852') })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error))

        // users.find({ username: { $regex: 'p' } }).toArray()
        //     .then(users => console.log('users', users))
        //     .catch(error => console.error(error))

        // users.find({ username: { $regex: '^p' } }).toArray()
        //     .then(users => console.log('users', users))
        //     .catch(error => console.error(error))

        //posts.insertOne({ owner: new ObjectId('66151100e345d985ddaedc0c'), image: 'https://media.giphy.com/media///////////6rp7rTn3g3wEGP63V0/giphy.gif?cid=790b7611eaem0fdtnb9jatl3580dhx03g6jyqulb7oxtjp2n&ep=v1_gifs_trending&rid=giphy.gif&ct=g', text: 'here, here', date: new Date })
        //    .then(console.log)
        //    .catch(console.error)
    })
    .catch(error => {
        console.error(error)
    })