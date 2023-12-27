// src/pages/AddNote.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AddNoteForm from '../components/AddNoteForm';

const AddNote = ({ onAddNote }) => {
  const history = useHistory();

  const handleAddNote = (newNote) => {
    // Lakukan sesuatu dengan data catatan baru, misalnya simpan ke array state di halaman Home
    onAddNote(newNote);
    history.push('/');
  };

  return (
    <div>
      <h1>Add Note</h1>
      <AddNoteForm onAddNote={handleAddNote} />
    </div>
  );
};

export default AddNote;
