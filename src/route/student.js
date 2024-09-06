import { API_KEY, SHEET_ID, SHEET_BASEURL, CACHE_INTERVAL } from "../myCongif.json";
import React from "react";
import axios from "axios";
import {SEC_A_STUDENTS, SEC_B_STUDENTS, SEC_C_STUDENTS} from '../myCongif.json'

const range = "A2:H99";
const sheetNameA = "Students: Sec A";
const sheetNameB = "Students: Sec B";
const sheetNameC = "Students: Sec C";
const urlA = `${SHEET_BASEURL}/${SHEET_ID}/values/${sheetNameA}!${range}?key=${API_KEY}`;
const urlB = `${SHEET_BASEURL}/${SHEET_ID}/values/${sheetNameB}!${range}?key=${API_KEY}`;
const urlC = `${SHEET_BASEURL}/${SHEET_ID}/values/${sheetNameC}!${range}?key=${API_KEY}`;

class StudentView extends React.Component {

    state = { studentDataA: [], studentDataB: [], studentDataC: [], ready: false };

    fetchData = () => {
        axios.get(urlA)
            .then(data => {
                var cleanData = data.data.values.filter(x => !!x);
                this.setState({ studentDataA: cleanData, ready: true });
                
                localStorage.setItem("studentDataA", JSON.stringify(cleanData));
                localStorage.setItem("laststudentATime", Date.now());
            }).catch(err => console.log(err))

            axios.get(urlB)
            .then(data => {
                var cleanData = data.data.values.filter(x => !!x);
                this.setState({ studentDataB: cleanData, ready: true });
                
                localStorage.setItem("studentDataA", JSON.stringify(cleanData));
                localStorage.setItem("laststudentBTime", Date.now());
            }).catch(err => console.log(err))

            axios.get(urlC)
            .then(data => {
                var cleanData = data.data.values.filter(x => !!x);
                this.setState({ studentDataC: cleanData, ready: true });
                
                localStorage.setItem("studentDataC", JSON.stringify(cleanData));
                localStorage.setItem("laststudentCTime", Date.now());
            }).catch(err => console.log(err))

    }

    componentDidMount() {
        const lastTimeA = Number(localStorage.getItem("laststudentATime"));
        const lastTimeB = Number(localStorage.getItem("laststudentBTime"));
        const lastTimeC = Number(localStorage.getItem("laststudentCTime"));
        const cachedDataA = localStorage.getItem("studentDataA");
        const cachedDataB = localStorage.getItem("studentDataB");
        const cachedDataC = localStorage.getItem("studentDataC");
        const nowTime = Date.now();
        
        if ((!cachedDataA) || (!cachedDataB) || (!cachedDataC) || (lastTimeA + CACHE_INTERVAL < nowTime) || (lastTimeB + CACHE_INTERVAL < nowTime) || (lastTimeC + CACHE_INTERVAL < nowTime)) {
            this.fetchData();
        }
        else {
            const cachedDataA = JSON.parse(localStorage.getItem("studentDataA"));
            const cachedDataB = JSON.parse(localStorage.getItem("studentDataB"));
            const cachedDataC = JSON.parse(localStorage.getItem("studentDataC"));
            this.setState({ studentDataA: cachedDataA, studentDataB: cachedDataB, studentDataC: cachedDataC, ready: true });
        }
    }

    render() {

        const { studentDataA, studentDataB, studentDataC, ready } = this.state;

        if (ready) {
            return (
                <React.Fragment>
                    <div className="container">
                    <div className="vertical-padding"></div>
                    <div className="vertical-padding"></div>
                    <h2><i className="bi bi-person-badge-fill"></i> Students</h2>
                    <div className="vertical-padding"></div>
                    <div className="table-responsive">
                        <ul className="nav nav-pills nav-justified text-white bg-dark">
                            <li className="nav-item col-sm d-grid gap-3" role="presentation">
                                <button className="nav-link active text-white" id="pills-secA-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-secA" type="button" role="tab" aria-controls="pills-secA"
                                        aria-selected="false">Section A
                                </button>
                            </li>
                            <li className="nav-item col-sm d-grid gap-3" role="presentation">
                                <button className="nav-link text-white" id="pills-secB-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-secB" type="button" role="tab" aria-controls="pills-secB"
                                        aria-selected="false">Section B
                                </button>
                            </li>
                            <li className="nav-item col-sm d-grid gap-3" role="presentation">
                                <button className="nav-link text-white" id="pills-secC-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-secC" type="button" role="tab" aria-controls="pills-secC"
                                        aria-selected="false">Section C
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-secA" role="tabpanel"
                                 aria-labelledby="pills-secA-tab">
                                
                                <div className="vertical-padding"></div>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Facebook ID</th>
                                                <th scope="col">Blood Group</th>
                                                <th scope="col">Hall</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    {
                                        studentDataA.map((each, index) => {

                                            let classNameBook,classNameSolution;
                                            if( each[4] )
                                                classNameBook = "btn btn-primary btn-sm";
                                            else
                                                classNameBook = "btn btn-primary btn-sm disables";

                                            return (
                                                <tr key={index}>
                                                    <td>{each[0]}</td>
                                                    <td><b>{each[1]}</b></td>
                                                    <td>{each[2]}</td>
                                                    
                                                    <td>
                                                        <a  className={classNameBook} href={each[4]} target="_blank" rel="noreferrer">
                                                           Profile
                                                        </a>
                                                    </td>
                                                    <td>{each[6]}</td>
                                                    <td>{each[7]}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            </div>
                            

                            </div>


                            <div className="tab-pane fade show" id="pills-secB" role="tabpanel"
                                 aria-labelledby="pills-secB-tab">
                                <div className="vertical-padding"></div>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Facebook ID</th>
                                                <th scope="col">Blood Group</th>
                                                <th scope="col">Hall</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    {
                                        studentDataB.map((each, index) => {

                                            let classNameBook,classNameSolution;
                                            if( each[4] )
                                                classNameBook = "btn btn-primary btn-sm";
                                            else
                                                classNameBook = "btn btn-primary btn-sm disables";

                                            return (
                                                <tr key={index}>
                                                    <td>{each[0]}</td>
                                                    <td><b>{each[1]}</b></td>
                                                    <td>{each[2]}</td>
                                                    <td>
                                                        <a  className={classNameBook} href={each[4]} target="_blank" rel="noreferrer">
                                                            Profile
                                                        </a>
                                                    </td>
                                                    <td>{each[6]}</td>
                                                    <td>{each[7]}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            </div>
                            </div>
                            <div className="tab-pane fade show" id="pills-secC" role="tabpanel"
                                 aria-labelledby="pills-secC-tab">
                                <div className="vertical-padding"></div>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Facebook ID</th>
                                                <th scope="col">Blood Group</th>
                                                <th scope="col">Hall</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    {
                                        studentDataC.map((each, index) => {

                                            let classNameBook,classNameSolution;
                                            if( each[4] )
                                                classNameBook = "btn btn-primary btn-sm";
                                            else
                                                classNameBook = "btn btn-primary btn-sm disables";

                                            return (
                                                <tr key={index}>
                                                    <td>{each[0]}</td>
                                                    <td><b>{each[1]}</b></td>
                                                    <td>{each[2]}</td>
                                                    
                                                    <td>
                                                        <a  className={classNameBook} href={each[4]} target="_blank" rel="noreferrer">
                                                            Profile
                                                        </a>
                                                    </td>
                                                    <td>{each[6]}</td>
                                                    <td>{each[7]}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="vertical-padding"></div>
                    <div className="vertical-padding"></div>
                    <div className="vertical-padding"></div>
                </div>

                
                
                </React.Fragment>
            );
        }
        return null;
    }

}


export default StudentView;
