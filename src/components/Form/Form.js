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
        <label for="inputarticleTitle">Titre</label>
        <input
          name="articleTitle"
          type="text"
          id="inputarticleTitle"
          placeholder="Titre"
          required
        />
        <label for="inputdatePub">Date</label>
        <input
          name="datePub"
          type="text"
          id="inputdatePub"
          placeholder="datePub"
          required
        />
        <button type="submit">
          Send
        </button>
      </form>
  </div>
);

export default Form;
