// src/components/NoteList.js
import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="row">
      {notes.map((note, index) => (
        <div key={index} className="col-md-6">
          <Note {...note} onDelete={() => onDelete(index)} />
        </div>
      ))}
    </div>
  );
};

export default NoteList;
