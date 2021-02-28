import React, {Component} from "react"
import "./header.scss"

export class Header extends Component {
    constructor(props) {
        super(props);
        this.clearRef = React.createRef()
        this.clearOnClick = this.clearOnClick.bind(this)
    }

    render() {
        return (
            <div className={"header-wrapper"}>
                <label className={"header-search"}> Github repositories </label>
                <div className={"searchbar-search"}>
                    <input type="text" placeholder={"Find a repository"} className={"rep-name"}/>
                    <input type="submit" value={"Search"} className={"search-input"}/>
                    <input type="submit" value={"Clear"} className={"clear"} ref={this.clearRef} onClick={this.clearOnClick}/>
                </div>
            </div>
        );
    }
    clearOnClick() {
        if (this.clearRef.current !== "") {
            let clear = this.clearRef
            this.setState({
                clear: ""
            })
        }
        }
}