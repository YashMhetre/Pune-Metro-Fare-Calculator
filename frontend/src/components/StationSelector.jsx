import React from 'react';

const StationSelector = ({ 
  startStation, 
  endStation, 
  stations, 
  onStartChange, 
  onEndChange, 
  onSwap,
  darkMode 
}) => {
  const styles = {
    select: {
      borderRadius: '10px',
      padding: '0.75rem',
      width: '100%',
      border: darkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid #ddd',
      background: darkMode ? 'rgba(255, 255, 255, 0.1)' : '#ffffff',
      color: darkMode ? '#ffffff' : '#333',
      fontSize: '1rem'
    },
    label: {
      fontWeight: '600',
      marginBottom: '0.5rem',
      color: darkMode ? '#ffffff' : '#333',
      fontSize: '0.95rem',
      display: 'block'
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1rem', alignItems: 'end' }}>
      <div>
        <label style={styles.label}>Start Station</label>
        <select style={styles.select} value={startStation} onChange={(e) => onStartChange(e.target.value)}>
          <option value="">Select start station</option>
          {stations.map(station => (
            <option key={station} value={station}>{station}</option>
          ))}
        </select>
      </div>

      <button 
        style={{
          background: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
          border: darkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(102, 126, 234, 0.3)',
          borderRadius: '10px',
          padding: '0.50rem',
          fontSize: '1.5rem',
          cursor: 'pointer',
          color: darkMode ? '#ffffff' : '#667eea',
          transition: 'all 0.3s ease',
          height: 'fit-content',
          marginBottom: '0.01rem'
        }}
        onClick={onSwap}
        title="Swap stations"
      >
        ⇄
      </button>

      <div>
        <label style={styles.label}>End Station</label>
        <select style={styles.select} value={endStation} onChange={(e) => onEndChange(e.target.value)}>
          <option value="">Select end station</option>
          {stations.map(station => (
            <option key={station} value={station}>{station}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StationSelector;