import { Dispatch } from 'redux';
import instance from '../../API/api';
import { CategoriesActionType, DiscoverType } from '../../types/categories';
import { SelectedImageType } from '../../types/photos';

export enum CategoriesActionTypes {
  SET_DISCOVER_PHOTOS = 'CATEGORIES@ SET_DISCOVER_PHOTOS',
  SET_PAGE = 'CATEGORIES@SET_PAGE',
  SET_SELECTED_IMAGE = 'CATEGORIES@SET_SELECTED_IMAGE',
  SET_CATEGORY = 'CATEGORIES@SET_CATEGORY',
  SET_SEARCH_VALUE = 'CATEGORIES@SET_SEARCH_VALUE',
}

export const setDiscoverPhotos = (photos: DiscoverType[]): CategoriesActionType => ({
  type: CategoriesActionTypes.SET_DISCOVER_PHOTOS,
  payload: photos,
});

export const setPage = (page: number): CategoriesActionType => ({
  type: CategoriesActionTypes.SET_PAGE,
  payload: page,
});

export const setSelectedImage = (image: SelectedImageType): CategoriesActionType => ({
  type: CategoriesActionTypes.SET_SELECTED_IMAGE,
  payload: image,
});

export const setCategory = (term: string): CategoriesActionType => ({
  type: CategoriesActionTypes.SET_CATEGORY,
  payload: term,
});

export const setSearchValue = (value: string): CategoriesActionType => ({
  type: CategoriesActionTypes.SET_SEARCH_VALUE,
  payload: value,
});

export const fetchDiscoverPhotos = () => async (dispatch: Dispatch<CategoriesActionType>) => {
  try {
    const response = await instance.get('/photos/random?count=10');
    dispatch(setDiscoverPhotos(response.data));
  } catch (error) {
    console.log(error);
  }
};
