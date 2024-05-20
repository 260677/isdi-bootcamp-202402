import logic from '../logic'
import { useState, useEffect } from 'react'
import React from 'react'
import { useContext } from '../context.ts'
import ExpandedWineDetails from './ExpandedWineDetails'

function WinePriceFilter({ coordinates }) {
  const { showFeedback } = useContext();
  const [lowestPrice, setLowestPrice] = useState('')
  const [highestPrice, setHighestPrice] = useState('')
  const [proximityRange, setProximityRange] = useState('' || 1000)
  const [filteredWines, setFilteredWines] = useState([])
  const [selectedType, setSelectedType] = useState('')
  const [isPressed250, setIsPressed250] = useState(false)
  const [isPressed500, setIsPressed500] = useState(false)
  const [isPressed750, setIsPressed750] = useState(false)
  const [isPressed1km, setIsPressed1km] = useState(false)
  const [isPressedWhite, setIsPressedWhite] = useState(false)
  const [isPressedRed, setIsPressedRed] = useState(false)
  const [isPressedPink, setIsPressedPink] = useState(false)
  const [expandedWine, setExpandedWine] = useState(null)

  const handleLowestPriceChange = (event) => {
    setLowestPrice(event.target.value)
  }

  const handleHighestPriceChange = (event) => {
    setHighestPrice(event.target.value)
  }

  const handleProximityChange = (range) => {
    setProximityRange(range)
    switch (range) {
      case '250':
        setIsPressed250(true)
        setIsPressed500(false)
        setIsPressed750(false)
        setIsPressed1km(false)
        break
      case '500':
        setIsPressed250(false)
        setIsPressed500(true)
        setIsPressed750(false)
        setIsPressed1km(false)
        break
      case '750':
        setIsPressed250(false)
        setIsPressed500(false)
        setIsPressed750(true)
        setIsPressed1km(false)
        break
      case '1km':
        setIsPressed250(false)
        setIsPressed500(false)
        setIsPressed750(false)
        setIsPressed1km(true)
        break
      default:
        setProximityRange(1000)
        break
    }
  }

  const handleSelectType = (type) => {
    setSelectedType(type);
    switch (type) {
      case 'red':
        setIsPressedRed(true)
        setIsPressedWhite(false)
        setIsPressedPink(false)
        break

      case 'white':
        setIsPressedRed(false)
        setIsPressedWhite(true)
        setIsPressedPink(false)
        break

      case 'pink':
        setIsPressedRed(false)
        setIsPressedWhite(false)
        setIsPressedPink(true)
        break
    }
  }

  const handleApplyFilter = async () => {
    try {
      const minPrice = lowestPrice !== '' ? parseFloat(lowestPrice) : Number.NEGATIVE_INFINITY;
      const maxPrice = highestPrice !== '' ? parseFloat(highestPrice) : Number.POSITIVE_INFINITY;

      let proximity;
      switch (proximityRange) {
        case '250':
          proximity = 250
          break
        case '500':
          proximity = 500
          break
        case '750':
          proximity = 750
          break
        case '1km':
          proximity = 1000
          break
        default:
          proximity = 1000
          break
      }

      const type = selectedType

      const fetchData = async () => {
        try {
          const data = await logic.findWinesAndMarkets({ coordinates, proximity, minPrice, maxPrice, type });
          setFilteredWines(data);
          console.log('filteredWines:', data);
        } catch (error) {
          showFeedback("An error occurred while fetching data.");
        }
      };

      await fetchData();
    } catch (error) {
      showFeedback("An error occurred while applying filters.");
    }
  };

  function renderStars(rate) {
    const filledStars = '★'.repeat(rate);
    const emptyStars = '☆'.repeat(6 - rate);
    return `${filledStars}${emptyStars} (${rate}/5)`
  }

  useEffect(() => {
    console.log('Expanded Wine:', expandedWine);
  }, [expandedWine])

  const toggleExpanded = (wineId, marketId) => {

    const market = filteredWines.markets.find((m) => m.id === marketId)
    // Find the wine object from filteredWines based on wineId
    const wine = filteredWines.wines.find((w) => w.id === wineId)

    setExpandedWine({ wineId, marketId, market, wine })
  }

  return (
    <>
      <h1 className="flex justify-center mb-4 mt-8 font-semibold">
        Select your wine price:
      </h1>

      <h1 className="flex justify-center text-fuchsia-800 antialiased mb-2 font-semibold">
        Distance (up to):
      </h1>

      <div className="flex justify-center space-x-4 mb-2">
        <button
          className={`py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 w-16 h-16 rounded-full bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased flex items-center justify-center ${isPressed250 ? 'bg-fuchsia-200' : 'bg-white hover:bg-fuchsia-200'}`}
          onClick={() => handleProximityChange('250')}
        >
          250mt
        </button>

        <button
          className={`py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 w-16 h-16 rounded-full bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased flex items-center justify-center ${isPressed500 ? 'bg-fuchsia-200' : 'bg-white hover:bg-fuchsia-200'}`}
          onClick={() => handleProximityChange('500')}
        >
          500mt
        </button>

        <button
          className={`py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 w-16 h-16 rounded-full bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased flex items-center justify-center ${isPressed750 ? 'bg-fuchsia-200' : 'bg-white hover:bg-fuchsia-200'}`}
          onClick={() => handleProximityChange('750')}
        >
          750mt
        </button>

        <button
          className={`py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 w-16 h-16 rounded-full bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased flex items-center justify-center ${isPressed1km ? 'bg-fuchsia-200' : 'bg-white hover:bg-fuchsia-200'}`}
          onClick={() => handleProximityChange('1km')}
        >
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
        <button className={`${isPressedRed ? 'bg-fuchsia-200' : 'bg-white hover:bg-fuchsia-200'} py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased"`} onClick={() => handleSelectType("red")}>Red</button>
        <button className={`${isPressedWhite ? 'bg-fuchsia-200' : 'bg-white hover:bg-fuchsia-200'} py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased"`} onClick={() => handleSelectType("white")}>White</button>
        <button className={`${isPressedPink ? 'bg-fuchsia-200' : 'bg-white hover:bg-fuchsia-200'} py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased"`} onClick={() => handleSelectType("pink")}>Pink</button>
      </div>

      <div className="flex justify-center mb-2">
        <button className="bg-white hover:bg-fuchsia-200 py-2 px-16 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased" onClick={handleApplyFilter}>Seek Wine</button>
      </div>

      <ExpandedWineDetails renderStars={renderStars} toggleExpanded={toggleExpanded} filteredWines={filteredWines} expandedWine={expandedWine} />
    </>
  )
}

export default WinePriceFilter