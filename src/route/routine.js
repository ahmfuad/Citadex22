import React from "react";

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
                        <div className="container">
                            <center>
                                <iframe width="100%" height="900" title="Class Routine" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSj6-dGlcrUPA5ceUqMmBC7035xo3dA5A5htrwyfihXNm4dRIIjr4TmsMtApnn5khXeBf-WS9DaOoZL/pubhtml?gid=2051215713&single=true"></iframe>
                            </center>
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