// just map and tile layer
var map = L.map("map", {
    center:[34.098, -118.35],
    zoom: 10
});



var overlay = {
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
            // When the cursor no longer hovers over a map feature the feature's opacity reverts back to 50%.
            mouseout: function(event) {
                layer = event.target;
                layer.setStyle({
                fillOpacity: 0.5
                });
            },
            // When a district is clicked, it enlarges to fit the screen.
            click: function(event) {
                map.fitBounds(event.target.getBounds());
            }
            });
            //BindPopup contents via conditonal statemements for additonal data.
            d3.json("/../../Data/Census_Data_by_Council_District.json").then(function (x) {
                var census = x;
            
                d3.json("/../../Data/CouncilMembers.json").then(function (y) {
                    var members = y;
            
                    function getCensusByDistrict(district) {
                        return census.filter(
                            function(census) {
                                return census.District === district
                            }
                        );
                    }
                    function getMembersByDistrict(district) {
                        return members.filter(
                            function(members) {
                                return members.District === district
                            }
                        );
                    }

                    var foundCensus = getCensusByDistrict(feature.properties.district);
                    var foundMember = getMembersByDistrict(feature.properties.district);

                    const popUpContent = "<h2>District " + feature.properties.district + "</h2><hr><h3>2010 Population: " + foundCensus[0].Pop2010 + "<br>Council Member: " + foundMember[0].Name + "</h3>";

                    // Giving each feature a popup with information that's relevant to it
                    layer.bindPopup(popUpContent);
                });
            });
            
        }
            
    })
};

function main() {    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    let filepath_a = "../../Data/criminal_homicide_2010_2019.json";
    let filepath_b = "/Project-3/Data/criminal_homicide_2010_2019.json";
    let filepath_c = "/Project3/Project-3/Data/criminal_homicide_2010_2019.json";

    d3.json("http://127.0.0.1:5000/api/homicides").then(function (x) {
        drawMarkers(x);
        })
    
    d3.json("http://127.0.0.1:5000/api/robberies").then(function (x) {
        drawMarkers(x);
        createMap();
    })

    }
    

function drawMarkers(crimes) {
    console.log("data passed into drawMarkers", crimes)
    var cases = L.markerClusterGroup();
    var crime_desc = crimes[0]["Crm Cd Desc"];

//looping through each object in array
    for (var i =0; i<crimes.length; i++) {
        var lat = crimes[i]["LAT"];
        var lng = crimes[i]["LON"];

        //creating markers for each object
        var marker = L.marker([lat,lng])
        .bindPopup(`<b>${crimes[i]['LOCATION']}</b> </br> <hr>
            Date Occured: ${crimes[i]['DATE OCC']} </br>
            Victim: ${crimes[i]['Vict Age']} / ${crimes[i]['Vict Sex']} </br>
            Status: ${crimes[i]['Status Desc']}`
            );

        cases.addLayer(marker);
    }
    // adds layer to overlay dictionary 
    overlay[crime_desc] = cases;
}

//function that will differentiate the districts in the map
function chooseColor(district) {
    if (district == "1") return "aqua";
    else if (district == "2") return "red";
    else if (district == "3") return "black";
    else if (district == "4") return "green";
    else if (district == "5") return "purple";
    else if (district == "6") return "blue";
    else if (district == "7") return "lightgoldenrodyellow";
    else if (district == "8") return "grey";
    else if (district == "9") return "yellow";
    else if (district == "10") return "chocolate";
    else if (district == "11") return "olive";
    else if (district == "12") return "tomato";
    else if (district == "13") return "gold";
    else if (district == "14") return "hotpink";
    else return "orange";
  }
  

function createMap() {
    //creating different views 
    var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
    
    var googleSat =  L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
    });
    

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
