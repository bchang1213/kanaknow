import React, {Component} from 'react';
import './Letter.css';
import { hiraganaChart } from '../characters.js';

var FontAwesome = require('react-fontawesome');
var googleTTS = require('google-tts-api');


class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  fetchSounds () {
    googleTTS('Hello World', 'en', 1)   // speed normal = 1 (default), slow = 0.24
    .then(function (url) {
      console.log(url); // https://translate.google.com/translate_tts?...
    })
    .catch(function (err) {
      console.error(err.stack);
    });
  }
  render(){
    return(
      <div className="letterStyle">
        <p>{this.props.eachLetter}</p>
        <div className="buttonArea">
          <button>{this.props.romaji}</button>
          <button><FontAwesome name='headphones' /></button>
        </div>
      </div>
    );
  }
}


export default Letter;
