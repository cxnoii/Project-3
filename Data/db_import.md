## Project3 Database import codes

mongoimport --type csv -d Project3 -c Census_Data_2010 --headerline --drop Census_Data_by_Council_District.csv
mongoimport --type csv -d Project3 -c criminal_homicide_2010_2019  --drop --jsonArray criminal_homicide_2010_2019.json
