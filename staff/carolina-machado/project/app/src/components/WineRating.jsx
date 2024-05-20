import React, { useState, useEffect } from 'react'
import handleSubmitRating from '../logic/handleSubmitRating'


function WineRating({ wineId }) {
  const [showPopUp, setShowPopUp] = useState(false)
  const [userRating, setUserRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [wineData, setWineData] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      if (showPopUp) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    };

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [showPopUp])

  useEffect(() => {
    fetchWineData()
  }, [])

  const fetchWineData = () => {
    fetch(`${import.meta.env.VITE_API_URL}/wines/${wineId}`)
      .then(res => res.json())
      .then(data => {
        setWineData(data)
      })
      .catch(error => {
        console.error('Error fetching wine data:', error)
      })
  }

  const handleClick = () => {
    setShowPopUp(true)
  };

  const handleClose = () => {
    setShowPopUp(false)
    document.body.style.overflow = 'auto'
  };

  const handleRate = (rating) => {
    setUserRating(rating);
    console.log('User rated the wine:', rating)
  };

  const handleSubmitRatingWrapper = () => {
    setIsSubmitting(true)
    handleSubmitRating(userRating, wineId)
      .then(data => {
        console.log('Rating submitted:', userRating)
        setMessage('Rating submitted successfully!')
        setTimeout(() => {
          handleClose()
        }, 2000)

        setWineData(prevData => ({ ...prevData, averageRating: data.newAverageRating }))
      })
      .catch(error => {
        console.error('Error submitting rating:', error)
        setMessage('Failed to submit rating. Please try again.')
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div>
      <span className="text-yellow-700 text-ml font-bold italic cursor-pointer block mb-4" onClick={handleClick}>
        Help WiineSeeker to improve! Rate the wine!
      </span>

      {message && <p className="mt-4 text-center">{message}</p>}

      {showPopUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded shadow-lg text-center" style={{ zIndex: 9999 }}>
            <p className="mb-8 font-semibold">Thank you for rating this 🍷:</p>
            {/* Rating stars */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-white cursor-pointer border border-black rounded-full text-2xl mx-1 p-1 ${index < userRating ? 'bg-fuchsia-500' : 'bg-gray-200'}`}
                  onClick={() => handleRate(index + 1)}
                >
                  ★
                </span>
              ))}
            </div>

            <button
              className="bg-white hover:bg-fuchsia-200 py-2 px-16 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased"
              onClick={handleSubmitRatingWrapper}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Rate'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default WineRating