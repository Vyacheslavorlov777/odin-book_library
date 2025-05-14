export default class Book {
    constructor (nameBook, author, numbOfPages) {
        this.id = crypto.randomUUID();
        this.name = nameBook;
        this.author = author;
        this.numbOfPages = numbOfPages;
        this.statusRead = 'read';
    }
};