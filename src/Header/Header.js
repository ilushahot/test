import React, {Component} from "react"
import "./header.scss"

export class Header extends Component {
    render() {
        return (
            <div className={"header-wrapper"}>
                <label className={"header-search"}> Github repositories </label>
            </div>
        );
    }
}