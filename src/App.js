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
            totalEvents: [], // все репозитории
            displayedEvents:[], // отображаемые
            activePage:1,
            itemsCountPerPage: 3
        }
    }
    componentDidMount() {
        fetch("https://api.github.com/events")
        .then(res => res.json())
        .then (
            (result) => {
                console.log(result)
                this.setState({
                    isLoaded: true,
                    totalEvents: result,
                    displayedEvents: result.slice(0, this.state.itemsCountPerPage)
                });
            }
        )
    }
    handlePageChange(pageNumber){
        console.log(`active page is ${pageNumber}`);

        const filtered = this.state.totalEvents.slice(pageNumber, pageNumber+this.state.itemsCountPerPage)

        this.setState({
            activePage: pageNumber,
            displayedEvents:filtered
        });
    }
    render() {
        if (!this.state.isLoaded) {
            return <p>Loading...</p>
        }
        else {
            return (
                <div>
                    <Table className={"column"}>
                        <Header/>
                        <div className={"pagination"}>
                            <Pagination
                                // firstPageText={"К началу"}
                                // lastPageText={"В конец"}
                                // nextPageText={"Следующая"}
                                // prevPageText={"Предыдущая"}

                                itemClass={"li"}
                                linkClass={"a"}

                                activePage={this.state.activePage}
                                itemsCountPerPage={this.state.itemsCountPerPage}
                                totalItemsCount={this.state.totalEvents.length}
                                pageRangeDisplayed={5}
                                onChange={this.handlePageChange.bind(this)}
                            />
                        </div>
                        {/*https://www.npmjs.com/package/react-js-pagination*/}
                       <div>
                           {
                               this.state.displayedEvents.map((event, index)=>{
                                   return (<div key={uuid()}>
                                       <Row index={this.state.activePage+index} event={event}/>
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
