import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small fixed-bottom">
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://mff.cuni.cz/">Guatemala beans</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
