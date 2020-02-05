import React, { Component } from "react";

import CreateTableApp from "./components/CreateTableApp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ViewDataApp from "./components/ViewDataApp";
import AddDataApp from "./components/AddDataApp";
import TableNameContainer from "./components/TableNameContainer";
import "./App.css";

class App extends Component {
  state = {
    currentTableName: undefined,
    currentApp: "ViewDataApp"
  };

  parentSetClickedTable = tableName => {
    this.setState({ currentTableName: tableName });
  };

  parentSetClickedApp = clickedApp => {
    this.setState({ currentApp: clickedApp });
  };

  renderApp = () => {
    const currentApp = this.state.currentApp;
    const currentTable = this.state.currentTableName;
    if (currentApp == "AddDataApp" && currentTable != undefined) {
      return (
        <AddDataApp
          tableName={this.state.currentTableName}
          d
          parentSetClickedApp={this.parentSetClickedApp}
        />
      );
    }
    if (currentApp == "ViewDataApp" && currentTable != undefined) {
      return (
        <ViewDataApp
          tableName={this.state.currentTableName}
          parentSetClickedApp={this.parentSetClickedApp}
        />
      );
    }
    if (currentApp == "CreateTableApp") {
      return (
        <CreateTableApp
          parentSetClickedApp={this.parentSetClickedApp}
          parentSetClickedTable={this.parentSetClickedTable}
        />
      );
    }

    console.log("Unknown App or Undefined: ", this.state.currentApp);
    return <span>Unknown page</span>;
  };

  render() {
    return (
      <div>
        <Header />
        <TableNameContainer
          parentGetClickedTable={this.parentSetClickedTable}
          parentSetClickedApp={this.parentSetClickedApp}
        />
        {this.renderApp()}
        <Footer />
      </div>
    );
  }
}

export default App;
