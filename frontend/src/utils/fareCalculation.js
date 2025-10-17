export function calculateFare(stationsTravelled, passengers) {
  const fareRules = [
    { maxStations: 2, fare: 50 },
    { maxStations: 5, fare: 100 },
    { maxStations: 8, fare: 150 },
    { maxStations: Infinity, fare: 200 }
  ];

  const rule = fareRules.find(r => stationsTravelled <= r.maxStations);
  const farePerPassenger = rule ? rule.fare : fareRules[fareRules.length - 1].fare;
  const totalFare = farePerPassenger * passengers;

  return {
    stationsTravelled,
    passengers,
    farePerPassenger,
    totalFare
  };
}
