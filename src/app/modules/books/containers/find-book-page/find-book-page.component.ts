import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { BookService } from '@books/services';
import { Book } from '@books/models';

import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { getBooksState } from '../../reducers';
import { searchBook } from '../../actions/book/book.actions';

@Component({
    selector: 'bc-find-book-page',
    templateUrl: './find-book-page.component.html',
    styleUrls: ['./find-book-page.component.scss']
})
export class FindBookPageComponent implements OnInit {
    books$: Observable<Book[]>;
    searching$: Observable<boolean>;
    // destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private store: Store<getBooksState>) {}

    ngOnInit() {
        // this.bookService.setSearching(false);
        // this.searching$ = this.bookService.searching$;
        this.books$ = this.store.select(fromBooks.getSearchResults);
    }

    // ngOnDestroy(): void {
    //     this.destroy$.next(true);
    // }

    search(queryTitle: string) {
        this.store.dispatch(searchBook({ queryTitle }));
    }
}
