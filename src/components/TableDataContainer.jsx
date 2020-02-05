import React, { Component } from "react";
import "../App.css";

class TableDataContainer extends Component {
  state = {
    tableName: this.props.tableName,
    tableAttributes: ["Firstname", "Surname", "Age"],
    data: [
      {
        Firstname: "Daniel",
        Surname: "Smetanka",
        Age: "21"
      },
      {
        Firstname: "Jirka",
        Surname: "Krejci",
        Age: "22"
      },
      {
        Firstname: "Jirka",
        Surname: "Krejci",
        Age: "22"
      },
      {
        Firstname: "Jirka",
        Surname: "Krejci",
        Age: "22"
      },
      {
        Firstname: "Jirka",
        Surname: "Krejci",
        Age: "22"
      }
    ]
    //whole table content for now (later implementation should not load the whole table)
  };

  tableDataURL = "";
  tableAttributesURL = "";

  componentDidMount() {
    this.setState({ tableName: this.props.tableName });
    //fetch data from api
  }

  renderTableDataRow = idx => {
    return this.state.tableAttributes.map(attribute => (
      <td>
        <span className="">{this.state.data[idx][attribute]}</span>
      </td>
    ));
  };

  renderTableData = () => {
    return (
      <tbody>
        {this.state.data.map((item, idx) => (
          <tr id="addr0" key={idx}>
            {this.renderTableDataRow(idx)}
          </tr>
        ))}
      </tbody>
    );
  };

  static getDerivedStateFromProps(props, state) {
    state.tableName = props.tableName;
    //update data!!!
  }

  render() {
    console.log("data table: ", this.state.tableName);
    return (
      <div className="container col-8 float-center mt-4">
        <span className="h3 m-2">{this.props.tableName}</span>
        <div class="table-wrap pr-2 mb-2">
          <table
            className="table table-bordered table-striped table-hover m-2"
            id="tab_logic"
          >
            <thead>
              <tr>
                {this.state.tableAttributes.map(attribute => (
                  <th className="">{attribute}</th>
                ))}
              </tr>
            </thead>
            {this.renderTableData()}
            {/* //rendering table body */}
          </table>
        </div>
        <button
          onClick={() => this.props.parentSetClickedApp("AddDataApp")}
          className="btn btn-outline-success m-2"
        >
          Add Data
        </button>
      </div>
    );
  }
}

export default TableDataContainer;
