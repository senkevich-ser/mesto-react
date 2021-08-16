function ImagePopup() {
  return (
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
  );
}

export default ImagePopup;
