// just map and tile layer
var map = L.map("map", {
    center:[34.098, -118.35],
    zoom: 10
});


function main() {    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    d3.json('../../population_data/criminal_homicide_2010_2019.json').then(function (x) {
        console.log(x);
        drawMarkers(x)
        })
    }


function drawMarkers(homicides) {
    var cases = L.markerClusterGroup();

//looping through each object in array
    for (var i =0; i<homicides.length; i++) {
        var lat = homicides[i]["LAT"]
        var lng = homicides[i]["LON"]

        //creating markers for each object
        var marker = L.marker([lat,lng])

        cases.addLayer(marker)
    }
    // initializing a layer group for the array of circle markers and passing it into the createMap function
    createMap(cases)
}


function createMap(cases) {
    console.log('datapassed into createMap', cases);

    //creating different views 
    var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
    
    var googleSat =  L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
    });
    
    var topograph = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    var overlay = {
        "Homicide Cases": cases,
        "District Boundaries": L.geoJSON(districts_geojson, {
            style: {color: 'firebrick'}
        })
    };

//json object with all views
    var baseMaps = {
        "Street": street,
        "Satellite": googleSat,
        "Topograhic": topograph
        };

// adding a layer control panel
    L.control.layers(baseMaps, overlay, {
    collapsed: false
    }).addTo(map);

}

main();
