import { PhotosActionTypes } from '../redux/actions/photos';

export type PhotosState = {
  randomPhotos: RandomPhotoType[];
};

export type RandomPhotoType = {
  id: string;
  user: UserType;
};

export type UserType = {
  name: string;
};

type setRandomPhoto = {
  type: PhotosActionTypes.SET_RANDOM_PHOTO;
  payload: RandomPhotoType[];
};

export type PhotosActionType = setRandomPhoto;
