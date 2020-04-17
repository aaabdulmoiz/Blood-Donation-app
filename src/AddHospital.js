import React, { Component } from "react";
import "./Apps.css";
import ReactTable from "react-table";
import "react-table/react-table.css";

class AddHospital extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hospitals: [],
    };
  }
}
