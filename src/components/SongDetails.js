import React from 'react';
import {connect} from 'react-redux';
import './SongDetails.css';

function SongDetails({selectedSong}) {

    console.log(selectedSong)
    return (
        <div>
            <h1>Details for:</h1><br/>
            <h3>Title: {selectedSong.title}</h3>
            <h3>Duration: {selectedSong.duration}</h3>
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    console.log(state)
    return {selectedSong:state.selectedSong}
}

export default connect(mapStateToProps)(SongDetails);
