import mongoose, { ObjectId } from 'mongoose'

const { Schema, model } = mongoose

const { Types: { ObjectId } } = Schema

type UserType = {

    name: string
    birthdate: date
    email: string
    username: string
    password: string

}

const user = new Schema ({

    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }


})