function findWines(userId:string, criteria: { type?: string, minPrice?:number, maxPrice?:number, proximity?:number} ):Promise<{ id: string, image:string, title:string, price:number} []> {
    return Promise.resolve([
        { id: '123', image: 'https://...', title: 'Red Square', price: 12 },
        { id: '345', image: 'https://...', title: 'Red Square 2', price: 14 }
    ])
}

export default findWines