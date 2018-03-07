import React, {Component} from 'react';
import './Letter.css';
import { hiraganaChart } from '../characters.js';
import AudioPlayer from "../AudioPlayer/AudioPlayer.js";

class Letter extends Component {

  render(){
    return(
      <div className="letterStyle">
        <p>{this.props.eachLetter}</p>
        <div className="buttonArea">
          <button>{this.props.romaji}</button>
          <AudioPlayer reduxProps={this.props.reduxProps} eachSound={this.props.eachLetter} />
        </div>
      </div>
    );
  }
}


export default Letter;
