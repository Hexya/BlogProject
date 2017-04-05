import React from 'react';
import axios from 'axios';


class Delete extends React.Component {

  deleteUser() {
  return axios.delete(`/api/${this.props.id}`);
}

  render() {
    const {articleTitle} = this.props;
    return (
        <div className="card">
          <form action="/#/delete" method="delete">
            <h3>{articleTitle}</h3>
            <button onClick={() =>this.deleteUser()} type="submit">Delete</button>
          </form>
        </div>

    );
  }

}

export default Delete;
