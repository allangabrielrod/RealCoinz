import React from "react";
import { SearchBox } from "../search-box/search-box.component";
import "./navbar.styles.css";

export const Navbar = ({handleSearch}) => {
    return (
        <nav className="nav">
            <div className="nav-container">
                <a href="/" className="nav-brand">
                    <h1>RealCoinz</h1>
                </a>
                <SearchBox 
                    placeholder="Trying to find something ?"
                    handleChange={handleSearch}
                />
            </div>
        </nav>
    );
}