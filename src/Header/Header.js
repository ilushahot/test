import React, {Component} from "react"
import "./header.scss"

export class Header extends Component {
    render() {
        return (
            <div className={"header-wrapper"}>
                <label className={"header-search"}> Github repositories </label>
                <div className={"searchbar-search"}>
                    <input type="text" placeholder={"Find a repository"} className={"rep-name"}/>
                    <input type="submit" value={"Search"} className={"search-input"}/>
                </div>
            </div>
        );
    }
}