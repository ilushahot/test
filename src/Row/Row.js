import React, { Component } from "react";
import "./Row.scss";

export class Row extends Component {
  render() {
    let {event} = this.props;
    let {id, date, repo} = event;
    return <div className={this.props.className} style={this.props.style}>
      <div className="column">
        <p>
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

/*
* todo
*  1. нумерация
*  2. на поиск. кнопку ивент по клику - поиск. ПОиск будет допустим по имени репозитория. Если не сможешь сам то оставь функцию пустышку я покажу
*  3. стили
* */

