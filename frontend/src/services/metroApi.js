import axios from 'axios';

// Base URL for API - change this based on your environment
const API_BASE_URL =  'http://localhost:8080/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// Add request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log('API Request:', config.method.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error('API Response Error:', error.response?.data || error.message);
    
    // Format error message
    const errorMessage = error.response?.data?.error 
      || error.response?.data?.message 
      || error.message 
      || 'An unexpected error occurred';
    
    return Promise.reject(new Error(errorMessage));
  }
);

// API Methods
export const metroApi = {
  /**
   * Calculate route with fare and alternate routes
   * @param {string} from - Starting station
   * @param {string} to - Destination station
   * @param {number} passengers - Number of passengers
   */
  calculateRoute: async (from, to, passengers) => {
    try {
      const response = await api.post('/calculate-route', {
        from,
        to,
        passengers: parseInt(passengers)
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get all available stations
   */
  getStations: async () => {
    try {
      const response = await api.get('/stations');
      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get metro map data for visualization
   */
  getMetroMap: async () => {
    try {
      const response = await api.get('/metro-map');
      return response;
    } catch (error) {
      throw error;
    }
  }
};

export default metroApi;