import React from "react";

{/* <Files Form.js>
AuthUserFile /.htpasswd
AuthName "Accès restreint"
AuthType Basic
require valid-user
</Files> */}

const Form = () => (
  <div className="container">
      <form action="/api" method="post">
        <h2>
          Add Ressources
        </h2>
        <label for="inputauthor">Author</label>
        <input
          name="author"
          type="text"
          id="inputauthor"
          placeholder="author"
          required
        />
        <label for="inputdatePub">Date</label>
        <input
          name="datePub"
          type="text"
          id="inputdatePub"
          placeholder="ex: April 2, 2017"
          required
        />
        <label for="inputauthor">Categorie</label>
        <input
          name="cat"
          type="text"
          id="inputcat"
          placeholder="Categorie"
          required
        />
        <label for="inputarticleTitle">Titre</label>
        <input
          name="articleTitle"
          type="text"
          id="inputarticleTitle"
          placeholder="Titre"
          required
        />
        <label for="inputarticleTitle">Description</label>
        <input
          name="desc"
          type="text"
          id="inputdesc"
          placeholder="Description"
          required
        />
        <label for="inputarticleTitle">Photos</label>
        <input
          name="img"
          type="text"
          id="inputimg"
          placeholder="Image au format Http://.."
          required
        />
        <button type="submit">
          Send
        </button>
      </form>
  </div>
);

export default Form;
