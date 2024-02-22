// Simulated heavy computation script for a travel page

// Function to simulate distance calculation between two points
function calculateDistance(lat1, lon1, lat2, lon2) {
  // Haversine formula to calculate distance
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
}

// Simulate heavy computation by calculating distances between multiple random points
function simulateItineraryCalculations() {
  const numberOfPoints = 1000; // Large number of points to simulate heavy computation
  let totalDistance = 0;

  for (let i = 0; i < numberOfPoints - 1; i++) {
    // Generate random coordinates
    const lat1 = Math.random() * 180 - 90;
    const lon1 = Math.random() * 360 - 180;
    const lat2 = Math.random() * 180 - 90;
    const lon2 = Math.random() * 360 - 180;

    // Calculate distance and add to total
    totalDistance += calculateDistance(lat1, lon1, lat2, lon2);
  }

  console.log(`Total distance for ${numberOfPoints} points: ${totalDistance.toFixed(2)} km`);
}

// Run the heavy computation on page load
window.onload = () => {
  console.log('Starting itinerary calculations...');
  simulateItineraryCalculations();
  console.log('Itinerary calculations completed.');
};
