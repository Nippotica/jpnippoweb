document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([20, 0], 2); // Center globally

    // Add map tiles (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Locations (Latitude, Longitude, Name)
    var locations = [
        { coords: [1.3521, 103.8198], name: "Singapore" },
        { coords: [40.7128, -74.0060], name: "New York, USA" },
        { coords: [34.0522, -118.2437], name: "Los Angeles, USA" },
        { coords: [48.8566, 2.3522], name: "Paris, France" },
        { coords: [39.9042, 116.4074], name: "Beijing, China" }
    ];

    // Add markers
    locations.forEach(loc => {
        L.marker(loc.coords).addTo(map)
         .bindPopup(`<b>${loc.name}</b>`);
    });
});
