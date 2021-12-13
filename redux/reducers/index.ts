import { combineReducers } from 'redux';
import photos from './photos';
import categories from './categories';

const rootReducer = combineReducers({
  photos,
  categories,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
