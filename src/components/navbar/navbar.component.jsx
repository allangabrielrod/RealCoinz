import React from "react";
import { SearchBox } from "../search-box/search-box.component";
import "./navbar.styles.css";

export const Navbar = ({handleSearch}) => {
    return (
        <nav className="nav">
            <div className="nav-container">
                <h1 className="nav-brand">RealCoinz</h1>
                <div className="nav-search">
                    <span role="img" aria-hidden="true">&#128270;</span>
                    <SearchBox 
                        placeholder="Trying to find something ?"
                        handleChange={handleSearch}
                    />
                </div>
            </div>
        </nav>
    );
}