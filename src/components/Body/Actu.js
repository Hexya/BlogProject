import '../../assets/stylesheets/Actu.scss';
import React, { Component } from 'react';

class Actu extends Component {
  render() {
    return(
      <div className="rightBloc">

        <div className="searchBloc">
          <div className="searchTitle">RECHERCHER</div>
          <input className="searchBar" type="text" placeholder="Rechercher..."></input>
        </div>

        <div className="aboBloc">
          <div className="aboTitle">NOS PARTENAIRES</div>
          <div className="aboImgCont">
            <div className="aboImg"></div>
          </div>

          <div className="socBloc">
            <div className="socTitle">NOUS SUIVRE</div>
            <div className="socLog">
              <div className="log"><i className="fa fa-facebook-square" aria-hidden="true"></i><p>Facebook</p></div>
              <div className="log"><i className="fa fa-instagram" aria-hidden="true"></i><p>Instagram</p></div>
              <div className="log"><i className="fa fa-twitter-square" aria-hidden="true"></i><p>Twitter</p></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Actu;
