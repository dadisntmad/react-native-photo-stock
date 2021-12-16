import { CategoriesActionTypes } from '../redux/actions/categories';
import { SelectedImageType, UrlsType, UserType } from './photos';

export type CategoriesState = {
  categories: CategortType[];
  discoverPhotos: DiscoverType[];
  page: number;
  selectedImage: SelectedImageType;
  categoryTitle: string;
  searchValue: string;
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

type setSelectedImage = {
  type: CategoriesActionTypes.SET_SELECTED_IMAGE;
  payload: SelectedImageType;
};

type setCategory = {
  type: CategoriesActionTypes.SET_CATEGORY;
  payload: string;
};

type setSearchValue = {
  type: CategoriesActionTypes.SET_SEARCH_VALUE;
  payload: string;
};

export type CategoriesActionType =
  | setDiscoverPhotos
  | setPage
  | setSelectedImage
  | setCategory
  | setSearchValue;
