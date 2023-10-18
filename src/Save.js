import React, { useState } from 'react';

function Save(props) {  // Component Save is defined as a function that returns JSX code (HTML-like code)
    const [text, setText] = useState(''); // The state is initialized with an empty string

    const handleSubmit = (event) => { // This function is called when the form is submitted
        event.preventDefault();
        props.onSave(text); // The onSave function is called with the value of the input field
        setText(''); // The state is updated with an empty string
    };

    const handleChange = (event) => { // This function is called every time the input field changes
        setText(event.target.value); // The state is updated with the value of the input field
    };

    return (
        <form onSubmit={handleSubmit}> {/* The handleSubmit function is called when the form is submitted */}
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Save the word</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter a word"
                    value={text}
                    onChange={handleChange} // The handleChange function is called every time the input field changes
                />
            </div>
            <ul></ul>
            <button type="submit" className="btn btn-primary">
                Save
            </button>
        </form>
    );
}

export default Save;