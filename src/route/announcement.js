import { API_KEY, SHEET_ID, SHEET_BASEURL, CACHE_INTERVAL } from "../myCongif.json";
import React from "react";
import axios from "axios";
import Checkbox from "../Components/Checkbox/checkbox";
import {SMALL_ROUTINE_A,SMALL_ROUTINE_B,SMALL_ROUTINE_C} from '../myCongif.json'

const range = "A2:D99";
const sheetName = "announcements";
const url = `${SHEET_BASEURL}/${SHEET_ID}/values/${sheetName}!${range}?key=${API_KEY}`;

class AnnouncementView extends React.Component {

    state = { annoucementsData: [], ready: false,tags:[],selected:[] };

    fetchData = () => {
        // console.log(url);
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
                    <div>
                        <ul className="nav nav-pills nav-justified text-white bg-dark">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active text-white" id="pills-allA-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-allA" type="button" role="tab" aria-controls="pills-allA"
                                        aria-selected="false">Section A
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link text-white" id="pills-allB-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-allB" type="button" role="tab" aria-controls="pills-allB"
                                        aria-selected="false">Section B
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link text-white" id="pills-allC-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-allC" type="button" role="tab" aria-controls="pills-allC"
                                        aria-selected="false">Section C
                                </button>
                            </li>
                        </ul>
                        </div>
                        <div className="table-responsive">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-allA" role="tabpanel"
                                 aria-labelledby="pills-allA-tab">
                                
                                <div className="container">
                                    <div className="vertical-padding"></div>
                                    {/* <div className="vertical-padding"></div> */}
                                    <h2><i className="bi bi-pin-angle-fill"></i> Announcements</h2>

                                    {/* <div className="vertical-padding"></div> */}
                                    {/* <Checkbox
                                        items={this.state.tags}
                                        setFilter={this.setFilter}
                                    /> */}
                                    <div className="table-responsive rsz" style={{ maxHeight: '300px', overflowY: 'scroll' }}>
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
                                                        if(each[3]!= null && each[3]==="All" || each[3]==="Sec A") {
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
                                                        }
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                       
                                    </div>
                                    <div className="vertical-padding"></div>
                                    {/* <div className="vertical-padding"></div> */}
                                    <h2><i className="bi bi-book"></i> Class Routine</h2>
                                    <center>
                                    <iframe width="100%" height="900" title="Class Routine" src={SMALL_ROUTINE_A}></iframe>
                                    </center>
                                </div>



                            </div>
                            <div className="tab-pane fade show" id="pills-allB" role="tabpanel"
                                 aria-labelledby="pills-allB-tab">

                                <div className="container">
                                    <div className="vertical-padding"></div>
                                    {/* <div className="vertical-padding"></div> */}
                                    <h2><i className="bi bi-pin-angle-fill"></i> Announcements</h2>

                                    {/* <div className="vertical-padding"></div> */}
                                    {/* <Checkbox
                                        items={this.state.tags}
                                        setFilter={this.setFilter}
                                    /> */}
                                    <div className="table-responsive rsz" style={{ maxHeight: '300px', overflowY: 'scroll' }}>
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
                                                        if(each[3]!= null && each[3]==="All" || each[3]==="Sec B") {
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
                                                        }
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="vertical-padding"></div>
                                    {/* <div className="vertical-padding"></div> */}
                                    <h2><i className="bi bi-book"></i> Class Routine</h2>
                                    <center>
                                    <iframe width="100%" height="900" title="Class Routine" src={SMALL_ROUTINE_B}></iframe>
                                    </center>
                                </div>


                            </div>
                            <div className="tab-pane fade show" id="pills-allC" role="tabpanel"
                                 aria-labelledby="pills-allC-tab">
                                
                                <div className="container">
                                    <div className="vertical-padding"></div>
                                    {/* <div className="vertical-padding"></div> */}
                                    <h2><i className="bi bi-pin-angle-fill"></i> Announcements</h2>

                                    {/* <div className="vertical-padding"></div> */}
                                    {/* <Checkbox
                                        items={this.state.tags}
                                        setFilter={this.setFilter}
                                    /> */}
                                    <div className="table-responsive rsz" style={{ maxHeight: '300px', overflowY: 'scroll' }}>
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
                                                        if(each[3]!= null && each[3]==="All" || each[3]==="Sec C") {
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
                                                        }
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="vertical-padding"></div>
                                    {/* <div className="vertical-padding"></div> */}
                                    <h2><i className="bi bi-book"></i> Class Routine</h2>
                                    <center>
                                    <iframe width="100%" height="900" title="Class Routine" src={SMALL_ROUTINE_C}></iframe>
                                    </center>
                                </div>


                            </div>
                        </div>
                    </div>


                    
                </React.Fragment>
            );
        }
        return null;
    }

}


export default AnnouncementView;
