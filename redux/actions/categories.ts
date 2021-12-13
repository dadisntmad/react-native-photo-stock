import { Dispatch } from 'redux';
import instance from '../../API/api';
import { CategoriesActionType, DiscoverType } from '../../types/categories';

export enum CategoriesActionTypes {
  SET_DISCOVER_PHOTOS = 'CATEGORIES@ SET_DISCOVER_PHOTOS',
  SET_PAGE = 'CATEGORIES@SET_PAGE',
}

export const setDiscoverPhotos = (photos: DiscoverType[]): CategoriesActionType => ({
  type: CategoriesActionTypes.SET_DISCOVER_PHOTOS,
  payload: photos,
});

export const setPage = (page: number): CategoriesActionType => ({
  type: CategoriesActionTypes.SET_PAGE,
  payload: page,
});

export const fetchDiscoverPhotos = () => async (dispatch: Dispatch<CategoriesActionType>) => {
  try {
    const response = await instance.get('/photos/random?count=10');
    dispatch(setDiscoverPhotos(response.data));
  } catch (error) {
    console.log(error);
  }
};
