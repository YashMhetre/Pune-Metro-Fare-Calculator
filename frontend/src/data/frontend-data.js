// Metro Map Data
export const metroMap = {
  "PCMC": ["Sant Tukaram Nagar"],
  "Sant Tukaram Nagar": ["PCMC", "Bhosari (Nashik Phata)", "Khadki"],
  "Bhosari (Nashik Phata)": ["Sant Tukaram Nagar", "Kasarwadi", "Dapodi"],
  "Kasarwadi": ["Bhosari (Nashik Phata)", "Phugewadi", "Ideal Colony"],
  "Phugewadi": ["Kasarwadi"],
  "Dapodi": ["Bhosari (Nashik Phata)", "Bopodi"],
  // "Bopodi": ["Dapodi", "Khadki", "Range Hill", "Shivaji Nagar"],
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

export const stationCoordinates = {
  "PCMC": [80, 200],
  "Sant Tukaram Nagar": [170, 200],
  "Bhosari (Nashik Phata)": [300, 200],
  "Kasarwadi": [300, 300],
  "Phugewadi": [300, 350],
  "Dapodi": [390, 200],
  "Bopodi": [470, 200],
  "Khadki": [470, 270],
  "Range Hill": [600, 270],
  "Shivaji Nagar": [600, 200],
  "Civil Court (Interchange)": [470, 120],
  "Mandai": [600, 120],
  "Swargate": [700, 120],
  "Ideal Colony": [410, 300],
  "Nal Stop": [410, 350],
  "Garware College": [500, 350],
  "Deccan Gymkhana": [650, 350],
  "Chhatrapati Sambhaji Udyan": [800, 350],
  "Bund Garden": [470, 50],
  "Yerawada": [400, 50],
  "Kalyani Nagar": [320, 50],
  "Ramwadi": [250, 50]
};

export const fareRules = [
  { maxStations: 2, fare: 50 },
  { maxStations: 5, fare: 100 },
  { maxStations: 8, fare: 150 },
  { maxStations: Infinity, fare: 200 }
];