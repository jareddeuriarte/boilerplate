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

    let tagsArray = formObject.tags
      .trim()
      .replace(/\s/g, "")
      .toUpperCase()
      .split(",");

    if (formObject.title && formObject.snippet && tagsArray) {
      API.addSnippet({
        title: formObject.title,
        code: formObject.snippet,
        tag: tagsArray,
      })
        .then((res) => {
          console.log("Yay we are here", res);
        })
        .catch((err) => console.log(err));
    }
    const form = document.querySelector("#snippet-form");
    form.reset();
    let title = document.querySelector("#code-title");
    let code = document.querySelector("#snippet");
    let tag = document.querySelector("#tag");
    title.value = "✨YOU ENTERED A BOILERPLATE!✨";
    code.value = "🦑 HOW GREAT!🦑 ";
    tag.value = "🐘HOW WONDERFUL!🐘";

    setTimeout(() => {
      title.value = "";
      code.value = "";
      tag.value = "";
      title.setAttribute("placeholder", "boilerplate title");
      code.setAttribute(
        "placeholder",
        "Copy and paste your boilerplate here 🦆"
      );
      tag.setAttribute(
        "placeholder",
        "tags (comma seperated), e.g. html, react, MySQL"
      );
    }, 2000);
  }
  return (
    <form id="snippet-form" onSubmit={handleFormSubmit}>
      <div className="form-wrapper">
        <form id="snippet-form" action=""></form>
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
