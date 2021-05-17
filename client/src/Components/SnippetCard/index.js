import React, { useState, useEffect } from "react";
import "./style.css";

function SnippetCard({ title, code, tag }) {

  return (
    <div className="card-wrapper m-3">
      <div className="snippet-title">{title}</div>


      <pre className="code-block">
        <code id='copy-code'>{code}</code>
      </pre>

      <div className="bottom-row">
        <div className="snippet-tags">tags: {tag}</div>
        <span role='img' aria-label='copy-to-clipboard'>📋</span>
      </div>

    </div>

  );
}

export default SnippetCard;
