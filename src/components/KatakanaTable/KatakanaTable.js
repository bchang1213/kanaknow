import React, { Component } from 'react';
import './KatakanaTable.css';
import Row from "../Row/Row.js";

import {katakanaChart, yoonKatakana, dakuonKatakana} from '../characters.js';

class KatakanaTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gojuon:[],
      dakuon:[],
      yoon:[]
    }
  }
  componentDidMount() {
    //set state for HiraganaChart object
    this.setState({gojuon: katakanaChart});
    this.setState({dakuon: dakuonKatakana});
    this.setState({yoon: yoonKatakana});
  }

  renderGojuon(){
    return this.state.gojuon.map(katakanaRowData =>
      <table>
        <tbody>
          <tr>
            <td className="rowGuide">{katakanaRowData.romaji}-row</td>
            <Row key={katakanaRowData.romaji} reduxProps={this.props.reduxProps} rowData={katakanaRowData} />
          </tr>
        </tbody>
      </table>
    );
  }

  renderDakuon(){
    return this.state.dakuon.map(dakuonRowData =>
      <table>
        <tbody>
          <tr>
            <td className="rowGuide">{dakuonRowData.romaji}-row</td>
            <Row key={dakuonRowData.romaji} reduxProps={this.props.reduxProps} rowData={dakuonRowData} />
          </tr>
        </tbody>
      </table>
    );
  }

  renderYoon(){
    return this.state.yoon.map(yoonRowData =>
      <table>
        <tbody>
          <tr>
            <td className="rowGuide">{yoonRowData.romaji}-row</td>
            <Row key={yoonRowData.romaji} reduxProps={this.props.reduxProps} rowData={yoonRowData} />
          </tr>
        </tbody>
      </table>
    );
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Katakana (カタカナ)</h3>
        <div className="singleSyllables">
          <h5>Gojūon(五十音)</h5>
          {this.renderGojuon()}
          <h5>Dakūon</h5>
          {this.renderDakuon()}
        </div>
        <div className="doubleSyllables">
          <h5>Yōon (拗音)</h5>
          {this.renderYoon()}
        </div>
      </div>
    );
  }
}

export default KatakanaTable;
