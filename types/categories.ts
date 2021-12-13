import { CategoriesActionTypes } from '../redux/actions/categories';
import { UrlsType, UserType } from './photos';

export type CategoriesState = {
  categories: CategortType[];
  discoverPhotos: DiscoverType[];
  page: number;
};

export type CategortType = {
  id: number;
  categoryImage: string;
  categoryName: string;
};

export type DiscoverType = {
  id: string;
  urls: UrlsType;
  user: UserType;
};

type setDiscoverPhotos = {
  type: CategoriesActionTypes.SET_DISCOVER_PHOTOS;
  payload: DiscoverType[];
};

type setPage = {
  type: CategoriesActionTypes.SET_PAGE;
  payload: number;
};

export type CategoriesActionType = setDiscoverPhotos | setPage;
