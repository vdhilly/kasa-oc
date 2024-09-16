function Card({ title, cover }) {
  return (
    <article className="logement-card">
      <img src={cover} alt="location" />
      <div className="logement-card__overlayer">
        <span className="logement-card__title">{title}</span>
      </div>
    </article>
  );
}

export default Card;
