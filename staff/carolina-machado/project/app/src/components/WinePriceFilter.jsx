import { logger, showFeedback } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import React from 'react';
import Home from '../pages/Home'

function WinePriceFilter({ showWines, setShowWines, wineType }) {
  const [wines, setWines] = useState(null);
  const [lowestPrice, setLowestPrice] = useState('');
  const [highestPrice, setHighestPrice] = useState('');
  const [filteredWines, setFilteredWines] = useState(null);

  useEffect(() => {
    try {
      logic.retrieveWines()
        .then(setWines)
        .catch(error => showFeedback(error, 'error'));
    } catch (error) {
      showFeedback(error);
    }
  }, []);

  const handleLowestPriceChange = (event) => {
    setLowestPrice(event.target.value);
  };

  const handleHighestPriceChange = (event) => {
    setHighestPrice(event.target.value);
  };
  
  const handleApplyFilter = () => {
    // Convert prices to numbers
    const minPrice = lowestPrice !== '' ? parseFloat(lowestPrice) : Number.NEGATIVE_INFINITY;
    const maxPrice = highestPrice !== '' ? parseFloat(highestPrice) : Number.POSITIVE_INFINITY;

    const filteredByPrice = wines.filter((wine) => {
      const winePrice = parseFloat(wine.price);
      return winePrice >= minPrice && winePrice <= maxPrice;
    });

    const filteredByTypeAndPrice = filteredByPrice.filter((wine) => wine.type === wineType);

    setFilteredWines(filteredByTypeAndPrice);
  };

  console.log('Filtered Wines:', filteredWines);

  return (
    <>
      <h1 className="flex justify-center mb-4 mt-8 font-semibold">
        Select your wine price:
      </h1>

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
          className="shadow mb-4 appearance-none antialiased border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <button className="bg-white hover:bg-fuchsia-200 py-2 px-16 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased" onClick={handleApplyFilter}>Seek Wine</button>
      </div>

      <div>
        <ul>
          {filteredWines && filteredWines.map((wine) => (
            <li
              className="flex items-center mt-4 border p-50px"
              key={wine._id}
            >
              <img className="w-40 h-40" src={wine.image} alt="wine image" />
              <div>
                <h3 className="text-lg text-gray-700 font-semibold mb-8px">
                  {wine.title}
                </h3>
                <p className="text-ml font-light text-#4a5568">
                  Price: €{wine.price}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default WinePriceFilter;