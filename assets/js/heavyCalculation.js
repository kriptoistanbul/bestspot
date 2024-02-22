// Intentionally verbose and inefficient JavaScript for demonstration

// Unused variables and functions to simulate unnecessary code
var unusedData = "This data is never used";
function unusedFunction() {
    console.log("This function is never called");
}

// Another set of unused variables and functions
let anotherUnusedVariable = [1, 2, 3, 4, 5];
function anotherUnusedFunction() {
    let sum = 0;
    for (let i = 0; i < anotherUnusedVariable.length; i++) {
        sum += anotherUnusedVariable[i];
    }
    return sum; // This value is never used
}

// Simulated heavy computation that's not actually used
function heavyComputation() {
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
        result += Math.sin(i) * Math.cos(i);
    }
    return result; // This result is not used for the main functionality
}

// Main function to calculate a random distance
function calculateDistance() {
    // Simulate some delay caused by unnecessary computations
    let computationResult = heavyComputation(); // Not used for the main functionality

    // Generate a random distance between 1 and 3000 km
    const distance = Math.random() * 3000 + 1;

    // Displaying the random distance
    document.getElementById('result').innerHTML = `Random Distance: ${distance.toFixed(2)} km`;

    // Unused code after the main functionality
    let unusedResult = unusedFunction();
    console.log(unusedResult); // This line is also unnecessary
}

// Unused object with methods and properties
var unusedObject = {
    name: "Unused Object",
    method: function() {
        console.log("This method is never called");
    },
    value: 42 // This value is never used
};

// Large block of unused comments to add more to the file size
/*
    This is a large block of comments that serves no purpose other than to
    increase the file size and make the JavaScript file more verbose. Including
    such unnecessary comments in a JavaScript file can contribute to slower
    loading times, especially if the file is large and contains multiple blocks
    of comments like this scattered throughout the code.
*/
