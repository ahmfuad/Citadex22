import React from "react";

const Box = ({ label, isSelected, onCheckboxChange }) => (
    <div className="form-check">
        <label className="fs-5">
            <input
                type="checkbox"
                name={label}
                checked={isSelected}
                onChange={onCheckboxChange}
                className="form-check-input fs-5"
            />
            {label}
        </label>
    </div>
);

export default Box;