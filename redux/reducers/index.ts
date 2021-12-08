import { combineReducers } from 'redux';
import photos from './photos';

const rootReducer = combineReducers({
  photos,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
