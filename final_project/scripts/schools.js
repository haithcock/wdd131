document.addEventListener('DOMContentLoaded', function() {
    const collegeButton = document.getElementById('collegeButton');
    
    collegeButton.addEventListener('click', function() {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            position => {
                const lat = position.coords.latitude.toFixed(6);
                const lng = position.coords.longitude.toFixed(6);
                const mapsUrl = `https://www.google.com/maps/search/colleges+and+universities/@${lat},${lng},20mi`;
                window.open(mapsUrl, '_blank').catch(() => {
                    // Fallback if popup blocked
                    window.location.href = mapsUrl;
                });
            },
            error => {
                // Handle errors or permission denials
                console.error('Error getting location:', error);
                const searchUrl = 'https://www.google.com/search?q=community+colleges+near+me';
                window.open(searchUrl, '_blank').catch(() => {
                    window.location.href = searchUrl;
                });
            }
        );
    });
});