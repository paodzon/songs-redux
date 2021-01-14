import {combineReducers} from 'redux';

const songsReducer = () =>{
    return [
      { title: "Lemonade", duration: "3:15" },
      { title: "Holy", duration: "3:32" },
      { title: "Praise The Lord", duration: "3:25" },
      { title: "Spicy", duration: "2:23" },
    ];
}

const selectedSongReducer = (selectedSong=null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});