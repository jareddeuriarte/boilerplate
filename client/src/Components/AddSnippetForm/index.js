import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";

function AddSnippetForm() {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    // const { password, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
    console.log(formObject);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject);
    if (formObject.title && formObject.snippet && formObject.tags) {
      API.addSnippet({
        title: formObject.title,
        code: formObject.snippet,
        tag: formObject.tags,
      })
        .then((res) => {
          console.log("Yay we are here", res);
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-wrapper">
        <form action=""></form>
        <input
          name="title"
          onChange={handleInputChange}
          className="form-control input"
          id="code-title"
          aria-describedby="emailHelp"
          placeholder="boilerplate title"
        ></input>

        <textarea
          onChange={handleInputChange}
          name="snippet"
          id="snippet"
          name="snippet"
          rows="10"
          cols="50"
          placeholder="Copy and paste your boilerplate here 🦆"
        ></textarea>

        <input
          onChange={handleInputChange}
          name="tags"
          className="form-control input"
          id="tag"
          aria-describedby="tag"
          placeholder="tags (comma seperated), e.g. html, react, MySQL,"
        ></input>

        <button type="submit" id="button" class="btn btn-primary">
          ➕
        </button>
      </div>
    </form>
  );
}

export default AddSnippetForm;
