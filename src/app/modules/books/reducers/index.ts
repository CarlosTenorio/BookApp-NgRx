import { createSelector } from '@ngrx/store';

export * as fromBooks from './books/books.reducer';

export const getBooksState = (state: fromBooks.BooksState) => state.books;

// export const getBookEntities = createSelector(getBooksState, fromBooks.getEntities);
// export const getCollectionBookIds = createSelector(getCollectionState, fromCollection.getIds);
export const getBookCollection = createSelector(getBooksState, fromBooks.getBooks);
