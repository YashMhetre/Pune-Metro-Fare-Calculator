import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { stationCoordinates } from '../data/frontend-data';
import MetroMap from '../components/MetroMap';
import AlternateRoutes from '../components/AlternateRoutes';
import StationSelector from '../components/StationSelector';
import PassengerCounter from '../components/PassengerCounter';
import FareDisplay from '../components/FareDisplay';
import ActionButtons from '../components/ActionButtons';
import Footer from '../components/Footer';
import { metroApi } from '../services/metroApi';
import './customcss.css';

const PuneMetroCalculator = () => {
  const [startStation, setStartStation] = useState('');
  const [endStation, setEndStation] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [calculatedRoute, setCalculatedRoute] = useState([]);
  const [alternateRoutes, setAlternateRoutes] = useState([]);
  const [fareDetails, setFareDetails] = useState(null);
  const [darkMode] = useState(true);
  const [stations, setStations] = useState([]);
  const [metroMap, setMetroMap] = useState({});
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  const modeClass = darkMode ? 'dark-mode' : 'light-mode';

  // Fetch stations and metro map on component mount
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setInitialLoading(true);
        
        // Fetch stations
        const stationsData = await metroApi.getStations();
        if (stationsData.success) {
          setStations(stationsData.stations);
        }

        // Fetch metro map
        const mapData = await metroApi.getMetroMap();
        if (mapData.success) {
          setMetroMap(mapData.metroMap);
        }

      } catch (error) {
        console.error('Error fetching initial data:', error);
        toast.error('Failed to load metro data. Please refresh the page.');
      } finally {
        setInitialLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const handleCalculate = async () => {
    // Basic validation
    if (!startStation || !endStation) {
      toast.error('Please select both start and end stations!');
      return;
    }

    if (startStation === endStation) {
      toast.error('Start and end stations must be different!');
      return;
    }

    if (passengers === 0) {
      toast.error('Select at least 1 passenger!');
      return;
    }

    try {
      setLoading(true);
      
      // Call backend API
      const response = await metroApi.calculateRoute(
        startStation,
        endStation,
        passengers
      );

      if (response.success) {
        setCalculatedRoute(response.shortestPath);
        setAlternateRoutes(response.alternateRoutes || []);
        setFareDetails(response.fareDetails);
        toast.success('Route calculated successfully!');
      }

    } catch (error) {
      console.error('Error calculating route:', error);
      toast.error(error.message || 'Failed to calculate route. Please try again.');
      handleReset();
    } finally {
      setLoading(false);
    }
  };

  const handleSwapStations = () => {
    setStartStation(endStation);
    setEndStation(startStation);
  };

  const handleReset = () => {
    setStartStation('');
    setEndStation('');
    setPassengers(1);
    setCalculatedRoute([]);
    setAlternateRoutes([]);
    setFareDetails(null);
  };

  // Show loading state while fetching initial data
  if (initialLoading) {
    return (
      <div className={`metro-container ${modeClass}`}>
        <div className="metro-wrapper">
          <div className="metro-header">
            <h1 className="metro-title">🚇 Pune Metro</h1>
            <p className="metro-subtitle">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`metro-container ${modeClass}`}>
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
      
      <div className="metro-wrapper">
        <div className="metro-header">
          <h1 className="metro-title">🚇 Pune Metro</h1>
          <p className="metro-subtitle">Plan your journey. Know your fare.</p>
        </div>

        <div className={`metro-card ${modeClass}`}>
          <h2 className={`card-title ${modeClass}`}>
            Route & Fare Finder
          </h2>
          <p className={`card-subtitle ${modeClass}`}>
            Select your stations and number of passengers
          </p>

          <StationSelector
            startStation={startStation}
            endStation={endStation}
            stations={stations}
            onStartChange={setStartStation}
            onEndChange={setEndStation}
            onSwap={handleSwapStations}
            darkMode={darkMode}
          />

          <PassengerCounter
            passengers={passengers}
            onIncrement={() => setPassengers(prev => prev + 1)}
            onDecrement={() => setPassengers(prev => Math.max(prev - 1, 1))}
            darkMode={darkMode}
          />

          <ActionButtons
            onCalculate={handleCalculate}
            onReset={handleReset}
            isDisabled={!startStation || !endStation || passengers === 0 || loading}
            loading={loading}
          />

          <FareDisplay fareDetails={fareDetails} darkMode={darkMode} />

          {calculatedRoute.length > 0 && (
            <>
              <MetroMap 
                metroMap={metroMap}
                stationCoordinates={stationCoordinates}
                shortestRoute={calculatedRoute}
                alternateRoutes={alternateRoutes}
                startStation={startStation}
                endStation={endStation}
              />
              <AlternateRoutes routes={[calculatedRoute, ...alternateRoutes]} />
            </>
          )}
        </div>

        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default PuneMetroCalculator;