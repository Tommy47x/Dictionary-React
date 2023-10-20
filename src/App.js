import React, { useState } from 'react';
import './App.css';

function Save(props) {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSave(text);
    setText('');
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Save the word</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter a word"
          value={text}
          onChange={handleChange}
        />
      </div>
      <ul></ul>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

function Verify(props) {
  const [verificationText, setVerificationText] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleVerificationChange = (event) => {
    setVerificationText(event.target.value);
    setShowMessage(false);
  };

  const handleVerificationSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true);
    if (props.savedWords.includes(verificationText)) {
      setMessage('The word is in the dictionary!');
    } else {
      setMessage('The word is not in the dictionary.');
    }
  };

  return (
    <div>
      <form onSubmit={handleVerificationSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput2">
            Verify if the word is in the dictionary
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Enter a word"
            value={verificationText}
            onChange={handleVerificationChange}
          />
        </div>
        <ul></ul>
        <button type="submit" className="btn btn-primary">
          Verify
        </button>
      </form>
      {showMessage && (
        <div
          className={`alert ${props.savedWords.includes(verificationText)
            ? 'alert-success'
            : 'alert-danger'
            } mt-3`}
          role="alert"
        >
          {message}
        </div>
      )}
    </div>
  );
}

function App() {
  const [savedWords, setSavedWords] = useState([]);

  const handleSave = (word) => {
    setSavedWords([...savedWords, word]);
  };

  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Dictionary Application</h1>
        <p className="lead">
          This project has been built using React and Bootstrap.
        </p>
        <hr className="my-4" />
        <Save onSave={handleSave} />
        <hr className="my-4" />
        <Verify savedWords={savedWords} />
      </div>
    </div>
  );
}

export default App;