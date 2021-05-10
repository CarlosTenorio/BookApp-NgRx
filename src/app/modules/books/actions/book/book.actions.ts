import { Book } from '@books/models';
import { createAction, props } from '@ngrx/store';

export const SEARCH = '[Book] Search';
export const SEARCH_SUCCESS = '[Books/API] Search Success';

export const searchBook = createAction(SEARCH, props<{ queryTitle: string }>());
export const searchSuccess = createAction(SEARCH_SUCCESS, props<{ books: Book[] }>());
