// just map and tile layer
var map = L.map("map", {
    center:[34.098, -118.35],
    zoom: 10
});


function main() {    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    //let filepath_a = "../../Data/criminal_homicide_2010_2019.json";
    //let filepath_a = "/Project-3/Data/criminal_homicide_2010_2019.json";
    let filepath_a = "/Project3/Project-3/Data/criminal_homicide_2010_2019.json";

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

//function that will differentiate the districts in the map
function chooseColor(district) {
    if (district == "1") return "yellow";
    else if (district == "2") return "red";
    else if (district == "3") return "black";
    else if (district == "4") return "green";
    else if (district == "5") return "purple";
    else if (district == "6") return "blue";
    else if (district == "7") return "lightgoldenrodyellow";
    else if (district == "8") return "grey";
    else if (district == "9") return "aqua";
    else if (district == "10") return "chocolate";
    else if (district == "11") return "olive";
    else if (district == "12") return "tomato";
    else if (district == "13") return "gold";
    else if (district == "14") return "hotpink";
    else return "orange";
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
            style: function(feature) {
                return {
                    color: 'firebrick',
                // Call the chooseColor() function to decide which color
                    fillColor: chooseColor(feature.properties.district),
                    fillOpacity: 0.5,
                    weight: 1.5
                };
            },
            onEachFeature: function(feature, layer) {
                // Set the mouse events to change the map styling.
                layer.on({
                  // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
                  mouseover: function(event) {
                    layer = event.target;
                    layer.setStyle({
                      fillOpacity: 0.9
                    });
                  },
                  // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
                  mouseout: function(event) {
                    layer = event.target;
                    layer.setStyle({
                      fillOpacity: 0.5
                    });
                  },
                  // When a feature (neighborhood) is clicked, it enlarges to fit the screen.
                  click: function(event) {
                    map.fitBounds(event.target.getBounds());
                  }
                });
                // Giving each feature a popup with information that's relevant to it
                layer.bindPopup("<h1>District " + feature.properties.district + "</h1>");
          
              }
          
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
