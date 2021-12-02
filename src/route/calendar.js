import { API_KEY, SHEET_ID, SHEET_BASEURL, CACHE_INTERVAL } from "../myCongif.json";
import React from "react";
import axios from "axios";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

const range = "A2:F99";
const sheetName = "CT-Assignment-LabReport";
const url = `${SHEET_BASEURL}/${SHEET_ID}/values/${sheetName}!${range}?key=${API_KEY}`;

class CalendarView extends React.Component {
    state = {
        filesData: [],
        ready: false,
        events: [
            {
                start: "11/11/2021",
                end: "11/11/2021",
                title: "B1 EEE 270 Labss"
            },{
                start: moment().toDate(),
                end: moment()
                    .add(1, "days")
                    .toDate(),
                title: "B1 EEE 270 Lab"
            },{
                start: moment().toDate(),
                end: moment()
                    .add(1, "days")
                    .toDate(),
                title: "B1 EEE 270 Lab"
            },{
                start: moment().toDate(),
                end: moment()
                    .add(1, "days")
                    .toDate(),
                title: "B1 EEE 270 Lab"
            }
        ] };

    fetchData = () => {
        axios.get(url)
            .then(data => {
                var cleanData = data.data.values.filter(x => !!x);
                console.log(cleanData);
                this.setState({ filesData: cleanData, ready: true });

                localStorage.setItem("filesData", JSON.stringify(cleanData));
                localStorage.setItem("lastFilesTime", Date.now());
            }).catch(err => console.log(err))
    }

    componentDidMount() {
        console.log(moment().toDate())
        console.log("henlo->",Date.parse('29-11-2021'));

        const lastTime = Number(localStorage.getItem("lastFilesTime"));
        const cachedData = localStorage.getItem("filesData");
        const nowTime = Date.now();

        if ((!cachedData) || (lastTime + CACHE_INTERVAL < nowTime)) {
            this.fetchData();
        }
        else {
            const cachedData = JSON.parse(localStorage.getItem("filesData"));
            this.setState({ filesData: cachedData, ready: true });
        }
    }

    render() {

        const { filesData, ready } = this.state;

        if (true) {
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
                            events={this.state.events}
                            style={{ height: "100vh" }}
                        />
                    </div>
                </React.Fragment>
            );
        }
        return null;
    }

}


export default CalendarView;