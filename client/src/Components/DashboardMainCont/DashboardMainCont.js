import React, { useState } from "react";
import "./style.css";
import SnippetCard from "../SnippetCard/index";

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

function MainContainer() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  function searchSnippets(e) {
    setSearch(e.target.value);
    const regex = RegExp(search, "gi");
    setResults(
      codeSeed.filter((each) => {
        return each.title.match(regex);
      })
    );
    console.log(results);
  }
  return (
    <div>
      <input onChange={searchSnippets} type="text" />
      <div id="main-container" className="col-10 m-2">
        {results.map((snippet) => (
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

export default MainContainer;
