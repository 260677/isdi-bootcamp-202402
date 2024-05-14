// @ts-nocheck
import { logger, showFeedback } from '../utils'
import logic from '../logic'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Logo from '../img/wiineseekertrans2.png'
import Header from '../components/Header'
import WinePriceFilter from '../components/WinePriceFilter'
import GeoLocation from '../components/GeoLocation'
import ExpandedWineDetails from '../components/ExpandedWineDetails'
import Map from '..components/Map'

function Home({ onUserLoggedOut }) {
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
  const [userLocation, setUserLocation] = useState(null);

  const onLogout = () => {
    onUserLoggedOut();
  };

  const handleCoordinates = (coordinates) => {
    setUserLocation(coordinates);
  };

  return (
    <main>
      <Header onUserLoggedOut={onLogout} />
      <div>
        <GeoLocation coordinates={coordinates} setCoordinates={setCoordinates} onCoordinatesChange={handleCoordinates} />
        <WinePriceFilter coordinates={coordinates} />
        {/* <ExpandedWineDetails coordinates={coordinates} setCoordinates={setCoordinates} onCoordinatesChange={handleCoordinates}/> */}
      </div>
    </main>
  );
}

export default Home;