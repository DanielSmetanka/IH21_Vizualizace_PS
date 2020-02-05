import React, { Component } from "react";

class TableNameContainer extends Component {
  state = {
    tableNames: ["Employees", "Companies", "Goods", "Contracts", "Invoices"], //hardcoded
    activeTableName: ""
  };

  componentDidMount() {
    //fetch names of all tables from API
  }

  renderTableContent = () => {
    return this.state.tableNames.map(table => (
      <tr className="clickable-row">
        <td className="text-center">
          <button
            className="button btn-block btn-outline-secondary btn-lg m-1"
            onClick={() => {
              this.setState({ activeTableName: table });
              this.props.parentSetClickedApp("ViewDataApp");
              this.props.parentGetClickedTable(table);
            }}
          >
            {table}
          </button>
        </td>
      </tr>
    ));
  };

  render() {
    console.log("name container: ", this.state.activeTableName);
    return (
      <div className="container col-2 float-left ml-2">
        <table className="">
          <thead>
            {/* <tr>
              <td className="text-center">
                <h3>Tables</h3>
              </td>
            </tr> */}
          </thead>
          <tbody>
            {this.renderTableContent()}
            <tr>
              <td>
                <button
                  className="button btn-block btn-outline-success btn-lg m-1"
                  onClick={() =>
                    this.props.parentSetClickedApp("CreateTableApp")
                  }
                >
                  Add Table
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableNameContainer;
