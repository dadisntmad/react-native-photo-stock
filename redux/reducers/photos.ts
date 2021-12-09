import { PhotosActionType, PhotosState } from '../../types/photos';
import { PhotosActionTypes } from '../actions/photos';

const initialState: PhotosState = {
  randomPhotos: [],
  photos: [],
  page: 1,
};

const photos = (state = initialState, action: PhotosActionType) => {
  switch (action.type) {
    case PhotosActionTypes.SET_RANDOM_PHOTO:
      return {
        ...state,
        loading: false,
        randomPhotos: action.payload,
      };
    case PhotosActionTypes.SET_PHOTOS:
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
      };
    case PhotosActionTypes.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};

export default photos;
