import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter Text here");
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("Tried to enter text");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          Number of Words: {text.split(" ").length} and Number of Characters:{" "}
          {text.length}
        </p>
        <p>
          Average time taken to read this would be{" "}
          {0.008 * text.split(" ").length} minutes
        </p>
        <h2 className="my-2">Preview</h2>
        <p className="my-2">{text}</p>
      </div>
    </>
  );
}
