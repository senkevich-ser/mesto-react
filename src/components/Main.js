import React from "react";
import Jac from "../images/Jac-Yv.jpg";

function Main() {
  /* const editAvatarButton = document.querySelector(".lead__pencil");
  console.log(editAvatarButton); */
  /* editAvatarButton.addEventListener("click", HandleEditAvatarClick);

  const HandleEditAvatarClick = () => {
    document.querySelector(".popup-avatar").classList.add("popup_opened");
  }; */

  return (
    <main className="content">
      <section className="lead">
        <div className="lead__titles">
          <button
            aria-label="Редактировать аватар"
            type="button"
            className="lead__avatarButton opacity"
          ></button>
          <img className="lead__image" src={Jac} alt="Фото пользователя" />
          <div className="lead__wrapper-titles">
            <div className="lead__wrapper-title">
              <h1 className="lead__title title-cutter">Жак-Ив Кусто</h1>
              <button
                aria-label="Внести изменения в форму"
                type="button"
                className="lead__pencil opacity"
              ></button>
            </div>
            <p className="lead__subtitle title-cutter margin">
              Исследователь океана
            </p>
          </div>
        </div>
        <button
          aria-label="Добавить карточку"
          type="button"
          className="lead__button opacity"
        ></button>
      </section>
      <section className="foto-grid" aria-label="Фото красивых мест">
        <template className="foto-grid__template foto-grid__template_type_default">
          <div className="foto-grid__card">
            <div className="foto-grid__urn"></div>
            <img src="#" alt="Foto" className="foto-grid__item" />
            <div className="foto-grid__name">
              <h2 className="foto-grid__name-title title-cutter">
                Новое место
              </h2>
              <div className="foto-grid__likesBlock">
                <button
                  aria-label="Поставить лайк"
                  type="button"
                  className="foto-grid__name-heart"
                ></button>
                <div className="foto-grid__likesQty"></div>
              </div>
            </div>
          </div>
        </template>
      </section>
      <div className="popup profile-popup">
        <div className="popup__container">
          <button
            aria-label="Закрыть попап"
            type="button"
            className="popup__close-cross opacity"
          ></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form name="formExplorers" className="popup__inputs" noValidate>
            <input
              id="initial-input"
              name="name"
              type="text"
              placeholder="Имя Фамилия "
              /* value="" */
              className="input popup__input-text"
              maxLength="40"
              minLength="2"
              required
            />
            <span className="initial-input-error popup__error"></span>
            <input
              id="rank-input"
              name="about"
              type="text"
              placeholder="Род деятельности "
              /*   value="" */
              className="input popup__input-text"
              maxLength="200"
              minLength="2"
              required
            />
            <span className="rank-input-error popup__error"></span>
            <button
              aria-label="Сохранить изменения в форме"
              type="submit"
              className="popup__submit-btn"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className=" popup-card popup">
        <div className="popup-card__container popup__container">
          <button
            aria-label="Закрыть попап"
            type="button"
            className="popup__close-cross opacity"
          ></button>
          <h2 className="popup-card__title popup__title">Новое место</h2>
          <form
            name="formCards"
            className="popup-card__inputs popup__inputs"
            noValidate
          >
            <input
              id="place-input"
              name="placeName"
              type="text"
              placeholder="Название "
              /* value="" */
              className="input popup-card__input-text popup__input-text"
              minLength="1"
              maxLength="30"
              required
            />
            <span className="place-input-error popup__error"></span>
            <input
              id="link-input"
              name="linkName"
              type="url"
              placeholder="Ссылка на картинку "
              /* value="" */
              className="input popup-card__input-text popup__input-text"
              required
            />
            <span className="link-input-error popup__error"></span>
            <button
              aria-label="Сохранить изменения в форме"
              type="submit"
              className="popup-card__submit-btn popup__submit-btn"
            >
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className=" popup-avatar popup">
        <div className="popup__container">
          <button
            aria-label="Закрыть попап"
            type="button"
            className="popup__close-cross opacity"
          ></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="formAvatar" className="popup__inputs" noValidate>
            <input
              id="avatar-input"
              name="avatar"
              type="url"
              placeholder="Ссылка на фото "
              /* value="" */
              className="input  popup__input-text"
              required
            />
            <span className="avatar-input-error popup__error"></span>
            <button
              aria-label="Сохранить новый аватар"
              type="submit"
              className="popup__submit-btn"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup-deleteCard popup">
        <div className="popup__container">
          <button
            aria-label="Закрыть попап"
            type="button"
            className="popup__close-cross opacity"
          ></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form
            name="deleteCard"
            className="popup__inputs popup__deleteCard"
            noValidate
          >
            <button
              aria-label="Сохранить новый аватар"
              type="submit"
              className="popup__submit-btn"
            >
              Да
            </button>
          </form>
        </div>
      </div>
      <div className=" foto-open popup">
        <div className=" foto-open__container">
          <img className="foto-open__image" src="#" alt="Foto" />
          <button
            aria-label="Закрыть фото"
            type="button"
            className=" popup__close-cross opacity"
          ></button>
          <h2 className="foto-open__name">Новое место</h2>
        </div>
      </div>
    </main>
  );
}
export default Main;
