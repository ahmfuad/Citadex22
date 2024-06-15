import React from "react";

import {SEC_A_ROUTINE,SEC_B_ROUTINE,SEC_C_ROUTINE} from '../myCongif.json'

class RoutineView extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="vertical-padding"></div>
                    <div className="vertical-padding"></div>
                    <h2><i className="bi bi-laptop"></i> Class Routine</h2>
                    <div className="vertical-padding"></div>
                    <div className="table-responsive">
                        <ul className="nav nav-pills text-white bg-dark row p-1">
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
                                <center>
                                    <iframe width="100%" height="900" title="Class Routine" src={SEC_A_ROUTINE}></iframe>
                                </center>
                            </div>
                            <div className="tab-pane fade show" id="pills-secB" role="tabpanel"
                                 aria-labelledby="pills-secB-tab">
                                <center>
                                    <iframe width="100%" height="900" title="Class Routine" src={SEC_B_ROUTINE}></iframe>
                                </center>
                            </div>
                            <div className="tab-pane fade show" id="pills-secC" role="tabpanel"
                                 aria-labelledby="pills-secC-tab">
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