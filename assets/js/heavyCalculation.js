function calculateDistance() {
    const bodrumCoords = document.getElementById('bodrum').value.split(',').map(Number);
    const vilniusCoords = document.getElementById('vilnius').value.split(',').map(Number);

    // Extract latitude and longitude
    const [lat1, lon1] = bodrumCoords;
    const [lat2, lon2] = vilniusCoords;

    // Haversine formula
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    document.getElementById('result').innerHTML = `Distance: ${distance.toFixed(2)} km`;
}
