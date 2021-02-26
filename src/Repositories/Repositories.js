import React, {Component} from "react"
import "./repositories.scss"

export class Repositories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount() {
        fetch("https://api.github.com/events")
            .then(res => res.json())
            .then (
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.repo
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <p>Error {error.massage}</p>
        }
        else if (!isLoaded) {
            return <p>Loading...</p>
        }
        else {
            return (
                <ul>
                    {items.map(item =>(
                        <li key={item.name}>
                            {item.url}
                        </li>
                    ))}
                </ul>
            )
        }
    }
}