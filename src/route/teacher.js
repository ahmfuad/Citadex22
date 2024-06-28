import React from "react";

import {SEC_A_TEACHERS,SEC_B_TEACHERS,SEC_C_TEACHERS} from '../myCongif.json'

class TeacherView extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="vertical-padding"></div>
                    <div className="vertical-padding"></div>
                    <h2><i className="bi bi-person-rolodex"></i> Teachers Info</h2>
                    <div className="vertical-padding"></div>
                    <div className="table-responsive">
                        <ul className="nav nav-pills nav-justified text-white bg-dark">
                            <li className="nav-item col-sm d-grid gap-3" role="presentation">
                                <button className="nav-link active text-white" id="pills-teasecA-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-teasecA" type="button" role="tab" aria-controls="pills-teasecA"
                                        aria-selected="false">Section A
                                </button>
                            </li>
                            <li className="nav-item col-sm d-grid gap-3" role="presentation">
                                <button className="nav-link text-white" id="pills-teasecB-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-teasecB" type="button" role="tab" aria-controls="pills-teasecB"
                                        aria-selected="false">Section B
                                </button>
                            </li>
                            <li className="nav-item col-sm d-grid gap-3" role="presentation">
                                <button className="nav-link text-white" id="pills-teasecC-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-teasecC" type="button" role="tab" aria-controls="pills-teasecC"
                                        aria-selected="false">Section C
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-teasecA" role="tabpanel"
                                 aria-labelledby="pills-teasecA-tab">
                                <center>
                                    <iframe width="100%" height="900" title="Class Routine" src={SEC_A_TEACHERS}></iframe>
                                </center>
                            </div>
                            <div className="tab-pane fade show" id="pills-teasecB" role="tabpanel"
                                 aria-labelledby="pills-teasecB-tab">
                                <center>
                                    <iframe width="100%" height="900" title="Class Routine" src={SEC_B_TEACHERS}></iframe>
                                </center>
                            </div>
                            <div className="tab-pane fade show" id="pills-teasecC" role="tabpanel"
                                 aria-labelledby="pills-teasecC-tab">
                                <center>
                                    <iframe width="100%" height="900" title="Class Routine" src={SEC_C_TEACHERS}></iframe>
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

export default TeacherView;