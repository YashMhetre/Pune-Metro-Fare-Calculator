import React from 'react';

const AlternateRoutes = ({ routes }) => {
  if (!routes || routes.length === 0) return null;

  return (
    <div style={{
      background: "#71a7ddff",
      borderRadius: "12px",
      padding: "1.5rem",
      marginTop: "1rem",
      boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <h3 style={{ color: "#1e293b", margin: 0 }}>Alternate Routes</h3>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {routes.map((route, index) => (
          <li
            key={index}
            style={{
              marginBottom: "0.75rem",
              padding: "0.75rem 1rem",
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <strong style={{ color: index === 0 ? "#10b981" : "#f97316" }}>
                  {index === 0 ? "Shortest Route" : `Route ${index + 1}`}
                </strong>
                <div style={{ fontSize: "0.9rem", color: "#1c1c1dff", marginTop: "0.25rem" }}>
                  {route.join(" → ")}
                </div>
              </div>
              <span style={{ 
                color: index === 0 ? "#10b981" : "#f97316", 
                fontWeight: "600", 
                fontSize: "0.9rem", 
                whiteSpace: "nowrap", 
                marginLeft: "1rem" 
              }}>
                {route.length - 1} {route.length - 1 === 1 ? 'stop' : 'stops'}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlternateRoutes;