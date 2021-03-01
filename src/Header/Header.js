import React, {Component} from "react"
import "./header.scss"

export class Header extends Component {
    constructor(props) {
        super(props);
        this.clearRef = React.createRef()
        this.clearOnClick = this.clearOnClick.bind(this)
        this.search = this.search.bind(this)
    }

    search(e) {
        this.props.search(e.target.value)
    }

    render() {

        return (
            <div className={"header-wrapper"}>
                <label className={"header-search"}> Github repositories </label>
                <div>
                    <input type="text"
                           placeholder={"Find a repository"}
                           className={"rep-name"}
                           ref={this.clearRef}
                           onChange={this.search}
                    />
                    <input type="submit" value={"Search"} className={"search-input"} onClick={this.search}/>
                    <input type="submit" value={"Clear"} className={"clear"} onClick={this.clearOnClick}/>
                </div>
            </div>
        );
    }

    clearOnClick() {
        this.clearRef.current.value = ""
        this.props.search()
    }
}