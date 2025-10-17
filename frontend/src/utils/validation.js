export function validateRouteInput(startStation, endStation, passengers) {
  if (!startStation || !endStation) {
    return { isValid: false, message: "Please select both start and end stations!" };
  }
  
  if (startStation === endStation) {
    return { isValid: false, message: "Start and end stations must be different!" };
  }
  
  if (passengers === 0) {
    return { isValid: false, message: "Select at least 1 passenger!" };
  }
  
  return { isValid: true };
}