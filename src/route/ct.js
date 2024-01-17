import { CT_URL  } from "../myCongif.json";
import React from "react";

import './ct.css';

class CTView extends React.Component { 
    render() {

        if (true) {
            return (
                <React.Fragment>
                    <div className="container">
                        <div className="vertical-padding"></div>
                        <div className="vertical-padding"></div>
                        <h2><i className="bi bi-megaphone"></i> CT / Assignment / Lab Report</h2>

                        <div className="vertical-padding"></div>

                        <div className="vertical-padding"></div>
                        <div className="table-responsive">
                            <div className="container">
                                <center>
                                    <iframe width="100%" height="800" title="Class Link" src={CT_URL}></iframe>
                                </center>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
        return null;
    }

}


export default CTView;