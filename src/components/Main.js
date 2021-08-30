import React from "react";
import Card from "./Card.js";
import api from "../utils/Api.js";
import { Spinner } from "./Spinner.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    api
      .getCards()
      .then((cards) => {
        setCards(cards);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Ошибка при получении данных профиля");
      });
  }, []);
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запросы в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCardSomeLike) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCardSomeLike : c))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleCardDelete(card) {
    // Отправляется запрос в API и получаю массив, без удалённойкарточки
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return isLoading ? (
    <Spinner />
  ) : (
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
            src={currentUser.avatar}
            alt="Фото пользователя"
          />
          <div className="lead__wrapper-titles">
            <div className="lead__wrapper-title">
              <h1 className="lead__title title-cutter">{currentUser.name}</h1>
              <button
                aria-label="Внести изменения в форму"
                type="button"
                className="lead__pencil opacity"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="lead__subtitle title-cutter margin">
              {currentUser.about}
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
          return (
            <Card
              key={card._id}
              card={card}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              onCardClick={onCardClick}
            />
          );
        })}
      </section>
    </main>
  );
}
export default Main;
