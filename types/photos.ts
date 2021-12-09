import { PhotosActionTypes } from '../redux/actions/photos';

export type PhotosState = {
  randomPhotos: RandomPhotoType[];
  photos: PhotosType[];
  page: number;
};

export type RandomPhotoType = {
  id: string;
  user: UserType;
};

export type PhotosType = {
  id: string;
  urls: UrlsType;
  user: UserType;
};

export type UrlsType = {
  regular?: string;
};

export type UserType = {
  name?: string;
};

type setRandomPhoto = {
  type: PhotosActionTypes.SET_RANDOM_PHOTO;
  payload: RandomPhotoType[];
};

type setPhotos = {
  type: PhotosActionTypes.SET_PHOTOS;
  payload: PhotosType[];
};

type setPage = {
  type: PhotosActionTypes.SET_PAGE;
  payload: number;
};

export type PhotosActionType = setRandomPhoto | setPhotos | setPage;
