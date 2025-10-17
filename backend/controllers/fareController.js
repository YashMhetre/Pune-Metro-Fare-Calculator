const { metroMap, fareRules } = require('../data/metroData');

// BFS to find shortest path
const findShortestPath = (start, end) => {
  const queue = [[start]];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const path = queue.shift();
    const station = path[path.length - 1];

    if (station === end) return path;

    const neighbors = metroMap[station] || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }
  return null;
};

// Find all possible paths (DFS)
const findAllPaths = (start, end, visited = new Set(), path = [], allPaths = []) => {
  visited.add(start);
  path.push(start);

  if (start === end) {
    allPaths.push([...path]);
  } else {
    const neighbors = metroMap[start] || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        findAllPaths(neighbor, end, visited, path, allPaths);
      }
    }
  }

  path.pop();
  visited.delete(start);
  return allPaths;
};

// Calculate fare based on stations travelled
const calculateFare = (stationsTravelled, passengers) => {
  const rule = fareRules.find(r => stationsTravelled <= r.maxStations);
  const farePerPassenger = rule ? rule.fare : fareRules[fareRules.length - 1].fare;
  const totalFare = farePerPassenger * passengers;

  return {
    stationsTravelled,
    passengers,
    farePerPassenger,
    totalFare
  };
};

// Main controller - Calculate route with fare and alternates
const calculateRoute = (req, res) => {
  try {
    const { from, to, passengers } = req.body;

    // Validation
    if (!from || !to) {
      return res.status(400).json({ 
        error: 'Both start and end stations are required' 
      });
    }

    if (from === to) {
      return res.status(400).json({ 
        error: 'Start and end stations must be different' 
      });
    }

    if (!passengers || passengers < 1) {
      return res.status(400).json({ 
        error: 'At least 1 passenger is required' 
      });
    }

    // Check if stations exist
    if (!metroMap[from]) {
      return res.status(404).json({ error: `Station "${from}" not found` });
    }
    if (!metroMap[to]) {
      return res.status(404).json({ error: `Station "${to}" not found` });
    }

    // Find shortest path
    const shortestPath = findShortestPath(from, to);

    if (!shortestPath) {
      return res.status(404).json({ 
        error: 'No route found between selected stations' 
      });
    }

    // Find all alternate paths
    const allPaths = findAllPaths(from, to);
    
    // Sort by length and get top 3
    const topRoutes = allPaths
      .sort((a, b) => a.length - b.length)
      .slice(0, 3);

    // Calculate fare
    const stationsTravelled = shortestPath.length - 1;
    const fareDetails = calculateFare(stationsTravelled, parseInt(passengers));

    res.json({
      success: true,
      from,
      to,
      shortestPath,
      alternateRoutes: topRoutes.slice(1), // Exclude the shortest (first) route
      fareDetails: {
        ...fareDetails,
        path: shortestPath
      }
    });

  } catch (error) {
    console.error('Error calculating route:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
};

// Get all stations
const getStations = (req, res) => {
  try {
    const stations = Object.keys(metroMap).sort();
    res.json({
      success: true,
      stations,
      count: stations.length
    });
  } catch (error) {
    console.error('Error fetching stations:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
};

// Get metro map data (for visualization)
const getMetroMapData = (req, res) => {
  try {
    res.json({
      success: true,
      metroMap
    });
  } catch (error) {
    console.error('Error fetching metro map:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
};

module.exports = { 
  calculateRoute, 
  getStations, 
  getMetroMapData 
};