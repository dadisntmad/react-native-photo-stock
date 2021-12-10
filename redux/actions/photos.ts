import { Dispatch } from 'redux';
import instance from '../../API/api';
import {
  PhotosActionType,
  PhotosType,
  RandomPhotoType,
  SelectedImageType,
} from '../../types/photos';

export enum PhotosActionTypes {
  SET_RANDOM_PHOTO = 'PHOTOS@SET_RANDOM_PHOTO',
  SET_PHOTOS = 'PHOTOS@SET_PHOTOS',
  SET_PAGE = 'PHOTOS@SET_PAGE',
  SET_SELECTED_IMAGE = 'PHOTOS@SET_SELECTED_IMAGE',
}

export const setRandomPhoto = (photo: RandomPhotoType[]): PhotosActionType => ({
  type: PhotosActionTypes.SET_RANDOM_PHOTO,
  payload: photo,
});

export const setPhotos = (photos: PhotosType[]): PhotosActionType => ({
  type: PhotosActionTypes.SET_PHOTOS,
  payload: photos,
});

export const setPage = (page: number): PhotosActionType => ({
  type: PhotosActionTypes.SET_PAGE,
  payload: page,
});

export const setSelectedImage = (selectedImage: SelectedImageType): PhotosActionType => ({
  type: PhotosActionTypes.SET_SELECTED_IMAGE,
  payload: selectedImage,
});

export const fetchRandomPhoto = () => async (dispatch: Dispatch<PhotosActionType>) => {
  try {
    const response = await instance.get('/photos/random/?count=1&orientation=landscape');
    dispatch(setRandomPhoto(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchPhotos = (page: number) => async (dispatch: Dispatch<PhotosActionType>) => {
  try {
    const response = await instance.get(`/photos?page=${page}`);
    dispatch(setPhotos(response.data));
  } catch (error) {
    console.log(error);
  }
};
