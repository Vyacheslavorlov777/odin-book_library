import homeRender from "./homeRender.js";
import Book from "./newBook.js";
import library from "./library.js";

export default (books = []) => {
    
    homeRender()

    const validateForm = (nameBook, authorBook, pagesBook) => {
        const nameB = nameBook === '' ? false : true;
        const authorB = authorBook === '' ? false : true;
        const pagesB = Number(pagesBook) <= 0 ? false : true;

        console.log(pagesB);
        

        return (nameB && authorB && pagesB)
    };

    const elements = {
        body: document.querySelector('body'),
        libraryBtn: document.querySelector('.library__btn'),
        newBookBtn: document.querySelector('.newBook__btn'),
        modal: document.querySelector('.myDialog'),
        modalBtnClose: document.querySelector('.modal-btn-close'),
        form: document.querySelector('form'),
        btnSubmited: document.querySelector('.form__btn'),
    };
    
    const libraryBooks = books.length === 0 ? [] : books;

    elements.btnSubmited.addEventListener('click', (e) => {
        e.preventDefault();
        
        const formData = new FormData(elements.form, elements.btnSubmited);
    
        const bookName = formData.get('nameBook');
        const bookAuthor = formData.get('authorBook');
        const bookPages = formData.get('numbersOfBook');

        

        

        if (validateForm(bookName, bookAuthor, bookPages)) {
            const newBook = new Book(bookName, bookAuthor, bookPages);
            libraryBooks.push(newBook);   
            elements.modal.close(); 
        } else {
            alert('Заполните корректно поля Книги!')
        }
        
        
    
        
    });
    
    elements.libraryBtn.addEventListener('click', (e) => {
        e.preventDefault()
        library(libraryBooks);
    });
    
    elements.newBookBtn.addEventListener('click', (e) => {
        e.preventDefault();
        elements.modal.showModal()
    });
    
    elements.modalBtnClose.addEventListener('click', (e) => {
        e.preventDefault();
        elements.modal.close();
    });
};