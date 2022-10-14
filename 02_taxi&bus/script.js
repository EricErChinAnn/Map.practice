window.addEventListener(`DOMContentLoaded`, async () => {
    let singapore = [1.29, 103.85];
    let map = L.map('map').setView(singapore, 12);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
    }).addTo(map);

    let taxiDatabase = (await axios.get(`https://api.data.gov.sg/v1/transport/taxi-availability`)).data.features[0].geometry.coordinates;
    let taxiDataSet = [];
    for(let i of taxiDatabase){
        taxiDataSet.push([i[1],i[0]]);
    }
    
    let busDatabase = (await axios.get(`https://gist.githubusercontent.com/kunxin-chor/b0a3e50161cd7a53d1bcdc5cc93b11fe/raw/05716c38af2b960d0f34d4db1fef6ce38d42455e/bus-stop.json`)).data;
    let busDataSet = [];
    let busName = [];
    
    for(let j in busDatabase){
       busDataSet.push([busDatabase[j][1],busDatabase[j][0]]);
       busName.push(busDatabase[j][2]);
    }

    let taxiCluster = L.markerClusterGroup();
    taxiCluster.addTo(map);
    let busCluster = L.markerClusterGroup();
    busCluster.addTo(map);

    for(let i of taxiDataSet){
        let taxiMarker = L.marker(i);
        taxiMarker.addTo(taxiCluster);
    }

    for(let i of busDataSet){
        let busAOE = L.circle(i,{
            color:'white',
            fillColor:`lightblue`,
            fillOpacity:0.75,
            radius: 50

        });
        busAOE.addTo(busCluster);
    }
})