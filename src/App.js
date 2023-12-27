// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Home from './pages/Home';
import AddNote from './pages/AddNote';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <Header>
          <h1 style={{ color: 'white' }}>Notes App</h1>
        </Header>
        <Content className="container mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add" component={AddNote} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
