import React, { Component } from 'react';
import './HiraRow.css';

import Letter from '../Letter/Letter.js';

class HiraRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      romajiChar:"",
    }
  }
  componentDidMount() {
    console.log("this.props.children: ");
    console.log(this.props.children);
  }


  renderLetter(){
    var eachRow = this.props.hiraganaRowData;
    var rowArray = [];
    var romajiSound = "";
    console.log("Each row: ");
    console.log(eachRow);
    for(let letter in eachRow){
      if(letter != "romaji"){
        romajiSound = letter;
        var eachLetterData =
          <div className="rowGuide">
            <Letter romaji={romajiSound} eachLetter={eachRow[letter]} />
          </div>;
        rowArray.push(eachLetterData);
      }
    }
    return rowArray;
  }

  render() {
    return (
      <div className="rowGuide">
        {this.renderLetter()}
      </div>
    );
  }
}

export default HiraRow;
