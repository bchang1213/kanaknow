import {PLAY_AUDIO, PAUSE_AUDIO} from "./actionTypes.js";

export function playAudio(){
  console.log("hit playaudio action");
  return({
    type: PLAY_AUDIO,
    payload: true,
  });
}

export function pauseAudio(){
  console.log("hit pause action");
  return({
    type: PAUSE_AUDIO,
    payload: false,
  });
}
