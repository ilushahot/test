import React, {Component} from "react";
import "./Row.scss";

export class Row extends Component {
    render() {
        let {event, index} = this.props;
        let {id, date, repo} = event;
        return <div className={this.props.className} style={this.props.style}>
            <div className="column row-list">
                <p>
                    # {index}
                    <br/>
                    id : {id}
                    <br/>
                    date: {date}
                    <br/>
                    repo url: {repo.url}
                </p>
            </div>
        </div>;
    }
}

