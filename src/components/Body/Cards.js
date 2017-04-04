import React, { Component } from 'react';
import '../../assets/stylesheets/Cards.scss';

export default class Cards extends Component {

  render() {
    const {author, articleTitle, datePub, cat, img, desc, key, id } = this.props;
    return (
      <div className="containerCards">
        {/* <h5 >{author}</h5>
        <h5>{articleTitle}</h5>
        <h5>{datePub}</h5> */}
        <div className="topBloc"><div className="topBloc1">{cat}</div></div>
        <div className="midBloc"><img src={img} className="midBloc1"></img></div>
        <div className="botBloc"><div className="botBloc1">
          <p>{articleTitle}</p>
          <p>{author} | {datePub}</p>
          <p>{desc}</p>
        </div></div>
      </div>
    );
  }
}
