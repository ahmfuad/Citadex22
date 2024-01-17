import React, { Component } from "react";
import Box from "./box";

const OPTIONS = ["One", "Two", "Three"];

class Checkbox extends Component {
    state = {
        checkboxes:{Default:false}
    };
    componentDidMount() {

        this.setState({
            checkboxes: this.props.items.reduce(
                (options, option) => ({
                    ...options,
                    [option]: false
                }),
                {}
            )
        })

    }

    selectAllCheckboxes = isSelected => {
        Object.keys(this.state.checkboxes).forEach(checkbox => {
            // BONUS: Can you explain why we pass updater function to setState instead of an object?
            this.setState(prevState => ({
                checkboxes: {
                    ...prevState.checkboxes,
                    [checkbox]: isSelected
                }
            }));
        });
    };

    selectAll = () => this.selectAllCheckboxes(true);

    deselectAll = () => this.selectAllCheckboxes(false);

    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;

        this.setState(prevState => ({
            checkboxes: {
                ...prevState.checkboxes,
                [name]: !prevState.checkboxes[name]
            }
        }));
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        let filter = [];
        Object.keys(this.state.checkboxes)
            .filter(checkbox => this.state.checkboxes[checkbox])
            .forEach(checkbox => {
                // console.log(checkbox, "is selected.");
                filter.push(checkbox);
            });
        this.props.setFilter(filter);
    };

    createCheckbox = option => (
        <div className={'me-5'}>
            <Box
                label={option}
                isSelected={this.state.checkboxes[option]}
                onCheckboxChange={this.handleCheckboxChange}
                key={option}
            />
        </div>
    );

    createCheckboxes = () => this.props.items.map(this.createCheckbox);

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className={'d-flex justify-content-start"'}>
                                {this.createCheckboxes()}
                            </div>

                            <div className="form-group mt-2">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary m-2"
                                    onClick={this.selectAll}
                                >
                                    Select All
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-primary m-2"
                                    onClick={this.deselectAll}
                                >
                                    Deselect All
                                </button>
                                <button type="submit" className="btn btn-primary m-2">
                                    Apply
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                * Deselect all to remove filter or show all
            </div>
        );
    }
}

export default Checkbox;