import { searchSuccess } from '@books/actions';
import { Book } from '@books/models';
import { createReducer, on } from '@ngrx/store';

export const searchFeatureKey = 'search';

export interface SearchState {
    books: Book[];
    query: string;
}

export const initialState: SearchState = {
    books: [],
    query: null
};

export const reducer = createReducer(
    initialState,
    on(searchSuccess, (state, { books }) => ({
        books: books,
        query: state.query
    }))
);

export const getQuery = (state: SearchState) => state.query;
export const getBooks = (state: SearchState) => state.books;
