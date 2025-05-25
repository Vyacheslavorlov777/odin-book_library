export default () => {
    const body = document.querySelector('body');

    body.innerHTML = `
        <div class="container">
            <div class="container-menu">
                <div class="container-menu__logo">
                    <div>Odin Library</div>
                </div>
                <div class="container-menu__library">
                    <div class="library__text">Library</div>
                    <button class="library__btn">See</button>
                </div>
                <div class="container-menu__newBook">
                    <div class="nexBook__text">Create new book</div>
                    <button class="newBook__btn">Add</button>
                </div>
            </div>
        </div>

        <dialog class="myDialog">
            <div class="modalClose modal-btn-close">
                <img class="closed" src="./assets/img/close.png" />
            </div>
            <div class="container-modal">
                <div class="modal__img"></div>
                <div class="modal__form">
                    <form class="form">
                        <div class="form__item">
                            <div class="item__name">Name book:</div>
                            <input name="nameBook" class="item__input" type="text" autocomplete="off">
                            <div class="message"></div>
                        </div>
                        <div class="form__item">
                            <div class="item__name">Author:</div>
                            <input name="authorBook" class="item__input" type="text" autocomplete="off">
                        </div>
                        <div class="form__item">
                            <div class="item__name">Numb of pages:</div>
                            <input name="numbersOfBook" class="item__input" type="number" min="1" autocomplete="off">
                        </div>
                        <div class="container-btn">
                            <button class="form__btn">Add</button>
                        </div>
                    </form>
                </div>
            </div>  
        </dialog>`;
}