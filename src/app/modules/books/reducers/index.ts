import { createSelector } from '@ngrx/store';

export * as fromBooks from './books/books.reducer';
export * as fromSearch from './search/search.reducer';

export const getBooksState = (state: fromBooks.State) => state.books;
export const getSearchState = (state: fromSearch.State) => state.;

// export const getBookEntities = createSelector(getBooksState, fromBooks.getEntities);
// export const getCollectionBookIds = createSelector(getCollectionState, fromCollection.getIds);
export const getBookCollection = createSelector(getBooksState, fromBooks.getBooks);
export const getSearchBooks = createSelector(fromSearch.searchFeatureKey, fromSearch.State);
