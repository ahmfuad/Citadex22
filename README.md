## Citadex 22
Citadex 22 is a simple portal for showing notices, classes, files etc. in a single place. This app was built using React and Google Sheets API. 

The structure is taken from  **[buetcse17.github.io](https://github.com/buetcse17/buetcse17.github.io) and [Citadex18](https://github.com/TamimEhsan/Citadex18)**  named as Citadex.

## Features

#### Announcements

Add announcements, see and filter by tags

#### Detailed Routine

HTML view of routine made by **Jehadul Karim Sabit**.

#### CT, Assignments and lab reports

Published google sheet view of ct assignment dates

#### Drive

Drive links of our batch and our senior batchs

#### Updates

Currently hidden, but you can use it by uncommenting the lines

#### Books

Download books and solution manuals of the current term.

#### Links

All necessary files and links of this term gathered together.

#### Student Info
All Students' information

#### Teacher Info
All course teachers' Information


## Structure
```
- docs
    - // react static files

- src
    - route
        - Books
        - Drive
        - Notice
        - Classes
        - Files
        - ....
    - App.js
    - index.js
    - index.css
    - **myCongif.json**

- public
    - index.html
    - favicon
```
The `myCongif.json` contains some necessary keys. This is gitignored for safety purposes. It should be in the folder `src/` along side books.js, class-link.js etc

the structure is

```json
{
    "CACHE_INTERVAL": 30000,
    "CACHE_COMMENT": " ^ this is in milliseconds",

    "SHEET_ID": "",
    "SHEET_BASEURL": "https://sheets.googleapis.com/v4/spreadsheets",
    "API_KEY": "",

    "CT_URL": "",
    "SMALL_ROUTINE_A": "",
    "SMALL_ROUTINE_B": "",
    "SMALL_ROUTINE_C": "",
    
    "SEC_A_ROUTINE": "",
    "SEC_B_ROUTINE": "",
    "SEC_C_ROUTINE": "",

    "SEC_A_STUDENTS": "",
    "SEC_B_STUDENTS": "",
    "SEC_C_STUDENTS": "",

    "SEC_A_TEACHERS": "",
    "SEC_B_TEACHERS": "",
    "SEC_C_TEACHERS": "",

    "EXAMS_SEC_A": "",
    "EXAMS_SEC_B": "",
    "EXAMS_SEC_C": "",
    
}

```

## The API Call
The `GET` request format is structured in this way:
```https://sheets.googleapis.com/v4/spreadsheets/SHEETS_ID/values/SHEET_NAME?key=GOOGLE_API_KEY```


Next you need to:

- Configure the sheet

- Get the google api key

- Deploy

### Running locally

```
npm install -g serve
npm run build
serve -s build
```

### Deployment
To deploy after any change in netlify
```
npm run build
netlify deploy --prod
```
