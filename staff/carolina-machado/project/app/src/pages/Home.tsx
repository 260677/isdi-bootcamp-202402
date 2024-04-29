// @ts-nocheck
import { logger, showFeedback } from '../utils'
import logic from '../logic'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Logo from '../img/wiineseekertrans2.png'
import Header from '../components/Header'
import WinePriceFilter from '../components/WinePriceFilter'

function Home({ onUserLoggedOut }) {
    const [user, setUser] = useState(null)
    const [wines, setWines] = useState(null)
    const [wineType, setWineType] = useState(null)
    const [showWines, setShowWines] = useState(true); // New state for showing/hiding wines


    useEffect(() => {
        try {
            logic.retrieveWines()
                .then(setWines)
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }, [])

    const onLogout = () => onUserLoggedOut()

    

    const handleSelectWineType = (type) => {
        //setShowWines(prevShowWines => !prevShowWines);
        setShowWines(true)
        setWineType(type)
    }

    console.log('Wines by Type:', wineType)

    return <>

        <main>

            <Header onUserLoggedOut={onLogout} />

            <h1 className="flex justify-center mb-4 mt-8 font-semibold">Select wine by type:</h1>

            <div className="flex justify-center space-x-4">

                <button className="bg-white hover:bg-fuchsia-200 py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased" 
                onClick={() => handleSelectWineType("red")}>Red</button>

                <button className="bg-white hover:bg-fuchsia-200 py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased" onClick={() => handleSelectWineType("white")}>White</button>

                <button className="bg-white hover:bg-fuchsia-200 py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased" onClick={() => handleSelectWineType("pink")}>Pink</button>

            </div>


            {/* <div>
                <ul>
                    {showWines && wines && wines.filter(wine => wineType ? wine.type === wineType : null) 
                    
                        .map((wine) => (
                            <li className="flex items-center mt-4 border shadow-md border-#e2e8f0 p-50px" key={wine._id} >
                                <img className="w-40 h-40 " src={wine.image} alt="wine image"  />
                                <div>
                                    <h3 className="text-lg text-gray-700 font-semibold mb-8px">{wine.title}</h3>
                                    <p className="text-ml font-light text-#4a5568"> Price: €{wine.price}</p>
                                </div>
                            </li>
                        ))}
                </ul>
            </div> */}

            <div>

                <WinePriceFilter wineType={wineType}/>


            </div>

        </main >

    </>

}

export default Home

