function Banner({ title, image, isDark = false }) {
  return (
    <div className="banner">
      <img src={image} alt="Paysage" className={isDark === true ? "dark" : ""} />
      {title ? <span>{title}</span> : ""}
    </div>
  );
}
export default Banner;
