import React from "react";

class SyllabusView extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="vertical-padding"></div>
                    <div className="vertical-padding"></div>
                    <h2><i className="bi bi-pencil"></i> Syllabus</h2>
                    <div className="vertical-padding"></div>
                    <div className="table-responsive">
                        <div className="container">
                            <center>
                                <iframe width="100%" height="800" title="Class Link"
                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRLzFVwEkHNIS3wFIV0c5nXNk1eQ0vpNnhW9tkYEUT_xl1LCSWKXVeosRK5K03rl46m_RXCQdGtmmSF/pubhtml"></iframe>
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

export default SyllabusView;