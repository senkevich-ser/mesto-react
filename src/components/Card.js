function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="foto-grid__card">
      <div className="foto-grid__urn" type="button" aria-label="Удалить"></div>
      <img
        src={`${card.link}`}
        alt={`${card.name}`}
        onClick={handleClick}
        className="foto-grid__item"
      />
      <div className="foto-grid__name">
        <h2 className="foto-grid__name-title title-cutter">{card.name}</h2>
        <div className="foto-grid__likesBlock">
          <button
            aria-label="Поставить лайк"
            type="button"
            className="foto-grid__name-heart"
          ></button>
          <div className="foto-grid__likesQty">{card.likes.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
