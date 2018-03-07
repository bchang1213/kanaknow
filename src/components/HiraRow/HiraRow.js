import React, { Component } from 'react';
import './HiraRow.css';

import Letter from '../Letter/Letter.js';

class HiraRow extends Component {

  renderLetter(){
    var eachRow = this.props.hiraganaRowData;
    var rowArray = [];
    var romajiSound = "";
    for(let letter in eachRow){
      if(letter !== "romaji"){
        romajiSound = letter;
        var eachLetterData =
          <div className="rowGuide">
            <Letter reduxProps={this.props.reduxProps} romaji={romajiSound} eachLetter={eachRow[letter]} />
          </div>;
        rowArray.push(eachLetterData);
      }
    }
    return rowArray;
  }

  render() {
    return (
      <td className="rowGuide">
        {this.renderLetter()}
      </td>
    );
  }
}

export default HiraRow;
