import home from "./home.js";

export default (books) => {
    const body = document.querySelector('body');
    body.innerHTML = ''

    const container = document.createElement('div');
    container.classList.add('container');
    body.append(container);

    const containerLibrary = document.createElement('div');
    containerLibrary.classList.add('container-library');
    container.append(containerLibrary);


    books.forEach((book) => {
        const bookEl = document.createElement('div');
        bookEl.classList.add('book');
        containerLibrary.append(bookEl);

        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookEl.append(bookItem);

        const nameBook = document.createElement('div');
        nameBook.id = 'nameBook';
        nameBook.classList.add('book__text');
        nameBook.textContent = 'Name book:';
        bookItem.append(nameBook);

        const newBookName = document.createElement('div');
        newBookName.id = 'book__nameBook';
        newBookName.classList.add('book__name');
        newBookName.textContent = book.name;
        bookItem.append(newBookName);

        const authorBook = document.createElement('div');
        authorBook.id ='author';
        authorBook.classList.add('book__text');
        authorBook.textContent = 'Author:';
        bookItem.append(authorBook);

        const authorName = document.createElement('div');
        authorName.id = 'authorName';
        authorName.classList.add('book__name');
        authorName.textContent = book.author;
        bookItem.append(authorName);

        const pagesBook = document.createElement('div');
        pagesBook.id ='numberOfPages';
        pagesBook.classList.add('book__text');
        pagesBook.textContent = 'Number of pages:';
        bookItem.append(pagesBook);

        const pages = document.createElement('div');
        pages.id = 'pages';
        pages.classList.add('book__name');
        pages.textContent = book.numbOfPages.toString();
        bookItem.append(pages);

        const statusBook = document.createElement('div');
        statusBook.id ='statusRead';
        statusBook.classList.add('book__text');
        statusBook.textContent = 'Status read:';
        bookItem.append(statusBook);

        const statusActual = document.createElement('div');
        statusActual.id = 'status';
        statusActual.classList.add('book__name');
        statusActual.textContent = book.statusRead;
        statusActual.style.backgroundColor = '#862121ba';
        bookItem.append(statusActual);

        statusActual.addEventListener('click', (e) => {
                e.preventDefault();
                if (book.statusRead === 'read') {
                    book.statusRead = 'was read';
                    e.target.textContent = book.statusRead;
                    statusActual.style.backgroundColor = 'rgba(53, 89, 50, 0.73)';
                } else {
                    book.statusRead = 'read';
                    e.target.textContent = book.statusRead;
                    statusActual.style.backgroundColor = ' #862121ba';
                }
        });
    });

    const exit = document.createElement('div')
    exit.className = 'exit';
    exit.textContent = 'Back to menu'
    body.append(exit);

    exit.addEventListener('click', (e) => {
        e.preventDefault()
        home(books);
    });

};