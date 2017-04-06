import React from 'react';
import axios from 'axios';


class Delete extends React.Component {

  deleteUser() {
  return axios.delete(`/api/${this.props.id}`);
}

  render() {
    const {author, articleTitle, datePub, cat, img, desc, key, id } = this.props;
    return (
        <div className="card">
          <form className="deleteStyle" action="/#/delete" method="delete">
          <div className="containerCards">
            <div className="topBloc"><div className="topBloc1">{cat}</div></div>
            <div className="midBloc"><img src={img} className="midBloc1"></img></div>
            <div className="botBloc"><div className="botBloc1">
              <p>{articleTitle}</p>
              <p>{author} | {datePub}</p>
              <p>{desc}</p>
            </div></div>
          </div>
            <button className="deleteBtn" onClick={() =>this.deleteUser()} type="submit">Delete</button>
          </form>
          <hr className="deleteHr"></hr>
        </div>

    );
  }

}

export default Delete;
