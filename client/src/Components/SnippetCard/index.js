import React, { useState } from "react";

import "./style.css";

function SnippetCard({ title, code, tag, img }) {

  return img ? (
    <div>
      <img id="clown" src={img}></img>
    </div>
  ) : (
    <div className="card-wrapper m-3">
      <div className="snippet-title">{title}</div>
      <pre className="code-block">
        <code>{code}</code>
      </pre>
      <div className="bottom-row">
        <div className="snippet-tags">tags: {tag}</div>
        <span onClick={() => {navigator.clipboard.writeText(code)}} role="img" aria-label="clipboard">
          📋
        </span>
      </div>
    </div>
  );
}

export default SnippetCard;


