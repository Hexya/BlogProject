import React, { Component } from 'react';
import '../../assets/stylesheets/Cards.scss';

export default class Cards extends Component {

  render() {
    const {author, articleTitle, datePub, key, id } = this.props;
    return (
      <div className='containCards'>
      <div className="containerCards">
        <h5 >{author}</h5>
        <h5>{articleTitle}</h5>
        <h5>{datePub}</h5>
      </div>
      </div>
    );
  }
}
