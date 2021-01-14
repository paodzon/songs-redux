import React from 'react';
import './App.css';
import SongDetails from './SongDetails';
import SongList from './SongList';
function App() {
    return (
        <div className="app">
            <SongList/>
            <SongDetails/>
        </div>
    )
}

export default App
