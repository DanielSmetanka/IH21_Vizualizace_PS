import React, { Component } from "react";

class SqlCommandForm extends Component {
  state = {
    SqlCommand: ""
  };

  handleChangeOnSqlCmd = e => {
    const { value } = e.target;
    this.setState({
      SqlCommand: value
    });
  };

  handleRun = () => {};

  render() {
    return (
      <div className="container mx-auto col-10 m-2">
        <span className="h3 m-2">SQL Direct</span>
        <form>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Type your SQL coede</label>
            <textarea
              id="SqlCommand01"
              type="code"
              name="SqlCommand"
              rows="20"
              value={this.state.SqlCommand}
              onChange={this.handleChangeOnSqlCmd}
              className="form-control"
            ></textarea>
          </div>
        </form>
        <button
          onClick={this.handleCreate}
          className="btn btn-outline-success m-2"
        >
          RUN
        </button>
      </div>
    );
  }
}

export default SqlCommandForm;
