import React, {Component} from "react"
import './App.css';
import {Header} from "./Header/Header";
import {Searchbar} from "./Searchbar/Searchbar";
import {Repositories} from "./Repositories/Repositories";

export class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <Searchbar />
                </div>
                <div>
                    <Repositories />
                </div>
            </div>
        );
    }
}



// export class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             items: []
//         }
//     }
//     componentDidMount() {
//         fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
//             .then(res => res.json())
//             .then (
//                 (result) => {
//                     this.setState({
//                         isLoaded: true,
//                         items: result.drinks
//                     });
//                 },
//                 (error) => {
//                     this.setState({
//                         isLoaded: true,
//                         error
//                     })
//                 }
//             )
//     }
//
//     render() {
//        const {error, isLoaded, items} = this.state;
//        if (error) {
//            return <p>Error {error.massage}</p>
//        }
//        else if (!isLoaded) {
//            return <p>Loading...</p>
//        }
//        else {
//            return (
//                <ul>
//                    {items.map(item =>(
//                        <li key={item.name}>
//                            {item.strDrink}
//                        </li>
//                    ))}
//                </ul>
//            )
//        }
//     }
// }
