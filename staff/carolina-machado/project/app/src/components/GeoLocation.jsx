import React, { useState, useEffect } from 'react'


function GeoLocation({ coordinates, setCoordinates }) {
  const [error, setError] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setCoordinates({ latitude, longitude })
        },
        (error) => {
          setError(error.message)
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.')
    }
  }, [setCoordinates])

  return (
    <>
      <div>
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            {coordinates && coordinates.latitude !== null && coordinates.longitude !== null && (
              <p>
                Lat: {coordinates.latitude}, Long: {coordinates.longitude} (to be hidden)
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default GeoLocation;