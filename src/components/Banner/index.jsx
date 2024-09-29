function Banner({ title, image, isDark = false }) {
  console.log(isDark);
  return (
    <div className="banner">
      <img src={image} alt="Paysage" className={isDark === true ? "dark" : ""} />
      {title ? <span>{title}</span> : ""}
    </div>
  );
}
export default Banner;
