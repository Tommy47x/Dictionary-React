import React, { useState } from 'react';
import Save from './Save';
import './App.css';

function App() {
  const [savedWords, setSavedWords] = useState([]);
  const [verificationText, setVerificationText] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false); // Add a new state variable to track whether to show the message

  const handleVerificationChange = (event) => {
    setVerificationText(event.target.value);
    setShowMessage(false); // Reset the showMessage state variable when the input field changes
  };

  const handleVerificationSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true); // Set the showMessage state variable to true when the Verify button is pressed
    if (savedWords.includes(verificationText)) {
      setMessage('The word is in the dictionary!');
    } else {
      setMessage('The word is not in the dictionary.');
    }
  };

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
        <Save onSave={handleSave} savedWords={savedWords} />
        <hr className="my-4" />
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
          <button type="submit" className="btn btn-primary">
            Verify
          </button>
        </form>
        {showMessage && ( // Only render the message if showMessage is true
          <div className={`alert ${savedWords.includes(verificationText) ? 'alert-success' : 'alert-danger'} mt-3`} role="alert">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;


