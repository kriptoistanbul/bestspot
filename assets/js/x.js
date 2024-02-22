// Function to calculate the distance between two points given their latitude and longitude
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
}

// Helper function to convert degrees to radians
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Function to read the input values, calculate the distance, and display the result
function displayCalculatedDistance() {
    const bodrumCoords = document.getElementById('bodrum').value.split(',');
    const vilniusCoords = document.getElementById('vilnius').value.split(',');

    // Parsing input values as floating-point numbers
    const lat1 = parseFloat(bodrumCoords[0]);
    const lon1 = parseFloat(bodrumCoords[1]);
    const lat2 = parseFloat(vilniusCoords[0]);
    const lon2 = parseFloat(vilniusCoords[1]);

    // Calculating the distance
    const distance = calculateDistance(lat1, lon1, lat2, lon2).toFixed(2);

    // Displaying the result
    document.getElementById('result').textContent = `The distance between Bodrum and Vilnius is approximately ${distance} km.`;
}
