import React from "react";
import Header from "./landing/Header.js";
import Footer from "./landing/Footer.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  // переменная состояния, отвечающая за данные пользователя
  const [currentUser, setCurrentUser] = React.useState({});

  const [selectedCard, setSelectedCard] = React.useState({});

  React.useEffect(() => {
    api
      .getInfoAboutUser()
      .then((currentUserData) => {
        setCurrentUser(currentUserData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //обработчики для стейтовых переменных
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
  //функция закрытия попапов
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }
  function handleUpdateUser({ name, about }) {
    api
      .setInfoAboutUser({ name, about })
      .then((currentUserData) => {
        setCurrentUser(currentUserData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddCardClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
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
              /* required */
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
              /* required */
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
    </CurrentUserContext.Provider>
  );
}

export default App;
