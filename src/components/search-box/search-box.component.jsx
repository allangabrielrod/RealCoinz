import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./search-box.styles.css";

export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <div className="search">
            <FontAwesomeIcon icon={ faSearch } /> 
            <input 
                type="search"
                placeholder={ placeholder }
                onChange={ handleChange }
            />
        </div>
    );
}