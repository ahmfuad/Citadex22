import { API_KEY, SHEET_ID, SHEET_BASEURL, CACHE_INTERVAL } from "../myCongif.json";
import React from "react";
import axios from "axios";
import Checkbox from "../Components/Checkbox/checkbox";

const range = "A2:C99";
const sheetName = "announcements";
const url = `${SHEET_BASEURL}/${SHEET_ID}/values/${sheetName}!${range}?key=${API_KEY}`;

class AnnouncementView extends React.Component {

    state = { annoucementsData: [], ready: false,tags:[],selected:[] };

    fetchData = () => {
        console.log(url);
        axios.get(url)
            .then(data => {
                if( data.data.values !== undefined )
                    var cleanData = data.data.values.filter(x => !!x);
                else cleanData = [];
                let tags = []
                for(let i=0;i<cleanData.length;i++){
                    let tag = cleanData[i][0].split(';');
                    tags.push(...tag);
                }
                for(let i=0;i<tags.length;i++) tags[i] = tags[i].trim().toUpperCase();
                var unique_tags = [...new Set(tags)];
                unique_tags.sort(function(a, b){ if(a === 'IMP') return false; if(b === 'IMP') return true; if(a.length!==b.length) return a.length > b.length; else return a>b});
                cleanData.reverse();
                this.setState({ annoucementsData: cleanData, ready: true, tags:unique_tags });
                console.log("here in announcement")
               // localStorage.setItem("announcementsData", JSON.stringify(cleanData));
              //  localStorage.setItem("lastAnnouncementsTime", Date.now());
            }).catch(err => console.log(err))
    }
    setFilter = (filter) =>{
        this.setState({selected:filter});
    }

    componentDidMount() {
       //  const lastTime = Number(localStorage.getItem("lastAnnouncementsTime"));
       // const cachedData = localStorage.getItem("announcementsData");
       //  const nowTime = Date.now();
       //
       //  if ((!cachedData) || (lastTime + CACHE_INTERVAL < nowTime)) {
            this.fetchData();
       //  }
       //  else {
       //      const cachedData = JSON.parse(localStorage.getItem("announcementsData"));
       //      this.setState({ annoucementsData: cachedData, ready: true });
       //  }
    }

    render() {

        const { annoucementsData, ready } = this.state;

        if (ready) {
            return (
                <React.Fragment>
                    <div className="container">
                        <div className="vertical-padding"></div>
                        <div className="vertical-padding"></div>
                        <h2><i className="bi bi-book"></i> Announcements</h2>

                        <div className="vertical-padding"></div>
                        <Checkbox
                            items={this.state.tags}
                            setFilter={this.setFilter}
                        />
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Tags</th>
                                        <th scope="col">Details</th>
                                        <th scope="col">Time Stamp</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        annoucementsData.filter((row) =>{
                                            let tags = row[0].split(';');
                                            for(let i=0;i<tags.length;i++){
                                                tags[i] = tags[i].trim().toUpperCase();
                                            }
                                            var unique_tags = [...new Set(tags)];
                                            unique_tags.sort(function(a, b){ if(a === 'IMP') return false; if(b === 'IMP') return true; if(a.length!==b.length) return a.length > b.length; else return a>b});
                                            row.tags = unique_tags;
                                            for(let i=0;i<tags.length;i++){
                                                if( this.state.selected.includes(tags[i]) ) return true;
                                            }
                                            if( this.state.selected.length === 0 ) return true;
                                            return false;

                                        }).map((each, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td><b>{
                                                        each.tags.map((tag,tagindex)=>{
                                                            let classname = "";
                                                            if( tag === 'IMP' ) classname = 'badge bg-danger fs-6 m-1';
                                                            else classname = 'badge bg-primary fs-6 m-1';
                                                            return (
                                                                <span className={classname}>{tag}</span>
                                                            )
                                                        })
                                                    }</b></td>
                                                    <td>{each[1]}</td>
                                                    <td>{each[2]}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
        return null;
    }

}


export default AnnouncementView;
