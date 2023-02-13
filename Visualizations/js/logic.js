
d3.json('/Project-3/Data/criminal_homicide_2010_2019.json').then(function (x) {
    console.log(x);
    loops(x)
    })

    let male2010 = []
    let female2010 = []
    let male2011 = []
    let female2011 = []
    let male2012 = []
    let female2012 = []
    let male2013 = []
    let female2013 = []
    let male2014 = []
    let female2014 = []
    let male2015 = []
    let female2015 = []
    let male2016 = []
    let female2016 = []
    let male2017 = []
    let female2017 = []
    let male2018 = []
    let female2018 = []
    let male2019 = []
    let female2019 = []

function loops(data) {

    for (let index = 0; index < data.length; index++) {
        const crime = data[index];
        if (new Date(crime['DATE OCC']) < new Date('01/01/2011 0:00')) {
            if (crime['Vict Sex'] == 'M') {
            male2010.push(crime['Vict Sex'])
            }
            if (crime['Vict Sex'] == 'F') {
            female2010.push(crime['Vict Sex'])
            }
        }
        else if (new Date(crime['DATE OCC']) < new Date('01/01/2012 0:00')) {
            if (crime['Vict Sex'] == 'M') {
                male2011.push(crime['Vict Sex'])
            }
            if (crime['Vict Sex'] == 'F') {
            female2011.push(crime['Vict Sex'])
            }
        }
        else if (new Date(crime['DATE OCC']) < new Date('01/01/2013 0:00')) {
            if (crime['Vict Sex'] == 'M') {
                    male2012.push(crime['Vict Sex'])
                }
            if (crime['Vict Sex'] == 'F') {
                    female2012.push(crime['Vict Sex'])
                }
            }
        else if (new Date(crime['DATE OCC']) < new Date('01/01/2014 0:00')) {
                if (crime['Vict Sex'] == 'M') {
                        male2013.push(crime['Vict Sex'])
                    }
                if (crime['Vict Sex'] == 'F') {
                        female2013.push(crime['Vict Sex'])
                    }
                }
        else if (new Date(crime['DATE OCC']) < new Date('01/01/2015 0:00')) {
                    if (crime['Vict Sex'] == 'M') {
                            male2014.push(crime['Vict Sex'])
                        }
                    if (crime['Vict Sex'] == 'F') {
                            female2014.push(crime['Vict Sex'])
                        }
                    }
        else if (new Date(crime['DATE OCC']) < new Date('01/01/2016 0:00')) {
                    if (crime['Vict Sex'] == 'M') {
                            male2015.push(crime['Vict Sex'])
                            }
                    if (crime['Vict Sex'] == 'F') {
                            female2015.push(crime['Vict Sex'])
                            }
                        }
        else if (new Date(crime['DATE OCC']) < new Date('01/01/2017 0:00')) {
                    if (crime['Vict Sex'] == 'M') {
                            male2016.push(crime['Vict Sex'])
                                }
                    if (crime['Vict Sex'] == 'F') {
                            female2016.push(crime['Vict Sex'])
                            }
                        }
        else if (new Date(crime['DATE OCC']) < new Date('01/01/2018 0:00')) {
                if (crime['Vict Sex'] == 'M') {
                        male2017.push(crime['Vict Sex'])
                                }
                if (crime['Vict Sex'] == 'F') {
                        female2017.push(crime['Vict Sex'])
                                }
                        }
        else if (new Date(crime['DATE OCC']) < new Date('01/01/2019 0:00')) {
                if (crime['Vict Sex'] == 'M') {
                        male2018.push(crime['Vict Sex'])
                            }
                if (crime['Vict Sex'] == 'F') {
                        female2018.push(crime['Vict Sex'])
                            }
                    }
        else if (new Date(crime['DATE OCC']) < new Date('01/01/2020 0:00')) {
                        if (crime['Vict Sex'] == 'M') {
                            male2019.push(crime['Vict Sex'])
                        }
                        if (crime['Vict Sex'] == 'F') {
                            female2019.push(crime['Vict Sex'])
                        }
                    }
    }
    console.log(male2010.length)
    console.log(female2010.length)
    console.log(male2011.length)
    console.log(female2011.length)
    console.log(male2012.length)
    console.log(female2012.length)
    console.log(male2013.length)
    console.log(female2013.length)
    console.log(male2014.length)
    console.log(female2014.length)
    console.log(male2015.length)
    console.log(female2015.length)
    console.log(male2016.length)
    console.log(female2016.length)
    console.log(male2017.length)
    console.log(female2017.length)
    console.log(male2018.length)
    console.log(female2018.length)
    console.log(male2019.length)
    console.log(female2019.length) 
}

let trace1 = {
    x: male2010,
    y: female2010,
    type:"pie"
}

let layout2 = {
    height:600,
    width:800
}
Plotly.newPlot("pie", trace1, layout2);

// function init() {
//     let data = [{
//         values: male2010,female2010,
//         labels: ['Male','Female'],
//         type:'pie'
//     }]
//     let layout = {
//         height:600,
//         width:800
//     }
//     // updatePlotly.newPlot('pie',data,layout)
// } 

// d3.selectAll('#selDataset').on('change',getData)

// function getData() {
//     let dropdownMenu = d3.select('#selDataset');

//     let dataset = dropdownMenu.property('value');

//     let data = []

//     if (dataset == '2010') {
//         data = [male2010, female2010]
//     }
//     updatePlotly(data)
// }

// function updatePlotly(newdata) {
//     Plotly.restyle('pie',newdata);
// }

// init();

var test = d3.select("#pie").append('h4').text("test")