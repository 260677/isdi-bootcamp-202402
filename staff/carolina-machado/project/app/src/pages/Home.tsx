// @ts-nocheck
import { logger, showFeedback } from '../utils'
import logic from '../logic'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Logo from '../img/wiineseekertrans2.png'
import Header from '../components/Header'
import WinePriceFilter from '../components/WinePriceFilter'
import GeoLocation from '../components/GeoLocation'

function Home({ onUserLoggedOut }) {
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });

  const onLogout = () => {
    onUserLoggedOut();
  };

  return (
    <main>
      <Header onUserLoggedOut={onLogout} />
      <div>
        <GeoLocation coordinates={coordinates} setCoordinates={setCoordinates} />
        <WinePriceFilter coordinates={coordinates} />
      </div>
    </main>
  );
}

export default Home;