## Project3 Database import codes

#Census Collection into Project3 database
mongoimport --type csv -d Project3 -c Census_Data_2010 --headerline --drop Census_Data_by_Council_District.csv

#Census Collection export file type json
mongoexport  -d Project3 -c Census_Data_2010 --out=Census_Data_by_Council_District.json

#Criminal Homicide into Project3 database
mongoimport --type json -d Project3 -c criminal_homicide_2010_2019  --drop --jsonArray criminal_homicide_2010_2019.json

#Robbery Collection into Project3 database
mongoimport --type json -d Project3 -c robbery_2010_2019  --drop --jsonArray robbery_2010_2019.json