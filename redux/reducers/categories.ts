import { CategoriesActionType, CategoriesState } from '../../types/categories';
import { CategoriesActionTypes } from '../actions/categories';

const initialState: CategoriesState = {
  categories: [
    {
      id: 1,
      categoryImage:
        'https://images.unsplash.com/photo-1637573544833-85aeba5247eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      categoryName: 'Wallpapers',
    },
    {
      id: 2,
      categoryImage:
        'https://images.unsplash.com/photo-1622220835869-5e3e9bc89136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      categoryName: 'Fashion',
    },
    {
      id: 3,
      categoryImage:
        'https://images.unsplash.com/photo-1638711485688-f6ad999e3f12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80',
      categoryName: 'Food',
    },
    {
      id: 4,
      categoryImage:
        'https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
      categoryName: 'People',
    },
    {
      id: 5,
      categoryImage:
        'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      categoryName: 'Travel',
    },
  ],
  discoverPhotos: [],
  page: 1,
};

const categories = (state = initialState, action: CategoriesActionType) => {
  switch (action.type) {
    case CategoriesActionTypes.SET_DISCOVER_PHOTOS:
      return {
        ...state,
        discoverPhotos: [...state.discoverPhotos, ...action.payload],
      };
    case CategoriesActionTypes.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default categories;
