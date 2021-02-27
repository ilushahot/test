import React, { Component } from "react";
import "../index.css";

export class Table extends Component {
  render() {
    return <div className={"column"} style={this.props.style} className={this.props.className}>
      {this.props.children}
    </div>;
  }
}
