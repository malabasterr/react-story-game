import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Street from './components/Street';
import Building1 from './components/Building1';
import Building2 from './components/Building2';
import Building3 from './components/Building3';
import Building3b from './components/Building3b';
import Error from './components/Error';

function App() {
  return (
    <main>
      <Routes >
        <Route path="/" element={<Street />} />
        <Route path="/Building1" element={<Building1 />} />
        <Route path="/Building2" element={<Building2 />} />
        <Route path="/Building3" element={<Building3 />} />
        <Route path="/Building3b" element={<Building3b />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <div className="App"></div>
    </main>
  );
};

export default App;
