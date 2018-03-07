import React, { Component } from 'react';
import './Board.css';
import HiraganaTable from '../HiraganaTable/HiraganaTable.js';
import KatakanaTable from '../KatakanaTable/KatakanaTable.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Board extends Component {

  render() {
    return (
      <div>
        <h1>KnowKana</h1>
        <h5>The place to "benkyou" your kana!</h5>
        <p>(Try clicking on the characters.)</p>
        <Tabs>
          <TabList>
            <Tab>Hiragana (ひらがな)</Tab>
            <Tab>Katakana (カタカナ)</Tab>
          </TabList>

          <TabPanel>
            {/* HIRAGANA CHART */}
            <div className="hiraganaChart">
              <HiraganaTable reduxProps={this.props.reduxProps} />
            </div>
          </TabPanel>
          <TabPanel>
            {/* KATAKANA CHART */}
            <div className="katakanaChart">
              <KatakanaTable reduxProps={this.props.reduxProps} />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Board;
