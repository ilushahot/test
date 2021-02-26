import React, {Component} from "react"
import "./searchbar.scss"

export class Searchbar extends Component {
    render() {
        return (
                <div className={"searchbar-search"}>
                    <input type="text" placeholder={"Find a repository"} className={"rep-name"}/>
                    <input type="submit" value={"Search"} className={"search-input"}/>
                </div>
        );
    }
}