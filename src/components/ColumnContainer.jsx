import React, { Component } from "react";
import "../App.css";

class ColumnContainer extends Component {
  state = {
    tableName: "",
    attributes: [
      {
        name: "",
        type: "",
        maxSize: ""
      }
    ]
  };
  URL = "/api/table";

  resetState = () => {
    this.setState({
      tableName: "",
      attributes: [
        {
          name: "",
          type: "",
          maxSize: ""
        }
      ]
    });
  };

  handleCreate = () => {
    const data = this.state;
    this.resetState();
    this.postData("http://localhost:5000/api/table", data).then(data => {
      console.log(data);
      //TODO: Let user know that the table was created and reset the table
    });
  };

  async postData(url, data) {
    const options = {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    console.log(options);

    const response = await fetch(url, options);
    return await response;
  }

  handleChange = idx => e => {
    const { name, value } = e.target;
    const attributes = [...this.state.attributes];
    attributes[idx][name] = value;
    this.setState({
      attributes
    });
  };

  handleChangeOnTableName = e => {
    const { value } = e.target;
    this.setState({
      tableName: value
    });
  };

  handleAddRow = () => {
    const item = {
      name: "",
      type: "",
      maxSize: ""
    };
    this.setState({
      attributes: [...this.state.attributes, item]
    });
  };

  handleRemoveRow = () => {
    this.setState({
      attributes: this.state.attributes.slice(0, -1)
    });
  };
  handleRemoveSpecificRow = idx => () => {
    const attributes = [...this.state.attributes];
    attributes.splice(idx, 1);
    this.setState({ attributes });
  };

  render() {
    return (
      <div className="container col-8 float-center mt-4">
        <div className="form-group row m-2">
          <span className="h3">Table name:</span>

          <div className="col-sm-3">
            <input
              id="tableName01"
              type="text"
              name="tableName"
              value={this.state.tableName}
              onChange={this.handleChangeOnTableName}
              className="form-control"
            />
          </div>
        </div>
        <div class="table-wrap pr-2 mb-2">
          <table
            className="table table-bordered table-striped table-hover m-2"
            id="tab_logic"
          >
            <thead>
              <tr>
                <th className="text-center"> # </th>
                <th className="text-center"> Name </th>
                <th className="text-center"> Type </th>
                <th className="text-center"> Max Size</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.attributes.map((item, idx) => (
                <tr id="addr0" key={idx}>
                  <td>{idx}</td>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={this.state.attributes[idx].name}
                      onChange={this.handleChange(idx)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="type"
                      value={this.state.attributes[idx].type}
                      onChange={this.handleChange(idx)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="maxSize"
                      value={this.state.attributes[idx].maxSize}
                      onChange={this.handleChange(idx)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={this.handleRemoveSpecificRow(idx)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="float-left">
          <button
            onClick={this.handleAddRow}
            className="btn btn-outline-primary m-2"
          >
            Add
          </button>
          <button
            onClick={this.handleRemoveRow}
            className="btn btn-outline-danger m-2"
          >
            Delete
          </button>
        </div>
        <button
          onClick={this.handleCreate}
          className="btn btn-outline-success m-2 float-right"
        >
          Create Table
        </button>
      </div>
    );
  }
}

export default ColumnContainer;
