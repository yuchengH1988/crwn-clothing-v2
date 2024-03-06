import {
  CATEGORIES_ACTION_TYPES,
  Category,
} from "./category.types";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

export type FETCH_CATEGORIES_START = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>

export type FETCH_CATEGORIES_SUCCESS = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>

export type FETCH_CATEGORIES_FAILED = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>

export const fetchCategoriesStart = withMatcher((): FETCH_CATEGORIES_START =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]): FETCH_CATEGORIES_SUCCESS =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray,
  ));

export const fetchCategoriesFailed = withMatcher((error: Error): FETCH_CATEGORIES_FAILED =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
    error,
  ));
