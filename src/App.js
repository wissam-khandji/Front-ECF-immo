import React, {Component} from "react";
import Site from "./Containers/Site/Site";
import {BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getAllAnnonce} from "./Actions/getAllAnnonce";

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.getAllAnnonce();
  }
  
  render () {
    return(
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  )
  };
}

const mapStateToProps = ({ data = {} }) => ({
  data
});

export default connect(
  mapStateToProps,
  {
    getAllAnnonce
  }
)(App)