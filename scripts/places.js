document.addEventListener('DOMContentLoaded', () => {
    // Detect device type
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    // Add a class to <body> based on the device
    if (isMobile) {
        document.body.classList.add('mobile-view');
        console.log('Mobile view applied');
    } else {
        document.body.classList.add('desktop-view');
        console.log('Desktop view applied');
    }
});
function calculateWindChill(temperature, windSpeed) {
    if (temperature > 700 || windSpeed <= 3) {
        return "N/A"; // Wind chill isn't applicable under these conditions
    }

    let windChill = 35.74 + (0.6215 * temperature) - 
                    (35.75 * Math.pow(windSpeed, 0.16)) + 
                    (0.4275 * temperature * Math.pow(windSpeed, 0.16));

    return windChill.toFixed(2) + "°F";
}

function updateWindChill() {
    let tempElement = document.getElementById("temperature");
    let windElement = document.getElementById("wind");
    let chillElement = document.getElementById("windChill");

    // Extract numeric values only
    let temperature = parseFloat(tempElement.textContent.replace(/[^\d.-]/g, ''));
    let windSpeed = parseFloat(windElement.textContent.replace(/[^\d.-]/g, ''));

    if (isNaN(temperature) || isNaN(windSpeed)) {
        chillElement.textContent = "Invalid Data";
        return;
    }

    chillElement.textContent = calculateWindChill(temperature, windSpeed);
}

// Run on page load
document.addEventListener("DOMContentLoaded", updateWindChill);