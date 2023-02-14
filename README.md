### Project-3 Proposal

<b>Los Angeles Crime Data over a decade (2010-2019)</b>

Group participants: Nicholas Dao, Jonathan Rico, Cristian M. Jung, Chika Okam, Brian Lee.

<b>Introduction</b>
Tracking Crime data is crucial for law enforcement agencies and citizens. There are many victims living with trauma or even citizens who have fear from becoming victims. The ability to avoid hot spots for crime would be great for civilians, also law enforcement would be able to note where to patrol and keep in check.

<b>Different interactive features include:</b>
- An overall view of Los Angeles and its districts.
- History of homicide and robbery reports.
- Multiple layers based on both categories of crimes in reports.
- Pie Charts showing male vs female homicide victimes over the years
- Charts showing correlations between population and crime rate

Questions we'll trying to be answer:
1. Where do we see hot spots of theft or assault? 
2. How safe is the planned destination and what should one be wary of?

<b>Source for the data:</b>
- https://data.lacity.org/Public-Safety/Crime-Data-from-2010-to-2019/63jg-8b9z/data
- https://openjustice.doj.ca.gov/exploration/crime-statistics
- https://en.wikipedia.org/wiki/Los_Angeles_County_District_Attorney

<b>Database/API</b>
We have used MongoDB for importing and housing our data. Then, we exported it as json.
Flask API was used to house the exported data.
GeoJson data was stored as a seperate javascript.
Web scraped table for additional data.

<b>Leaflet</b>
We created a map with the following layers
  -District Boundaries
  -Homicide Incidents
  -Robbery Incidents
  
 <b>Turf.js</b>
 -We used Turf.js to collect data for our linear regression analysis.
 -This JS library was used in order to determine which crimes occured in each district; the dataset did not contain a district for each crime.
 -The function within the library uses the case's [LAT,LNG] and checks if that point is within the district's geojson boundary.
 
 <b>Visualization</b>
 Pie Charts: Gender of Victims throughtout the years.
 
 <b>Analysis</b>
 Linear Regression
 Population vs Homicides
 Population vs Robberies
 
 
