import { Book } from '@books/models';

export interface State {
    books: Book[];
    selectedBookId: string | null;
}

export const initialState: State = {
    books: [],
    selectedBookId: null
};

export const getBooks = (state: State) => state.books;
export const getSelectedBookId = (state: State) => state.selectedBookId;
