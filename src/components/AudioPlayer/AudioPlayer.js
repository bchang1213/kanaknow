import React, { Component } from 'react'
import VoicePlayer from './VoicePlayer.js';
var FontAwesome = require('react-fontawesome');

class AudioPlayer extends Component {
//
//   render () {
//     console.log(this.props)
//     return (
//       <div>
//         <button onClick={() => this.props.reduxProps.playAudio()}>{this.props.eachSound}</button>
//
//         {this.props.reduxProps.playStatus && (
//           <VoicePlayer
//             play
//             pause={this.props.reduxProps.playStatus}
//             text='welcome'
//             onEnd={console.log("hit on end")}
//           />
//         )}
//       </div>
//     )
//   }
// }

  state = {
    play: false,
    pause: false,
    text: "thisprops"
  }


  onEnd = () => {
    this.setState({ play: false })
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <button onClick={() => this.setState({ play: true })}><FontAwesome name='headphones' /></button>
        {this.state.play && (
          <VoicePlayer
            play
            pause={this.state.pause}
            text={this.props.eachSound}
            onEnd={this.onEnd}
            lang="ja-JP"
          />
        )}
      </div>
    )
  }
}

export default AudioPlayer
