// just map and tile layer
var map = L.map("map", {
    center:[34.098, -118.35],
    zoom: 10
});


function main() {    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    let filepath_a = "../../Data/criminal_homicide_2010_2019.json";
    // let filepath_b = "/Project-3/Data/criminal_homicide_2010_2019.json";

    d3.json(filepath_a).then(function (x) {
        console.log(x);
        drawMarkers(x);
        })
    }


function drawMarkers(homicides) {
    console.log("data passed into drawMarkers", homicides)
    var cases = L.markerClusterGroup();

//looping through each object in array
    for (var i =0; i<homicides.length; i++) {
        var lat = homicides[i]["LAT"];
        var lng = homicides[i]["LON"];

        //creating markers for each object
        var marker = L.marker([lat,lng])
        .bindPopup(`<b>${homicides[i]['LOCATION']}</b> </br> <hr>
            Date Occured: ${homicides[i]['DATE OCC']} </br>
            Victim: ${homicides[i]['Vict Age']} / ${homicides[i]['Vict Sex']} </br>
            Status: ${homicides[i]['Status Desc']}`
            );

        cases.addLayer(marker);
    }
    // initializing a layer group for the array of circle markers and passing it into the createMap function
    createMap(cases);
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
        };

// adding a layer control panel
    L.control.layers(baseMaps, overlay, {
    collapsed: false
    }).addTo(map);

}

main();
