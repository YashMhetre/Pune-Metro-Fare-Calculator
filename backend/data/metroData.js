// Simplified metro lines and connections
const metroMap = {
  "PCMC": ["Sant Tukaram Nagar"],
  "Sant Tukaram Nagar": ["PCMC", "Bhosari (Nashik Phata)", "Khadki"],
  "Bhosari (Nashik Phata)": ["Sant Tukaram Nagar", "Kasarwadi", "Dapodi"],
  "Kasarwadi": ["Bhosari (Nashik Phata)", "Phugewadi", "Ideal Colony"],
  "Phugewadi": ["Kasarwadi"],
  "Dapodi": ["Bhosari (Nashik Phata)", "Bopodi"],
  "Bopodi": ["Dapodi", "Khadki", "Range Hill", "Shivaji Nagar", "Civil Court (Interchange)"],
  "Khadki": ["Sant Tukaram Nagar", "Bopodi", "Range Hill"],
  "Range Hill": ["Khadki", "Shivaji Nagar"],
  "Shivaji Nagar": ["Range Hill"],
  "Civil Court (Interchange)": ["Bopodi", "Mandai", "Bund Garden"],
  "Mandai": ["Civil Court (Interchange)", "Swargate"],
  "Swargate": ["Mandai"],
  "Ideal Colony": ["Kasarwadi", "Nal Stop"],
  "Nal Stop": ["Ideal Colony", "Garware College"],
  "Garware College": ["Nal Stop", "Deccan Gymkhana"],
  "Deccan Gymkhana": ["Garware College", "Chhatrapati Sambhaji Udyan"],
  "Chhatrapati Sambhaji Udyan": ["Deccan Gymkhana"],
  "Bund Garden": ["Civil Court (Interchange)", "Yerawada"],
  "Yerawada": ["Bund Garden", "Kalyani Nagar"],
  "Kalyani Nagar": ["Yerawada", "Ramwadi"],
  "Ramwadi": ["Kalyani Nagar"]
};

// Fare rules based on number of stations
const fareRules = [
  { maxStations: 2, fare: 50 },
  { maxStations: 5, fare: 100 },
  { maxStations: 8, fare: 150 },
  { maxStations: Infinity, fare: 200 }
];

module.exports = { metroMap, fareRules };