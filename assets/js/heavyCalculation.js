// Calculate the real distance between two points using the Haversine formula
function calculateDistance() {
    const bodrumInput = document.getElementById('bodrum').value.split(',');
    const vilniusInput = document.getElementById('vilnius').value.split(',');

    const lat1 = parseFloat(bodrumInput[0]);
    const lon1 = parseFloat(bodrumInput[1]);
    const lat2 = parseFloat(vilniusInput[0]);
    const lon2 = parseFloat(vilniusInput[1]);

    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    document.getElementById('result').innerHTML = `Distance: ${distance.toFixed(2)} km`;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
