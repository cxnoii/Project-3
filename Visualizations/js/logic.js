
//reading the data from the criminal homicide file and passing the data 'x' into the loops function for analysis
d3.json('http://127.0.0.1:5000/api/homicides').then(function (x) {
    console.log(x);
    loops(x)
    })


//function that loops through data to populate lists with how many victims of each sex there were per year
function loops(data) {

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

//loop whichs checks the victim's sex and date occurence for each entry in the dataset
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
    //test commands to see if lists were populated
    // console.log(male2010.length)
    // console.log(female2010.length)
    // console.log(male2011.length)
    // console.log(female2011.length)
    // console.log(male2012.length)
    // console.log(female2012.length)
    // console.log(male2013.length)
    // console.log(female2013.length)
    // console.log(male2014.length)
    // console.log(female2014.length)
    // console.log(male2015.length)
    // console.log(female2015.length)
    // console.log(male2016.length)
    // console.log(female2016.length)
    // console.log(male2017.length)
    // console.log(female2017.length)
    // console.log(male2018.length)
    // console.log(female2018.length)
    // console.log(male2019.length)
    // console.log(female2019.length) 

//this function displays our default plot (a pie chart) of the year 2010
function defaultplot() {

let data = [{
    values: [male2010.length,female2010.length],
    labels: ['Male','Female'],
    type:"pie"
}]

let layout = {
    title:'Male vs Female Homicide Victims',
    height: 600,
    width: 800
}

Plotly.newPlot('plot',data,layout);

}

//this line makes calls on the get data function when the user changes options on the dropdown menu
d3.selectAll('#selDataset').on('change',getData)

//this function contains dropdown menu, and uses dropdown menu selection to change our dataset to the appropriate year selected
function getData() {
    let dropdownMenu = d3.select('#selDataset');

    let dataset = dropdownMenu.property('value');

    let data = []
    if (dataset == '2010') {
        data = {
            values: [male2010.length,female2010.length],
            labels: ['Male','Female'],
            type:"pie"
        }
    }
    else if (dataset == '2011') {
        data = {
            values: [male2011.length,female2011.length],
            labels: ['Male','Female'],
            type:"pie"
        }
    }
    else if (dataset == '2012') {
        data = {
            values: [male2012.length,female2012.length],
            labels: ['Male','Female'],
            type:"pie"
        }
    }
    else if (dataset == '2013') {
        data = {
            values: [male2013.length,female2013.length],
            labels: ['Male','Female'],
            type:"pie"
        }
    }
    else if (dataset == '2014') {
        data = {
            values: [male2014.length,female2014.length],
            labels: ['Male','Female'],
            type:"pie"
        }
    }
    else if (dataset == '2015') {
        data = {
            values: [male2015.length,female2015.length],
            labels: ['Male','Female'],
            type:"pie"
        }
    }
    else if (dataset == '2016') {
        data = {
            values: [male2016.length,female2016.length],
            labels: ['Male','Female'],
            type:"pie"
        }
    }
    else if (dataset == '2017') {
        data = {
            values: [male2017.length,female2017.length],
            labels: ['Male','Female'],
            type:"pie"
        }
    }
    else if (dataset == '2018') {
        data = {
            values: [male2018.length,female2018.length],
            labels: ['Male','Female'],
            type:"pie"
        }
    }
    else if (dataset == '2019') {
        data = {
            values: [male2019.length,female2019.length],
            labels: ['Male','Female'],
            type:"pie"
        }
    }
    else if (dataset == 'Overall Totals') {
        data = {
            values: [(male2010.length+male2011.length+male2012.length+male2013.length+male2014.length+male2015.length+male2016.length+male2017.length+male2018.length+male2019.length
                ),(female2010.length+female2011.length+female2012.length+female2013.length+female2014.length+female2015.length+female2016.length+female2017.length+female2018.length+female2019.length)],
            labels: ['Male','Female'],
            type:'pie'
        }
    }

//passing the data to the function that will update the plot
    updatePlotly(data)
}

//this function updates the plot by replacing it with a new one using the dataset provided from the getData function
function updatePlotly(newdata) {
    let layout2 = {
        title:'Male vs Female Homicide Victims',
        height: 600,
        width: 800
    }
    Plotly.newPlot('plot',[newdata],layout2);
}
  
//this calls upon the defaultplot function to run upon opening the html file, showing the 2010 pie chart as the initial pie chart displayed


defaultplot();  

}
