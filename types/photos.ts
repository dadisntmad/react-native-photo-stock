import { PhotosActionTypes } from '../redux/actions/photos';

export type PhotosState = {
  randomPhotos: RandomPhotoType[];
  photos: PhotosType[];
  page: number;
  selectedImage: SelectedImageType;
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
  profile_image?: ProfileImageType;
};

export type ProfileImageType = {
  medium: string;
};

export type SelectedImageType = {
  id?: string;
  urls?: UrlsType;
  likes?: number;
  created_at?: string;
  user?: UserType;
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

type setSelectedImage = {
  type: PhotosActionTypes.SET_SELECTED_IMAGE;
  payload: SelectedImageType;
};

export type PhotosActionType = setRandomPhoto | setPhotos | setPage | setSelectedImage;
