import {PLAY_AUDIO, PAUSE_AUDIO} from "../actions/actionTypes.js";


var initialState = {
  playStatus:false,
};

function audioReducer (state=initialState, action){
  switch(action.type){
    case PLAY_AUDIO:
      return action.payload;
    case PAUSE_AUDIO:
      return action.payload;
    default:
    return state.playStatus;
  }
}

export default audioReducer;
