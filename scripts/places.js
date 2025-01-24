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
