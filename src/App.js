import React, {Component} from "react"
import {Header} from "./Header/Header";
import {Table} from "./Table/Table";
import {Row} from "./Row/Row";
import {v4 as uuid} from "uuid";
import './App.css';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            events: []
        }
    }
    componentDidMount(index) {
        fetch("https://api.github.com/events")
        .then(res => res.json())
        .then (
            (result) => {
                console.log(result)
                this.setState({
                    isLoaded: true,
                    events: result
                });
            }
        )
    }
    render() {
        if (!this.state.isLoaded) {
            return <p>Loading...</p>
        }
        else {
            return (
                <Table className={"column"}>
                    <Header/>
                    {
                        this.state.events.map(event=>{
                            return (<div key={uuid()}>
                                <Row event={event} />
                            </div>)
                        })
                    }
                </Table>
            );
        }
    }
}
