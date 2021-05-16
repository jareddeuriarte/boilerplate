import React, { Component, setState } from "react";
import "./style.css";
import SnippetCard from "../SnippetCard/index";
import API from "../../utils/API";

const codeSeed = [
  {
    title: "javascript for loop",
    code:
      "for (let index = 0; index < array.length; index++){const element = array[index];}",
    tag: ["javascript"],
  },
  {
    title: "html document boilerplate",
    code:
      '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta title="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body> </body> </html>',
    tag: ["html"],
  },
  {
    title: "html document boilerplate",
    code:
      '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta title="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body> </body> </html>',
    tag: ["html"],
  },

  {
    title: "Center element on page (flexbox)",
    code:
      ".parent-container { display: flex; justify-content: center; align-items: center; }",
    tag: ["css"],
  },
  {
    title: "link css to html",
    code: '<link rel="stylesheet" href="path-to-styles.css">',
    tag: ["html"],
  },
];

class MainContainer extends Component {
  state = {
    search: "",
    results: [...codeSeed],
  };

  componentDidMount() {
    API.getSnippets().then((res) => {
      const response = res.data;
      this.setState({ results: response });
    });
  }

  searchSnippets = (e) => {
    this.setState({ search: e.target.value }, () => {
      const regex = RegExp(this.state.search, "gi");
      console.log(this.state.search);
      API.getSnippets().then((res) => {
        this.setState({
          results: res.data.filter((each) => {
            return each.title.match(regex) || each.tag.match(regex);
          }),
        });
      });

      console.log(this.state.results);
    });
  };
  render() {
    return (
      <div>
        <input onChange={this.searchSnippets} type="text" />
        <div id="main-container" className="col-10 m-2">
          {this.state.results.map((snippet) => (
            <SnippetCard
              title={snippet.title}
              code={snippet.code}
              tag={snippet.tag}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MainContainer;
