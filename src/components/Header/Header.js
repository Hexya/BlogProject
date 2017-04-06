import '../../assets/stylesheets/Header.scss';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div className="headCont">
        <div className="headMenu">
          <ul className="listMenu">
            <li><img src="http://img4.hostingpics.net/pics/384642inkedLogo.png"></img></li>
            <li>HOME</li>
            <li>MODELS</li>
            <li>SHOPS</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="headMenuBack"></div>
        <div className="headBan"></div>
      </div>
    )
  }
};

export default Header;
