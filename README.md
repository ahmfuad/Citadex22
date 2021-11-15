## Citadex 18
Citadex 18 is a simple portal for showing notices, classes, files etc. in a single place. This app was built using React and Google Sheets API. 

The structure is taken from  **[buetcse17.github.io](https://github.com/buetcse17/buetcse17.github.io)**  named as Citadex. Some more wrapper was put over it. And will add some new features soon.

## Features

#### Routine

HTML view of routine made by **Jehadul Karim Sabit**.

#### Drive

Drive links of our batch and our senior batchs

#### Updates

Continuous class updates written by **Mashiyat Mahjabin Prapty**.

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
    - config.json

- public
    - index.html
    - favicon
```
The `config.json` contains some necessary keys. This is gitignored for safety purposes. It should be in the folder `src/route` along side books.js, class-link.js etc

the structure is

```json
{
    "CACHE_INTERVAL": 30000,
    "CACHE_COMMENT": " ^ this is in milliseconds",

    "SHEET_ID": YOUR_SHEET_ID,
    "SHEET_BASEURL": YOUR_SHEET_BASE_URL,
    "API_KEY": YOUR_GOOGLE_API_KEY,

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

