// @ts-nocheck
import mongoose, { ObjectId } from 'mongoose'

const { Schema, model } = mongoose

const { Types: { ObjectId } } = Schema

type UserType = {

    name: string
    email: string
    password: string

}

const user = new Schema ({

    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }

})

type WineType = {

    id: ObjectId
    image: String
    title: String
    description: String
    type: 'red' | 'white' | 'pink'

}

const wine = new Schema ({

    

    image: {

        type: String,
        required: true,
        
    },

    title: {
        type: String,
        required: true
    }, 

    description: {
        type: String,
        required: true

    },
    type: {
        type: String,
        required: true,
        enum: ['red', 'white', 'pink'] 
    },

    price: {
        type: Number,
        required: true

    }



})

type PointSchemaType = {

    type: 'Point'
    coordinates: [number, number]

}

const pointSchema = new Schema ({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
})

type MarketType = {

    id: ObjectId
    title: String
    location: PointSchemaType
    

}

const market = new Schema ({

    id: {
        type: ObjectId,
        required: true
    },

    title: {
        type: String,
        required: true
    }, 

    location: {
        type: pointSchema,
        required: true
    },

 
})

type ExperienceType = {

    id: ObjectId
    wine: WineType
    market: MarketType
    price: Number

}


const experience = {

    id: {
        type: ObjectId,
        required: true
    },

    wineEx: {
        type: wine,
        required: true

    },

    marketEx: {

        type: market,
        required: true
    },

    price: {
        type: Number,
        required: true

    }



}


const User = model<UserType>('User', user)
const Wine = model<WineType>('Wine', wine)
const PointSchema = model<PointSchemaType>('PointSchema', pointSchema)
const Market = model<MarketType>('Market', market)
const Experience = model<ExperienceType>('Experience', experience)


export {
    UserType,
    User,
    WineType,
    Wine,
    PointSchemaType,
    PointSchema,
    Market,
    MarketType,
    ExperienceType,
    Experience,

}





