import React from "react";

import {EXAMS_SEC_A, EXAMS_SEC_B, EXAMS_SEC_C} from '../myCongif.json'

class CTView extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="vertical-padding"></div>
                    <div className="vertical-padding"></div>
                    <h2><i className="bi bi-pencil-square"></i> Exam Details</h2>
                    <div className="vertical-padding"></div>
                    <div className="table-responsive">
                        <ul className="nav nav-pills nav-justified text-white bg-dark">
                            <li className="nav-item col-sm d-grid gap-3" role="presentation">
                                <button className="nav-link active text-white" id="pills-ctsecA-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-ctsecA" type="button" role="tab" aria-controls="pills-ctsecA"
                                        aria-selected="false">Section A
                                </button>
                            </li>
                            <li className="nav-item col-sm d-grid gap-3" role="presentation">
                                <button className="nav-link text-white" id="pills-ctsecB-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-ctsecB" type="button" role="tab" aria-controls="pills-ctsecB"
                                        aria-selected="false">Section B
                                </button>
                            </li>
                            <li className="nav-item col-sm d-grid gap-3" role="presentation">
                                <button className="nav-link text-white" id="pills-ctsecC-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-ctsecC" type="button" role="tab" aria-controls="pills-ctsecC"
                                        aria-selected="false">Section C
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-ctsecA" role="tabpanel"
                                 aria-labelledby="pills-ctsecA-tab">
                                <center>
                                    <iframe width="100%" height="900" title="Class Routine" src={EXAMS_SEC_A}></iframe>
                                </center>
                            </div>
                            <div className="tab-pane fade show" id="pills-ctsecB" role="tabpanel"
                                 aria-labelledby="pills-ctsecB-tab">
                                <center>
                                    <iframe width="100%" height="900" title="Class Routine" src={EXAMS_SEC_B}></iframe>
                                </center>
                            </div>
                            <div className="tab-pane fade show" id="pills-ctsecC" role="tabpanel"
                                 aria-labelledby="pills-ctsecC-tab">
                                <center>
                                    <iframe width="100%" height="900" title="Class Routine" src={EXAMS_SEC_C}></iframe>
                                </center>
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
}

export default CTView;