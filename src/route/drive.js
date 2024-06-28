import { API_KEY, SHEET_ID, SHEET_BASEURL, CACHE_INTERVAL } from "../myCongif.json";
import React from "react";
import axios from "axios";

const range = "A2:C99";
const sheetName = "Drive";
const url = `${SHEET_BASEURL}/${SHEET_ID}/values/${sheetName}!${range}?key=${API_KEY}`;

class DriveView extends React.Component {

    state = { driveData: [], ready: false };

    fetchData = () => {
        axios.get(url)
            .then(data => {
                var cleanData = data.data.values.filter(x => !!x);
                this.setState({ driveData: cleanData, ready: true });
                
                localStorage.setItem("driveData", JSON.stringify(cleanData));
                localStorage.setItem("lastDriveTime", Date.now());
            }).catch(err => console.log(err))
    }

    componentDidMount() {
        const lastTime = Number(localStorage.getItem("lastDriveTime"));
        const cachedData = localStorage.getItem("driveData");
        const nowTime = Date.now();
        
        if ((!cachedData) || (lastTime + CACHE_INTERVAL < nowTime)) {
            this.fetchData();
        }
        else {
            const cachedData = JSON.parse(localStorage.getItem("driveData"));
            this.setState({ driveData: cachedData, ready: true });
        }
    }



    render() {

        const { driveData, ready } = this.state;

        if (ready) {
            return (
                <React.Fragment>
                    <div className="container">
                        <div className="vertical-padding"></div>
                        <div className="vertical-padding"></div>
                        <h2><i className="bi bi-hdd"></i> Drive</h2>

                        <div className="vertical-padding"></div>
                        <div className="table-responsive">
                            <table className="table table-striped" style={{textAlign:'center'}}>
                                <thead>
                                    <tr>
                                        <th scope="col"><h5>Level & Term</h5></th>
                                        <th scope="col"><h5>Our Drive</h5></th>
                                        <th scope="col"><h5>Seniors' Drive</h5></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        driveData.map((each, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{each[0]}</td>
                                                    <td>
                                                        <a className="btn btn-success btn-sm" href={each[1]} target="_blank" rel="noreferrer">
                                                            Open
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a className="btn btn-primary btn-sm" href={each[2]} target="_blank" rel="noreferrer">
                                                            Open
                                                        </a>
                                                    </td>
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


export default DriveView;
