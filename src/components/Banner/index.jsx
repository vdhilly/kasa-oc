function Banner({ title, image }) {
  return (
    <div className="banner">
      <img src={image} alt="Paysage" />
      {title ? <span>{title}</span> : ""}
    </div>
  );
}
export default Banner;
