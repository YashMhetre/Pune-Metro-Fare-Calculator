import React from 'react';

const PassengerCounter = ({ passengers, onIncrement, onDecrement, darkMode }) => {
  const styles = {
    label: {
      fontWeight: '600',
      marginBottom: '1rem',
      color: darkMode ? '#ffffff' : '#333',
      fontSize: '0.95rem',
      display: 'block'
    }
  };

    return (
        <div style={{
        background: darkMode ? 'rgba(255, 255, 255, 0.1)' : '#f8f9fa',
        borderRadius: '10px',
        padding: '1.5rem',
        marginTop: '1.5rem'
        }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1rem 0' }}>
            <label style={{ fontWeight: 'bold', marginBottom: '0.5rem', textAlign: 'center', color : 'white'}}>
                Number of Passengers
            </label>
        </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <button 
          style={{
            background: darkMode ? 'rgba(255, 255, 255, 0.1)' : '#ffffff',
            border: darkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid #ddd',
            borderRadius: '8px',
            width: '45px',
            height: '45px',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: darkMode ? '#ffffff' : '#333',
            transition: 'all 0.3s ease'
          }}
          onClick={onDecrement}
        >
          −
        </button>
        <input 
          type="text" 
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            fontWeight: '600',
            width: '80px',
            textAlign: 'center',
            color: darkMode ? '#ffffff' : '#333',
            outline: 'none'
          }}
          value={passengers} 
          readOnly 
        />
        <button 
          style={{
            background: darkMode ? 'rgba(255, 255, 255, 0.1)' : '#ffffff',
            border: darkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid #ddd',
            borderRadius: '8px',
            width: '45px',
            height: '45px',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: darkMode ? '#ffffff' : '#333',
            transition: 'all 0.3s ease'
          }}
          onClick={onIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default PassengerCounter;
