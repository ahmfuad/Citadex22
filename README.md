## Citadex 22
Citadex 22 is a simple portal for showing notices, classes, files etc. in a single place. This app was built using React and Google Sheets API. 

The structure is taken from  **[buetcse17.github.io](https://github.com/buetcse17/buetcse17.github.io) and [Citadex18](https://github.com/TamimEhsan/Citadex18)**  named as Citadex.

## Features

#### Announcements

Add announcements, see and filter by tags

#### Routine

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
The `myCongif.json` contains some necessary keys. This is gitignored for safety purposes. It should be in the folder `src/route` along side books.js, class-link.js etc

the structure is

```json
{
    "CACHE_INTERVAL": 30000,
    "CACHE_COMMENT": " ^ this is in milliseconds",

    "SHEET_ID": YOUR_SHEET_ID,
    "SHEET_BASEURL": YOUR_SHEET_BASE_URL,
    "API_KEY": YOUR_GOOGLE_API_KEY,

    "CT_URL": "",
    "SEC_A_ROUTINE":"",
    "SEC_B_ROUTINE":"",

    "DRIVE_LINK": [
        {
            "name": "1-1",
            "link": SOME_LINKS,
            "senior_link": SOME_LINKS
        },
        {
            "name": "1-2",
            "link": SOME_LINKS,
            "senior_link": SOME_LINKS
        },
    ]
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