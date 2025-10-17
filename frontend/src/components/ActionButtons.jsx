import React from 'react';

const ActionButtons = ({ onCalculate, onReset, isDisabled, loading }) => {
  return (
    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
      <button
        onClick={onCalculate}
        disabled={isDisabled}
        style={{
          flex: 1,
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          fontWeight: '600',
          borderRadius: '10px',
          border: 'none',
          background: isDisabled 
            ? '#6c757d' 
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: '#fff',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          transition: 'all 0.3s ease',
          opacity: isDisabled ? 0.6 : 1
        }}
      >
        {loading ? '🔄 Calculating...' : '🔍 Calculate Route'}
      </button>
      
      <button
        onClick={onReset}
        style={{
          flex: 0.3,
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          fontWeight: '600',
          borderRadius: '10px',
          border: '2px solid #dc3545',
          background: 'transparent',
          color: '#dc3545',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#dc3545';
          e.target.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = '#dc3545';
        }}
      >
        🔄 Reset
      </button>
    </div>
  );
};

export default ActionButtons;