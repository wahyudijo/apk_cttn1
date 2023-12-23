import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Buat file ini untuk menyesuaikan tata letak

const Note = ({ title, createdAt, body }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">Created At: {createdAt}</h6>
      <p className="card-text">{body}</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="container mt-5">
      <h1>Notes App</h1>
      <div className="row">
        <div className="col-md-6">
          <Note title="Meeting Notes" createdAt="2023-09-04T12:00:00" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </div>
        <div className="col-md-6">
          {/* Add more notes as needed */}
        </div>
      </div>
    </div>
  );
}

export default App;