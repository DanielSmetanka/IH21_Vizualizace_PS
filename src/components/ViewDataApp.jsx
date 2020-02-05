import React, { Component } from "react";
import TableDataContainer from "./TableDataContainer";

class ViewDataApp extends Component {
  state = {
    currentTableName: this.props.tableName
  };

  static getDerivedStateFromProps(props, state) {
    state.currentTableName = props.tableName;
  }

  renderTableDataContainer = () => {
    if (this.state.currentTableName) {
      console.log("render: ", this.state.currentTableName);
      return (
        <TableDataContainer
          tableName={this.state.currentTableName}
          parentSetClickedApp={this.props.parentSetClickedApp}
        />
      );
    }
    return <span>No table selected...</span>;
  };

  render() {
    console.log("app: ", this.state.currentTableName);
    return <React.Fragment>{this.renderTableDataContainer()}</React.Fragment>;
  }
}

export default ViewDataApp;
