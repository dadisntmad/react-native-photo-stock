import { PhotosActionType, PhotosState } from '../../types/photos';
import { PhotosActionTypes } from '../actions/photos';

const initialState: PhotosState = {
  randomPhotos: [],
};

const photos = (state = initialState, action: PhotosActionType) => {
  switch (action.type) {
    case PhotosActionTypes.SET_RANDOM_PHOTO:
      return {
        ...state,
        randomPhotos: action.payload,
      };
    default:
      return state;
  }
};

export default photos;
