function calculateDistance() {
    const bodrum = document.getElementById('bodrum').value.split(',').map(Number);
    const vilnius = document.getElementById('vilnius').value.split(',').map(Number);

    const R = 6371; // Earth's radius in km
    const dLat = deg2rad(vilnius[0] - bodrum[0]);
    const dLon = deg2rad(vilnius[1] - bodrum[1]);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(bodrum[0])) * Math.cos(deg2rad(vilnius[0])) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    document.getElementById('result').innerHTML = `Distance: ${distance.toFixed(2)} km`;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}
