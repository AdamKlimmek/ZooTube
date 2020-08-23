import { combineReducers } from 'redux';

import sessionErrorsReducer from './session/session_errors_reducer';
import videoErrorsReducer from './videos/video_errors_reducer';

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
    videoErrors: videoErrorsReducer,
});

export default errorsReducer;