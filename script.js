let sgMap = [1.29,103.85];
let cambridge = [52.1951,0.1313];
let map = L.map(`map`).setView(cambridge,13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' 
}).addTo(map);

let swindon = [51.5584,-1.7810];
let markerSwindon = L.marker(swindon).addTo(map);

let circleCambridge = L.circle((cambridge),{
    color: "black",
    fillColor: "pink",
    fillOpacity: 0.4 ,
    radius: 100000
}).addTo(map);

let markerSgZoo = L.marker
let markerSgDC =
let markerJBirbPark =