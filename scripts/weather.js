// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature > 50 || windSpeed <= 3) {
        return "N/A"; // Wind chill isn't applicable under these conditions
    }

    let windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));

    return windChill.toFixed(2) + "°F";
}

// Function to update the wind chill on the webpage
function updateWindChill() {
    let temperature = parseFloat(document.getElementById("temperature").textContent); // Get temperature
    let windSpeed = parseFloat(document.getElementById("wind").textContent); // Get wind speed

    if (isNaN(temperature) || isNaN(windSpeed)) {
        document.getElementById("windChill").textContent = "Invalid data";
        return;
    }

    let windChillValue = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").textContent = windChillValue; // Update the webpage
}

// Run update when the page loads
document.addEventListener("DOMContentLoaded", updateWindChill);
