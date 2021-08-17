import React from "react";
import Card from "./Card.js";
import api from "./utils/Api.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userInfo, setUserInfo] = React.useState({
    userName: "",
    userDescription: "",
    userAvatar: "",
  });
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInfoAboutUser(), api.getCards()])
      .then(([userData, cards]) => {
        setUserInfo({
          userName: userData.name,
          userDescription: userData.about,
          userAvatar: userData.avatar,
        });
        setCards(cards);
      })
      .catch((err) => {
        console.log("Ошибка при получении данных профиля");
      });
  }, []);

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
          <img
            className="lead__image"
            src={userInfo.userAvatar}
            alt="Фото пользователя"
          />
          <div className="lead__wrapper-titles">
            <div className="lead__wrapper-title">
              <h1 className="lead__title title-cutter">{userInfo.userName}</h1>
              <button
                aria-label="Внести изменения в форму"
                type="button"
                className="lead__pencil opacity"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="lead__subtitle title-cutter margin">
              {userInfo.userDescription}
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
        {cards.map((card) => {
          return <Card key={card._id} card={card} onCardClick={onCardClick} />;
        })}
      </section>
    </main>
  );
}
export default Main;
