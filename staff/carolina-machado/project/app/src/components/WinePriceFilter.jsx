import { logger, showFeedback } from '../utils'
import logic from '../logic'
import { errors } from 'com'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import React from 'react';
import { NotFoundError } from 'com/errors'
import { useContext } from '../context.ts'

function WinePriceFilter({ coordinates }) {
  const { showFeedback, showConfirm } = useContext()
  const [lowestPrice, setLowestPrice] = useState('')
  const [highestPrice, setHighestPrice] = useState('')
  const [proximityRange, setProximityRange] = useState('' || 1000)
  const [filteredWines, setFilteredWines] = useState([])
  const [selectedType, setSelectedType] = useState('')

  const handleLowestPriceChange = (event) => {
    setLowestPrice(event.target.value)
  }

  const handleHighestPriceChange = (event) => {
    setHighestPrice(event.target.value)
  }

  const handleProximityChange = (range) => {
    setProximityRange(range)
  }

  const handleSelectType = (type) => {
    setSelectedType(type)
  }

  const handleApplyFilter = async () => {
    try {
      const minPrice = lowestPrice !== '' ? parseFloat(lowestPrice) : Number.NEGATIVE_INFINITY;
      const maxPrice = highestPrice !== '' ? parseFloat(highestPrice) : Number.POSITIVE_INFINITY;

      let proximity;
      switch (proximityRange) {
        case '0-250':
          proximity = 250;
          break;
        case '250-500':
          proximity = 500;
          break;
        case '500-750':
          proximity = 750;
          break;
        case '750-1000':
          proximity = 1000;
          break;
        default:
          proximity = '';
          break;
      }

      const type = selectedType;

      const fetchData = async () => {
        try {
          const data = await logic.findWinesAndMarkets({ coordinates, proximity, minPrice, maxPrice, type });
          setFilteredWines(data);
          console.log('filteredWines:', data); // Log the data fetched
        } catch (error) {
          showFeedback(error);
        }
      };

      await fetchData(); // Call the async function to fetch data

    } catch (error) {
      showFeedback(error)
    }
  };

  console.log('Rate:', filteredWines.rates)

  function renderStars(rate) {
    const filledStars = '★'.repeat(rate)
    const emptyStars = '☆'.repeat(5 - rate)
    return `${filledStars}${emptyStars} (${rate}/5)`
  }



  return (
    <>



      <h1 className="flex justify-center mb-4 mt-8 font-semibold">
        Select your wine price:
      </h1>


      <h1 className="flex justify-center text-fuchsia-800 antialiased mb-2 font-semibold">
        Distance (up to):</h1>


      <div className="flex justify-center space-x-4 mb-2">
        <button className="bg-white hover:bg-fuchsia-200 py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 w-16 h-16 rounded-full bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased flex items-center justify-center" value={proximityRange} onClick={() => handleProximityChange('0-250')}>
          250mt
        </button>
        <button className="bg-white hover:bg-fuchsia-200 py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 w-16 h-16 rounded-full bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased flex items-center justify-center" value={proximityRange} onClick={() => handleProximityChange('250-500')}>
          500mt
        </button>
        <button className="bg-white hover:bg-fuchsia-200 py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 w-16 h-16 rounded-full bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased flex items-center justify-center" value={proximityRange} onClick={() => handleProximityChange('500-750')}>
          750mt
        </button>
        <button className="bg-white hover:bg-fuchsia-200 py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 w-16 h-16 rounded-full bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased flex items-center justify-center" value={proximityRange} onClick={() => handleProximityChange('750-1000')}>
          1km
        </button>
      </div>


      <div className="price-filter flex flex-col items-center mt-4 mb-4">
        <label htmlFor="lowest-price" className="flex justify-center text-fuchsia-800 antialiased mb-2 font-semibold">
          Lowest Price:
        </label>
        <input
          type="number"
          id="lowest-price"
          value={lowestPrice}
          onChange={handleLowestPriceChange}
          className="shadow mb-4 appearance-none antialiased border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <label htmlFor="highest-price" className="flex justify-center antialiased mb-2 font-semibold text-fuchsia-800">
          Highest Price:
        </label>
        <input
          type="number"
          id="highest-price"
          value={highestPrice}
          onChange={handleHighestPriceChange}
          className="shadow mb-2 appearance-none antialiased border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <h1 className="flex justify-center mb-2 font-semibold">Select wine by type:</h1>
      <div className="flex justify-center space-x-4">
        <button className="bg-white hover:bg-fuchsia-200 py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased" onClick={() => handleSelectType("red")}>Red</button>
        <button className="bg-white hover:bg-fuchsia-200 py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased" onClick={() => handleSelectType("white")}>White</button>
        <button className="bg-white hover:bg-fuchsia-200 py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased" onClick={() => handleSelectType("pink")}>Pink</button>
      </div>

      <div className="flex justify-center mb-2">
        <button className="bg-white hover:bg-fuchsia-200 py-2 px-16 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased" onClick={handleApplyFilter}>Seek Wine</button>
      </div>

      <div>
        <ul>
          {Array.isArray(filteredWines.wines) && filteredWines.wines.map((wine) => (
            <li className="flex items-center mt-4 border p-50px" key={wine.id}>
              <img className="w-40 h-40" src={wine.image} alt="wine image" />
              <div>
                <h3 className="text-lg text-gray-700 font-semibold mb-8px">
                  {wine.title}
                </h3>
                <p className="text-gray-600 font-light">
                  Price: €{wine.price}
                </p>
                <p className="text-yellow-700 font-light">
                  {renderStars(wine.rates)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default WinePriceFilter