import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { searchBook, searchSuccess } from '@books/actions/book/book.actions';
import { BookService } from '@books/services';
import { Book } from '@books/models';

@Injectable()
export class BookEffects {
    constructor(private actions$: Actions, private bookService: BookService) {}

    @Effect()
    search$ = (): Observable<Book[]> =>
        this.actions$.pipe(
            ofType(searchBook),
            switchMap(({ queryTitle }) => {
                return this.bookService.searchBooks(queryTitle).pipe(
                    map((books: Book[]) => {
                        searchSuccess({ books });
                        return books;
                    })
                );
            })
        );
}
