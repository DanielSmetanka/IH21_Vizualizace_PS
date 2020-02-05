import React, { Component } from "react";
import "../App.css";

class AddDataContainer extends Component {
  state = {
    tableName: this.props.tableName,
    //readonly
    attributes: ["Firstname", "Surname", "Age"],
    //readonly
    data: []
  };

  addDataURL = "api/add-data";
  getAttributesURL = "";
  loading = true;

  resetState = () => {
    this.setState({
      data: []
    });
  };

  handleSubmit = () => {
    const data = {};
    data["tableName"] = this.state.tableName;
    data["data"] = this.state.data;
    this.resetState();
    this.postData(this.addDataURL, data).then(receivedData => {
      console.log(receivedData);
      this.props.parentSetClickedApp("ViewDataApp");
    });
  };

  getTableColumns = tableName => {
    const response = this.postData(URL, tableName);
    const attributes = response.json();
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
    const data = [...this.state.data];
    data[idx][name] = value;
    this.setState({
      data
    });
  };

  handleChangeOnTableName = e => {
    const { value } = e.target;
    this.setState({
      tableName: value
    });
  };

  handleAddRow = () => {
    const item = {};
    for (let index = 0; index < this.state.attributes.length; index++) {
      item[this.state.attributes[index]] = "";
    }
    this.setState({
      data: [...this.state.data, item]
    });
  };

  handleRemoveRow = () => {
    this.setState({
      data: this.state.data.slice(0, -1)
    });
  };

  handleRemoveSpecificRow = idx => () => {
    const data = [...this.state.data];
    data.splice(idx, 1);
    this.setState({ data });
  };

  //called when component initialized/mounted to DOM tree
  componentDidMount() {
    console.log("component mounted");
    //fetch table attributes from api
    //add empty row based on attributes
    this.handleAddRow();
  }

  renderInputRow = idx => {
    return this.state.attributes.map(attribute => (
      <td>
        <input
          type="text"
          name={attribute}
          value={this.state.data[idx][attribute]}
          onChange={this.handleChange(idx)}
          className="form-control"
        />
      </td>
    ));
  };

  renderInputRows = () => {
    return (
      <tbody>
        {this.state.data.map((item, idx) => (
          <tr id="addr0" key={idx}>
            <td>{idx}</td>
            {this.renderInputRow(idx)}
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
    );
  };

  render() {
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
                <th className="text-center"> # </th>
                {this.state.attributes.map(attribute => (
                  <th className="text-center">{attribute}</th>
                ))}
                <th />
              </tr>
            </thead>
            {this.renderInputRows()}
            {/* //rendering table body */}
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
          onClick={this.handleSubmit}
          className="btn btn-outline-success m-2 float-right"
        >
          Save
        </button>
      </div>
    );
  }
}

export default AddDataContainer;
