import React, { Component } from "react";
import AddDataContainer from "./AddDataContainer";

class AddDataApp extends Component {
  state = {
    tableName: this.props.tableName
  };
  render() {
    return (
      <AddDataContainer
        tableName={this.state.tableName}
        parentSetClickedApp={this.props.parentSetClickedApp}
      />
    );
  }
}

export default AddDataApp;
