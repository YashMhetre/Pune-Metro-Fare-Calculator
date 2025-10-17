import React from 'react';

const FareDisplay = ({ fareDetails, darkMode }) => {
  if (!fareDetails) return null;

  return (
    <div style={{
      marginTop: '2rem',
      padding: '1.5rem',
      background: darkMode ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.1)',
      borderRadius: '12px',
      border: '2px solid #10b981',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <div style={{ textAlign: 'center', minWidth: '120px' }}>
        <p style={{ color: darkMode ? 'rgba(255,255,255,0.7)' : '#64748b', fontSize: '0.9rem', margin: '0 0 0.25rem 0' }}>
          Stations Travelled
        </p>
        <p style={{ color: darkMode ? '#ffffff' : '#1e293b', fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
          {fareDetails.stationsTravelled}
        </p>
      </div>

      <div style={{ textAlign: 'center', minWidth: '120px' }}>
        <p style={{ color: darkMode ? 'rgba(255,255,255,0.7)' : '#64748b', fontSize: '0.9rem', margin: '0 0 0.25rem 0' }}>
          Passengers
        </p>
        <p style={{ color: darkMode ? '#ffffff' : '#1e293b', fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
          {fareDetails.passengers}
        </p>
      </div>

      <div style={{ textAlign: 'center', minWidth: '120px' }}>
        <p style={{ color: darkMode ? 'rgba(255,255,255,0.7)' : '#64748b', fontSize: '0.9rem', margin: '0 0 0.25rem 0' }}>
          Fare Per Passenger
        </p>
        <p style={{ color: darkMode ? '#ffffff' : '#1e293b', fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
          ₹{fareDetails.farePerPassenger}
        </p>
      </div>

      <div style={{ textAlign: 'center', minWidth: '120px' }}>
        <p style={{ color: darkMode ? 'rgba(255,255,255,0.7)' : '#64748b', fontSize: '0.9rem', margin: '0 0 0.25rem 0' }}>
          Total Fare
        </p>
        <p style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
          ₹{fareDetails.totalFare}
        </p>
      </div>
    </div>
  );
};

export default FareDisplay;