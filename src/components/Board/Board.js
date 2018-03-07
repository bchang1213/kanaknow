import React, { Component } from 'react';
import './Board.css';
import HiraganaTable from '../HiraganaTable/HiraganaTable.js';
import Katakana from '../Katakana/Katakana.js';

class Board extends Component {

  render() {
    return (
      <div>
        {/* HIRAGANA CHART */}
        <div className="hiraganaChart">
          <HiraganaTable reduxProps={this.props.reduxProps} />
        </div>
        {/* KATAKANA CHART */}
        <div className="katakanaChart">

        </div>
      </div>
    );
  }
}

export default Board;
