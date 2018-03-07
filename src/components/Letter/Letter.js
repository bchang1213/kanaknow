import React, {Component} from 'react';
import './Letter.css';
import AudioPlayer from "../AudioPlayer/AudioPlayer.js";
import Modal from 'react-modal';
import DrawCanvas from '../DrawCanvas/DrawCanvas.js';


class Letter extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  renderModal(){
    return(
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        className="modal"
        contentLabel="Write it out"
      >
        <div class="modal-content">
          <div class="modal-header">
            <span class="close" onClick={this.closeModal} >&times;</span>
            <h1>{this.props.eachLetter} - "{this.props.romaji}"</h1>
          </div>
          <div class="modal-body">
            <DrawCanvas />
          </div>
          <div class="modal-footer">
            <h3>{this.props.eachLetter}</h3>
          </div>
        </div>
      </Modal>
    );
  }

  render(){
    return(
      <div className="letterStyle">
        <button onClick={this.openModal} >
          <p className="letter">{this.props.eachLetter}</p>
        </button>
        <div>
          <p className="buttonArea">{this.props.romaji}</p>
          <AudioPlayer reduxProps={this.props.reduxProps} eachSound={this.props.eachLetter} />
        </div>
        {this.renderModal()}
      </div>
    );
  }
}


export default Letter;
