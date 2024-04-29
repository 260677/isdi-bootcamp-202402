import findWines from './findWines'

// describe ...

// TODO happy path for finding red wines in a collection of 2 red wines and 1 white one
// it ... 
() => {
    const userId = '123'

    return findWines(userId, { type: 'red'})
        .then(wines => {
            // TODO check wines are only 2 and they are all red ones
        })
}