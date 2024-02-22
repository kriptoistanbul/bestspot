// Real distance calculation using the Haversine formula
function calculateDistance() {
    const bodrumInput = document.getElementById('bodrum').value.split(',');
    const vilniusInput = document.getElementById('vilnius').value.split(',');

    const lat1 = parseFloat(bodrumInput[0]);
    const lon1 = parseFloat(bodrumInput[1]);
    const lat2 = parseFloat(vilniusInput[0]);
    const lon2 = parseFloat(vilniusInput[1]);

    const R = 6371; // Earth's radius in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    document.getElementById('result').innerHTML = `Distance: ${distance.toFixed(2)} km`;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Below is the unused, heavy code for demonstration purposes only.
// This includes repetitive and non-optimized functions and data structures.
// WARNING: This is intentionally inefficient and should not be used in production.

/* Repetitive, non-optimized dummy functions and data for demonstration */

// ... (repetitive unused functions continue) ...

// Large, unused data structure
const unusedData = new Array(10000).fill("This is a string repeated many times. ").join('');

// Unused computational heavy tasks
function performUnusedComputation() {
    for (let i = 0; i < 100000; i++) {
        unusedFunction1();
        unusedFunction2();
    }
}

// Unused event listener that does nothing
window.addEventListener('load', function() {
    performUnusedComputation();
});

// Long, meaningless string data to increase file size
const longUnusedString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.`;

// Repeat the long string to further increase file size
const repeatedLongString = new Array(1000).fill(longUnusedString).join('');
