import React, { useState } from 'react';
import Save from './Save';
import './App.css';

function App() {  // Component App is defined as a function that returns JSX code (HTML-like code)
  const [savedWords, setSavedWords] = useState([]); // The state is initialized with an empty array
  const [verificationText, setVerificationText] = useState(''); // The state is initialized with an empty string
  const [message, setMessage] = useState(''); // The state is initialized with an empty string

  const handleVerificationChange = (event) => { // This function is called every time the input field changes
    setVerificationText(event.target.value); // The state is updated with the value of the input field
  };

  const handleVerificationSubmit = (event) => { // This function is called when the form is submitted
    event.preventDefault(); // The default behavior of the form is prevented
    if (savedWords.includes(verificationText)) { // If the word is in the dictionary
      setMessage('The word is in the dictionary!'); // The message is updated
    } else { // If the word is not in the dictionary
      setMessage('The word is not in the dictionary.'); // The message is updated
    }
  };

  const handleSave = (word) => { // This function is called when the form is submitted
    setSavedWords([...savedWords, word]); // The state is updated with the value of the input field
  };

  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Dictionary Application</h1>
        <p className="lead">
          This project has been built using React and Bootstrap.
        </p>
        <hr className="my-4" />
        <Save onSave={handleSave} /> {/* The Save component is rendered */}
        <hr className="my-4" />
        <form onSubmit={handleVerificationSubmit}> {/* The handleVerificationSubmit function is called when the form is submitted */}
          <div className="form-group">
            <label htmlFor="exampleFormControlInput2"> {/* The label is linked to the input field */}
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
        {message && (
          <div className={`alert ${savedWords.includes(verificationText) ? 'alert-success' : 'alert-danger'} mt-3`} role="alert">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;