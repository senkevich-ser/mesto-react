import React from "react";
import Jac from "../images/Jac-Yv.jpg";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main className="content">
      <section className="lead">
        <div className="lead__titles">
          <button
            aria-label="Редактировать аватар"
            type="button"
            className="lead__avatarButton opacity"
            onClick={onEditAvatar}
          ></button>
          <img className="lead__image" src={Jac} alt="Фото пользователя" />
          <div className="lead__wrapper-titles">
            <div className="lead__wrapper-title">
              <h1 className="lead__title title-cutter">Жак-Ив Кусто</h1>
              <button
                aria-label="Внести изменения в форму"
                type="button"
                className="lead__pencil opacity"
                onClick={onEditProfile}
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
          onClick={onAddPlace}
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
    </main>
  );
}
export default Main;
