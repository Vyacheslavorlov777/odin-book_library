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

        const createdBook = (book) => {
            const bookEl = document.createElement('div');
            bookEl.classList.add('book');
    
            const bookItem = createBookDetails(book);
            bookEl.append(bookItem);
    
            return bookEl;
        }
    
        const createBookDetails = (book) => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
    
            const bookNamedClass = 'book__name';
            const bookTextedClass = 'book__text';
    
            const fields = [
                { label: 'nameBook', value: 'Name book: ', className: bookTextedClass },
                { label: 'book__nameBook', value: book.name, className: bookNamedClass },
                { label: 'author', value: 'Author: ', className: bookTextedClass },
                { label: 'authorName', value: book.author, className: bookNamedClass },
                { label: 'numberOfPages', value: 'Number of pages:', className: bookTextedClass },
                { label: 'pages', value: book.numbOfPages.toString(), className: bookNamedClass },
                { label: 'statusRead', value: 'Status read: ', className: bookTextedClass },
            ];
    
            const createField = (label, className, value) => {
                const element = document.createElement('div');
                element.id = label;
                element.classList.add(className);
                element.textContent = value;
    
                return element;
            };

            const changeStatus = (book) => {
                const status = document.createElement('div');
                status.id = 'status';
                status.classList.add('book__name');
                status.textContent = book.statusRead;
                status.style.backgroundColor = book.uiStyle;
        
                status.addEventListener('click', (e) => {
                    const newStatus = e.target.textContent === 'read' ? 'was read' : 'read';
                    const newStyle = e.target.style.backgroundColor === 'rgba(134, 33, 33, 0.73)' ? 'rgba(53, 89, 50, 0.73)' : 'rgba(134, 33, 33, 0.73)';

                    book.statusRead = newStatus;
                    e.target.textContent = newStatus;
                    book.uiStyle = newStyle
                    e.target.style.backgroundColor = newStyle;
                });

                return status;
            };
    
            fields.forEach((field) => {
                bookItem.append(createField(field.label, field.className, field.value));
            });

            bookItem.append(changeStatus(book));
    
            return bookItem;
        }

        containerLibrary.append(createdBook(book));

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