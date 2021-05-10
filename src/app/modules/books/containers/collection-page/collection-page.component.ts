import { Component, OnInit } from '@angular/core';
import { Book } from 'app/modules/books/models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';

@Component({
    selector: 'app-collection-page',
    templateUrl: './collection-page.component.html',
    styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {
    saving$: Observable<boolean>;
    myCollection$: Observable<Book[]>;

    constructor(store: Store<fromRoot.State>) {}

    ngOnInit() {
        // this.myCollection$ = this.bookService.myCollection$;
        this.myCollection$ = this.store.select(fromRoot.getBooks);
        // this.saving$ = this.bookService.saving$;
    }

    addBook(book: Book) {
        // this.bookService.addBook(book);
    }
}
