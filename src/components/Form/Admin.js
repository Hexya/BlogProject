import React, { Component } from 'react';
import '../../assets/stylesheets/Admin.scss';
import { Link } from 'react-router'

export default class Cards extends Component {

  render() {
    return (
      <div className="adminB">
      <div className="adminInt">
        <h2>Admin Section:</h2>
        <Link to="/form"><button className="adminBtn" type="submit">Add</button></Link>
        <Link to="/delete"><button className="adminBtn" type="submit">Delete</button></Link>
        <Link to="/update"><button className="adminBtn" type="submit">Update</button></Link>
      </div>
      </div>
    );
  }
}
