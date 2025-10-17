import React from 'react';

const MetroMap = ({ metroMap, stationCoordinates, shortestRoute = [], alternateRoutes = [], startStation, endStation }) => {
  const isConnectionInRoute = (route, from, to) => {
    if (!route || route.length === 0) return false;
    for (let i = 0; i < route.length - 1; i++) {
      if (
        (route[i] === from && route[i + 1] === to) ||
        (route[i] === to && route[i + 1] === from)
      ) {
        return true;
      }
    }
    return false;
  };

  const getConnectionColor = (from, to) => {
    if (isConnectionInRoute(shortestRoute, from, to)) return "#10b981";
    
    for (let i = 0; i < alternateRoutes.length; i++) {
      if (isConnectionInRoute(alternateRoutes[i], from, to)) {
        const orangeShades = ["#f97316", "#fb923c", "#fdba74"];
        return orangeShades[i % orangeShades.length];
      }
    }
    
    return "#979a9cff";
  };

  return (
    <div style={{
      background: '#5d9fe0ff',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      margin: '2rem 0',
      overflow: 'auto'
    }}>
      <h3 style={{ margin: '0 0 1.5rem 0', color: '#1e293b', fontSize: '1.5rem' }}>
        Metro Route Map
      </h3>
      <svg 
        width="900" 
        height="400" 
        style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          borderRadius: '12px',
          border: '2px solid #e2e8f0'
        }}
      >
        {/* Metro Lines */}
        {Object.entries(metroMap).map(([station, connections]) =>
          connections.map((connectedStation) => {
            if (station < connectedStation) {
              const [x1, y1] = stationCoordinates[station] || [0, 0];
              const [x2, y2] = stationCoordinates[connectedStation] || [0, 0];
              const color = getConnectionColor(station, connectedStation);
              const isHighlighted = color !== "#cbd5e1";
              
              return (
                <line
                  key={`${station}-${connectedStation}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={color}
                  strokeWidth={isHighlighted ? 5 : 3}
                  strokeLinecap="round"
                />
              );
            }
            return null;
          })
        )}

        {/* Stations */}
        {Object.entries(stationCoordinates).map(([station, [x, y]]) => {
          const isInShortestRoute = shortestRoute.includes(station);
          const isInAlternateRoute = alternateRoutes.some((r) => r.includes(station));
          const isInRoute = isInShortestRoute || isInAlternateRoute;
          const isStart = station === startStation;
          const isEnd = station === endStation;

          let fillColor = "#64748b";
          if (isStart) fillColor = "#148de9ff";
          else if (isEnd) fillColor = "#ef4444";
          else if (isInShortestRoute) fillColor = "#10b981";
          else if (isInAlternateRoute) fillColor = "#f97316";

          return (
            <g key={station}>
              <circle
                cx={x}
                cy={y}
                r={isInRoute ? 12 : 8}
                fill={fillColor}
                stroke="white"
                strokeWidth={isInRoute ? 3 : 2}
              />
              <text
                x={x}
                y={y - 20}
                fontSize="11"
                fill="#1e293b"
                textAnchor="middle"
                fontWeight={isInRoute ? 'bold' : 'normal'}
              >
                {station}
              </text>
            </g>
          );
        })}
        
        {/* Legend */}
        <g transform="translate(10, 230)">
          <rect x="0" y="3" width="150" height="155" fill="white" rx="6" opacity="0.95" stroke="#e2e8f0" strokeWidth="1"/>
          <circle cx="15" cy="20" r="6" fill="#3b82f6" stroke="white" strokeWidth="2"/>
          <text x="35" y="24" fontSize="12" fill="#1e293b">Start</text>
          <circle cx="15" cy="50" r="6" fill="#ef4444" stroke="white" strokeWidth="2"/>
          <text x="35" y="54" fontSize="12" fill="#1e293b">End</text>
          <circle cx="15" cy="80" r="6" fill="#10b981" stroke="white" strokeWidth="2"/>
          <text x="35" y="84" fontSize="12" fill="#1e293b">Shortest Route</text>
          <circle cx="15" cy="110" r="6" fill="#f97316" stroke="white" strokeWidth="2"/>
          <text x="35" y="114" fontSize="12" fill="#1e293b">Alternate Route</text>
          <circle cx="15" cy="140" r="5" fill="#64748b" stroke="white" strokeWidth="1"/>
          <text x="35" y="144" fontSize="12" fill="#1e293b">Station</text>
        </g>
      </svg>
    </div>
  );
};

export default MetroMap;