import React, { Component } from 'react';
import './HiraganaTable.css';
import Row from "../Row/Row.js";
import Letter from "../Letter/Letter.js";
import {hiraganaChart, yoonHiragana, dakuonHiragana} from '../characters.js';

class HiraganaTable extends Component {
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
    this.setState({gojuon: hiraganaChart});
    this.setState({dakuon: dakuonHiragana});
    this.setState({yoon: yoonHiragana});
  }

  renderGojuon(){
    return this.state.gojuon.map(hiraganaRowData =>
      <table>
        <tbody>
          <tr>
            <td className="rowGuide">{hiraganaRowData.romaji}-row</td>
            <Row key={hiraganaRowData.romaji} reduxProps={this.props.reduxProps} hiraganaRowData={hiraganaRowData} />
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
            <Row key={dakuonRowData.romaji} reduxProps={this.props.reduxProps} hiraganaRowData={dakuonRowData} />
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
            <Row key={yoonRowData.romaji} reduxProps={this.props.reduxProps} hiraganaRowData={yoonRowData} />
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <h3>Hiragana(ひらがな)</h3>
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

export default HiraganaTable;
