import React, {Component} from "react"
import {Header} from "./Header/Header";
import {Table} from "./Table/Table";
import {Row} from "./Row/Row";
import Pagination from "react-js-pagination";
import {v4 as uuid} from "uuid";
import './App.css';
import "./index.css"

export class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            totalEvents: [],
            displayedEvents: [],
            activePage: 1,
            itemsCountPerPage: 5,
            setValue: "",
            filter: []
        }
        this.paginationRef = React.createRef(uuid())
        this.search = this.search.bind(this)
    }

    componentDidMount() {
        fetch("https://api.github.com/events")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        totalEvents: result,
                        displayedEvents: result.slice(0, this.state.itemsCountPerPage)
                    });
                }
            )
    }

    handlePageChange(pageNumber) {
        const filtered = this.state.totalEvents.slice(pageNumber, pageNumber + this.state.itemsCountPerPage)

        this.setState({
            activePage: pageNumber,
            displayedEvents: filtered
        });
    }

    search(value) {
        if (value === undefined) {
            value = ""
        }
        value = value.trim().toLowerCase()
        if (value === "") {
            // поиск пуст, отображаем все репозитории
            this.setState({
                displayedEvents:this.state.totalEvents
            })
            this.paginationRef.current.style.display = "flex"
        }
        else {
            // фильтруем по поиску
            this.paginationRef.current.style.display = "none"
            let result = [] // результат который будет отображен
            this.state.totalEvents.map(event=>{
                let repo_name  = event.repo.name;
                if (repo_name.includes(value)) {
                    result.push(event)
                }
            })
            this.setState({
                displayedEvents:result
            })
        }
    }

    render() {
        const setValue = this.state.setValue;
        if (!this.state.isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <div>
                    <Table className={"column"}>
                        <Header search={this.search}/>
                        <div className={"pagination"} ref={this.paginationRef}>
                            <Pagination
                                itemClass={"li"}
                                linkClass={"a"}
                                activePage={this.state.activePage}
                                itemsCountPerPage={this.state.itemsCountPerPage}
                                totalItemsCount={this.state.totalEvents.length}
                                pageRangeDisplayed={5}
                                onChange={this.handlePageChange.bind(this)}
                            />
                        </div>
                        <div>
                            {
                                this.state.displayedEvents.map((event, index) => {
                                    return (<div key={uuid()}>
                                        <Row index={this.state.activePage + index} event={event}/>
                                    </div>)
                                })
                            }
                        </div>
                    </Table>
                </div>
            );
        }
    }
}
