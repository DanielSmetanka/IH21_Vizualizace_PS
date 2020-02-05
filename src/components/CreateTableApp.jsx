import React, { Component } from "react";
import ColumnContainer from "./ColumnContainer";

class CreateTableApp extends Component {
  state = {};
  render() {
    return (
      <ColumnContainer
        parentSetClickedApp={this.props.parentSetClickedApp}
        parentSetClickedTable={this.props.parentSetClickedTable}
      />
    );
  }
}

export default CreateTableApp;
