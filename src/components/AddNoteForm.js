// src/components/AddNoteForm.js
import React, { useState, useEffect } from 'react';

const AddNoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    setIsSubmitDisabled(!(title.trim() !== '' && body.trim() !== ''));
  }, [title, body]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      createdAt: new Date().toLocaleString(),
      body,
    };
    onAddNote(newNote);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <textarea
          className="form-control"
          id="body"
          rows="3"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary" disabled={isSubmitDisabled}>
        Add Note
      </button>
    </form>
  );
};

export default AddNoteForm;
