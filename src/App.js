import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [verificationText, setVerificationText] = useState("");
  const [savedWords, setSavedWords] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSavedWords([...savedWords, text]);
    console.log(text);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleVerificationChange = (event) => {
    setVerificationText(event.target.value);
  };

  const handleVerificationSubmit = (event) => {
    event.preventDefault();
    if (savedWords.includes(verificationText)) {
      setMessage("The word is in the dictionary!");
    } else {
      setMessage("The word is not in the dictionary.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Dictionary Application</h1>
        <p className="lead">
          This project has been built using React and Bootstrap.
        </p>
        <hr className="my-4" />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Save the word</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Type something here"
              value={text}
              onChange={handleChange}
            />
            <ul></ul>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <ul></ul>
          <div className="form-group">
            <label htmlFor="verificationFormControlInput1">
              Verify the word
            </label>
            <input
              type="text"
              className="form-control"
              id="verificationFormControlInput1"
              placeholder="Type the word to verify here"
              value={verificationText}
              onChange={handleVerificationChange}
            />
          </div>
          <ul></ul>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleVerificationSubmit}
          >
            Verify
          </button>
        </form>
        <ul></ul>
        <div
          className={`alert ${
            message
              ? savedWords.includes(verificationText)
                ? "alert-success"
                : "alert-danger"
              : "alert-info"
          }`}
          role="alert"
          id="message"
        >
          {message || "Enter a word to verify."}
        </div>

        <style>
          {`
          body {
            background-color: grey;
          }
        `}
        </style>
      </div>
    </div>
  );
}

export default App;
