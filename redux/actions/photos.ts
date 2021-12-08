import { Dispatch } from 'redux';
import instance from '../../API/api';
import { PhotosActionType, RandomPhotoType } from '../../types/photos';

export enum PhotosActionTypes {
  SET_RANDOM_PHOTO = 'PHOTOS@SET_RANDOM_PHOTO',
}

export const setRandomPhoto = (photo: RandomPhotoType[]): PhotosActionType => ({
  type: PhotosActionTypes.SET_RANDOM_PHOTO,
  payload: photo,
});

export const fetchRandomPhoto = () => async (dispatch: Dispatch<PhotosActionType>) => {
  try {
    const response = await instance.get('/photos/random/?count=1&orientation=landscape');
    dispatch(setRandomPhoto(response.data));
  } catch (error) {
    console.log(error);
  }
};
