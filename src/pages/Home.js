// src/pages/Home.js
import React, { useState } from 'react';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [notes, setNotes] = useState([
    // Data hardcode sebagai contoh
    { title: 'Note 1', createdAt: '2023-01-01 12:00 PM', body: 'This is the body of note 1' },
    { title: 'Note 2', createdAt: '2023-01-02 03:30 PM', body: 'This is the body of note 2' },
    // ...
  ]);

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const handleSearch = (searchTerm) => {
    // Logika pencarian berdasarkan judul
    // ...
  };

  return (
    <div>
      <h1>Notes App</h1>
      <SearchBar onSearch={handleSearch} />
      <NoteList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
};

export default Home;
