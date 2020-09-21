import React from "react";
import "./select.styles.css";

export const Select = ({handleOption, children}) => {
    return (
        <select onChange={handleOption} className="select">
            {children}
        </select> 
    );
}