import { Book } from '@books/models';

export const booksFeatureKey = 'books';

export interface State {
    books: Book[];
    selectedBookId: string | null;
}

export interface BooksState {
    books: State;
}

export const initialState: State = {
    books: [],
    selectedBookId: null
};

export const getBooks = (state: State) => state.books;
export const getSelectedBookId = (state: State) => state.selectedBookId;
