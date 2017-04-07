import "../../assets/stylesheets/Form.scss";
import React from "react";

{/* <Files Form.js>
AuthUserFile /.htpasswd
AuthName "Accès restreint"
AuthType Basic
require valid-user
</Files> */}

const Form = () => (
  <div className="container">
      <form className="addStyle" action="/api" method="post">
        <h2>
          Add Ressources:
        </h2><div>
        <label for="inputauthor">Author</label>
        <input
          name="author"
          type="text"
          id="inputauthor"
          placeholder="author"
          required
        /></div><div>
        <label for="inputdatePub">Date</label>
        <input
          name="datePub"
          type="text"
          id="inputdatePub"
          placeholder="ex: April 2, 2017"
          required
        /></div><div>
        <label for="inputauthor">Categorie</label>
        <input
          name="cat"
          type="text"
          id="inputcat"
          placeholder="Categorie"
          required
        /></div><div>
        <label for="inputarticleTitle">Titre</label>
        <input
          name="articleTitle"
          type="text"
          id="inputarticleTitle"
          placeholder="Titre"
          required
        /></div><div>
        <label for="inputarticleTitle">Description</label>
        <input
          name="desc"
          type="text"
          id="inputdesc"
          placeholder="Description"
          required
        /></div><div>
        <label for="inputarticleTitle">Photos</label>
        <input
          name="img"
          type="text"
          id="inputimg"
          placeholder="Image au format Http://.."
          required
        /></div>
        <button className="formBtn" type="submit">
          Send
        </button>
      </form>
  </div>
);

export default Form;
