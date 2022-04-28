"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookList_1 = require("./bookList");
var book1 = new bookList_1.Book("The Design of EveryDay Things", "Don Norman", false);
var book2 = new bookList_1.Book("The Most Human Human", "Brian Christian", true);
var books = [];
books.push(book1, book2);
for (var i = 0; i < books.length; i++) {
    // let book = books[i];
    if (book.alreadyRead === true) {
        console.log('You already read "' + book.title + ' by ' + book.author);
    }
    else {
        console.log('You still need to read "' + book.title + ' by ' + book.author);
    }
}
