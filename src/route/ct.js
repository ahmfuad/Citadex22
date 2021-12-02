import { API_KEY, SHEET_ID, SHEET_BASEURL, CACHE_INTERVAL } from "../myCongif.json";
import React from "react";
import axios from "axios";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './ct.css';
const localizer = momentLocalizer(moment);

const range = "A2:G99";
const sheetName = "CT-Assignment-LabReport";
const url = `${SHEET_BASEURL}/${SHEET_ID}/values/${sheetName}!${range}/?key=${API_KEY}`;
const limks = 5;

const formats = {
    eventTimeRangeFormat: () => {
        return "";
    },
};
class AnouncementView extends React.Component {

    state = { ctData: [], ready: false,events: [] };

    getEvents = (cleanData) =>{
        var eventss = []
        let prevDescription = "";
        let prevCourse = "";
        for(let i=0;i<cleanData.length;i++){
            const bla = cleanData[i][0].split('/');
            const newDate = [bla[1],bla[0],bla[2]].join('/');
            if( cleanData[i][3] ) prevCourse = cleanData[i][3];
            if( cleanData[i][4] ) prevDescription = cleanData[i][4];
            console.log(cleanData[i][1],newDate);
            eventss.push({
                start: newDate,
                end: newDate,
                title: ["[",cleanData[i][1],']',cleanData[i][2],prevCourse,prevDescription].join(" ")

            })
        }
        return eventss;
    }

    fetchData = () => {
        axios.get(url)
            .then(data => {
                var cleanData = data.data.values.filter(x => !!x);
                console.log(cleanData);
                var eventss = this.getEvents(cleanData);
                this.setState({ ctData: cleanData, ready: true,events:eventss });
               // console.log(eventss);
                localStorage.setItem("ctData", JSON.stringify(cleanData));
                localStorage.setItem("lastFilesTime", Date.now());
            }).catch(err => console.log(err))
    }

    componentDidMount() {
        const lastTime = Number(localStorage.getItem("lastFilesTime"));
        const cachedData = localStorage.getItem("ctData");
        const nowTime = Date.now();
        
        // if ((!cachedData) || (lastTime + CACHE_INTERVAL < nowTime)) {
        if(true){
            this.fetchData();
        }
        else {
            const cachedData = JSON.parse(localStorage.getItem("ctData"));
            var eventss = this.getEvents(cachedData);
            this.setState({ ctData: cachedData, ready: true,events:eventss });
        }
    }

    render() {

        const { ctData, ready } = this.state;

        if (ready) {
            return (
                <React.Fragment>
                    <div className="container">
                        <div className="vertical-padding"></div>
                        <div className="vertical-padding"></div>
                        <h2><i className="bi bi-megaphone"></i> CT / Assignment / Lab Report</h2>

                        <div className="vertical-padding"></div>
                        <Calendar
                            localizer={localizer}
                            defaultDate={new Date()}
                            defaultView="month"
                            views={['month','agenda']}
                            events={this.state.events}
                            style={{ height: "70vh" }}
                            popup={true}
                            formats={formats}
                        />
                        <div className="vertical-padding"></div>
                        <div className="table-responsive">
                            <div className="container">
                                <center>
                                    <iframe width="100%" height="800" title="Class Link" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT6T4X5VcpSCHRVQAtd63hk1KzuTatQI0L49cgYroFjOB8ajMZQ9gqng8WDpS1cXGr3hgc4XmDY7MCn/pubhtml?gid=1820687954&single=true"></iframe>
                                </center>
                            </div>
                        </div>
                        {/*<div className="vertical-padding"></div>*/}
                        {/*<div className="table-responsive">*/}
                        {/*    <table className="table table-striped" style={{borderCollapse:'separate',borderSpacing:'5px 15px'}} >*/}
                        {/*        <thead>*/}
                        {/*            <tr>*/}
                        {/*                <th scope="col">Date</th>*/}
                        {/*                <th scope="col">Section</th>*/}
                        {/*                <th scope="col">Course</th>*/}
                        {/*                <th scope="col">Topic</th>*/}
                        {/*                <th scope="col">Description</th>*/}
                        {/*                <th scope="col">Book</th>*/}
                        {/*            </tr>*/}
                        {/*        </thead>*/}
                        {/*        <tbody>*/}
                        {/*            {*/}
                        {/*                ctData.map((each, index) => {*/}
                        {/*                    return (*/}
                        {/*                        <tr key={index} style={{verticalAlign:'middle'}}  >*/}
                        {/*                            <td style={{ borderRadius:'5px',boxShadow:'0 10px 10px 1px rgba(0,0,0,0.05)',verticalAlign:'middle'}} >*/}
                        {/*                                <p style={{fontWeight:'600',margin:'0px'}}>{each[0]}</p>*/}
                        {/*                            </td>*/}
                        {/*                            <td style={{borderRadius:'5px',boxShadow:'0 10px 10px 1px rgba(0,0,0,0.05)', textAlign:'center'}} ><p style={{margin:'0px'}} >{each[1]}</p></td>*/}
                        {/*                            <td style={{borderRadius:'5px',boxShadow:'0 10px 10px 1px rgba(0,0,0,0.05)',width:'80px' }} ><p style={{margin:'0px'}}>{each[2]?each[2]:"\""}</p></td>*/}
                        {/*                            <td style={{borderRadius:'5px',boxShadow:'0 10px 10px 1px rgba(0,0,0,0.05)'}} ><p style={{margin:'0px'}}>{each[3]?each[3]:"\""}</p></td>*/}
                        {/*                            <td style={{borderRadius:'5px',boxShadow:'0 10px 10px 1px rgba(0,0,0,0.05)'}} ><p style={{margin:'0px'}}>{each[4]?each[4]:"\""}</p></td>*/}
                        {/*                            <td style={{borderRadius:'5px',boxShadow:'0 10px 10px 1px rgba(0,0,0,0.05)'}} ><p style={{margin:'0px'}}>{each[5]}</p></td>*/}

                        {/*                        </tr>*/}
                        {/*                    )*/}
                        {/*                })*/}
                        {/*            }*/}
                        {/*        </tbody>*/}
                        {/*    </table>*/}
                        {/*</div>*/}
                    </div>
                </React.Fragment>
            );
        }
        return null;
    }

}


export default AnouncementView;