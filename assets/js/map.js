document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map', {
        center: [20, 0], // Center the map for a global view
        zoom: 2, // Zoomed out to show all locations
        worldCopyJump: true // Fixes wrapping issues at edges
    });

    // Use CartoDB Positron for a clean, readable map
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Locations {Tokyo, Singapore, Adelaide, London, Toronto, New York, San Francisco}
    var locations = [
        { coords: [35.682839, 139.759455], name: "Tokyo, Japan" },
        { coords: [1.3521, 103.8198], name: "Singapore" },
        { coords: [-34.9285, 138.6007], name: "Adelaide, Australia" },
        { coords: [51.5074, -0.1278], name: "London, UK" },
        { coords: [43.65107, -79.347015], name: "Toronto, Canada" },
        { coords: [40.7128, -74.0060], name: "New York, USA" },
        { coords: [37.7749, -122.4194], name: "San Francisco, USA" }
    ];

    // Add markers with custom size
    locations.forEach(loc => {
        L.marker(loc.coords, {
            icon: L.icon({
                iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Small marker icon
                iconSize: [25, 25], // Smaller marker size
                iconAnchor: [12, 24] // Adjust positioning
            })
        }).addTo(map).bindPopup(`<b>${loc.name}</b>`);
    });
});
