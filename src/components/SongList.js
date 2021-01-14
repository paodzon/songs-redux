import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import {selectSong} from '../actions';
import "./SongList.css";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="songlist-render">
          <div className="songlist-title">
            <h4>{song.title}</h4>
          </div>
          <div className="songlist-btn">
            <Button onClick={() => this.props.selectSong(song)} color="primary" variant="contained">Select</Button>
          </div>
        </div>
      );
    });
  }

  render() {
    
    return <div className="songlist">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps,{
  selectSong: selectSong
})(SongList);
