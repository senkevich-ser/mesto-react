import React from "react";
import Header from "./landing/Header.js";
import Footer from "./landing/Footer.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="App">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddCardClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="editProfile"
        buttonTitle="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__inputs">
          <input
            id="initial-input"
            type="text"
            name="name"
            placeholder="Имя Фамилия"
            className="input popup__input-text"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="initial-input-error popup__error"></span>
          <input
            id="rank-input"
            type="text"
            name="about"
            placeholder="Род деятельности"
            className="input popup__input-text"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="rank-input-error popup__error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="addCard"
        buttonTitle="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__inputs">
          <input
            id="place-input"
            type="text"
            name="placeName"
            placeholder="Название"
            className="input popup-card__input-text popup__input-text"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="place-input-error popup__error"></span>
          <input
            id="link-input"
            name="linkName"
            type="url"
            placeholder="Ссылка на картинку"
            className="input popup-card__input-text popup__input-text"
            required
          />
          <span className="link-input-error popup__error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        buttonTitle="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__inputs">
          <input
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            className="input  popup__input-text"
            required
          />
          <span className="avatar-input-error popup__error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm title="Вы уверены?" name="remove" buttonTitle="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
