window.addEventListener(`DOMContentLoaded`,async()=>{
    let sgMap = [1.33,103.85];
    let cambridge = [52.1951,0.1313];
    let map = L.map(`map`).setView(sgMap,2);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 20,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' 
    }).addTo(map);

    // get all the earthquake locations
    let database = (await axios.get(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson`)).data.features;
    let dataset  = [];

    for(let i of database){
        coordi = [];
        coordi.push(i.geometry.coordinates[1]);
        coordi.push(i.geometry.coordinates[0]);
        dataset.push(coordi);
    }

    let markerClusterLayer = L.markerClusterGroup();
    for(let mark of dataset){
        L.marker(mark).addTo(markerClusterLayer);
    }
    markerClusterLayer.addTo(map);
})