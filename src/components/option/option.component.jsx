import React from "react";

export const Option = ({value, text}) => {
    return (
        <option className="option" value={value}>
            {text}
        </option>
    );
}