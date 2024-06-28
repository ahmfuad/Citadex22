import React from "react";

import {SEC_A_ROUTINE,SEC_B_ROUTINE,SEC_C_ROUTINE} from '../myCongif.json'

class RoutineView extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="vertical-padding"></div>
                    <div className="vertical-padding"></div>
                    <h2><i className="bi bi-laptop"></i>Detailed Routine</h2>
                    <div className="vertical-padding"></div>
                    <div className="table-responsive">
                        <ul className="nav nav-pills nav-justified text-white bg-dark">
                            <li className="nav-item col-sm d-grid gap-3" role="presentation">
                                <button className="nav-link active text-white" id="pills-routsecA-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-routsecA" type="button" role="tab" aria-controls="pills-routsecA"
                                        aria-selected="false">Section A
                                </button>
                            </li>
                            <li className="nav-item col-sm d-grid gap-3" role="presentation">
                                <button className="nav-link text-white" id="pills-routsecB-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-routsecB" type="button" role="tab" aria-controls="pills-routsecB"
                                        aria-selected="false">Section B
                                </button>
                            </li>
                            <li className="nav-item col-sm d-grid gap-3" role="presentation">
                                <button className="nav-link text-white" id="pills-routsecC-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-routsecC" type="button" role="tab" aria-controls="pills-routsecC"
                                        aria-selected="false">Section C
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-routsecA" role="tabpanel"
                                 aria-labelledby="pills-routsecA-tab">
                                <center>
                                    <iframe width="100%" height="900" title="Class Routine" src={SEC_A_ROUTINE}></iframe>
                                </center>
                            </div>
                            <div className="tab-pane fade show" id="pills-routsecB" role="tabpanel"
                                 aria-labelledby="pills-routsecB-tab">
                                <center>
                                    <iframe width="100%" height="900" title="Class Routine" src={SEC_B_ROUTINE}></iframe>
                                </center>
                            </div>
                            <div className="tab-pane fade show" id="pills-routsecC" role="tabpanel"
                                 aria-labelledby="pills-routsecC-tab">
                                <center>
                                    <iframe width="100%" height="900" title="Class Routine" src={SEC_C_ROUTINE}></iframe>
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

export default RoutineView;