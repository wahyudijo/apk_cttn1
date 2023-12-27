// src/components/Note.js
import React from 'react';

const Note = ({ title, createdAt, body, onDelete }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <p className="card-text">
          <small className="text-muted">Created at: {createdAt}</small>
        </p>
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
