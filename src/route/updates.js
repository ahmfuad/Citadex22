import React from "react";

class ClassLinkView extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="vertical-padding"></div>
                    <div className="vertical-padding"></div>
                    <h2><i className="bi bi-pencil"></i> Continuous Updates</h2>
                    <div className="vertical-padding"></div>
                    <div className="table-responsive">
                        <div className="container">
                            <center>
                                <iframe width="100%" height="600" title="Class Link" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS7voOYfpoKawV3ls9R7vWRXPRMBEPXhaFg_4z3i9VKcO9IiKEaLpWqiTuWw7ZoGY0mV2zEuemMro66/pubhtml"></iframe>
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

export default ClassLinkView;