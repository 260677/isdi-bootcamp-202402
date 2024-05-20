import registerUser from './registerUser.ts'
import authenticateUser from './authenticateUser.ts'
import retrieveUser from './retrieveUser.ts'
// import retrieveWines from './retrieveWines.ts'
import findWinesAndMarkets from './findWinesAndMarkets.ts'
import addNewRating from './addNewRating.ts'
import retrieveWineById from './retrieveWinebyId.ts'

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    // retrieveWines,
    findWinesAndMarkets,
    addNewRating,
    retrieveWineById

}

export default logic