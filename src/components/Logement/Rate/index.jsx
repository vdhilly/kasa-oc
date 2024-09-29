import emptyStar from "../../../assets/empty-star.svg";
import fullStar from "../../../assets/full-star.svg";

function Rate({ score }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rate">
      {stars.map((level) =>
        score >= level ? (
          <img key={level.toString()} className="star" src={fullStar} alt="star" />
        ) : (
          <img key={level.toString()} className="star" src={emptyStar} alt="rating star" />
        )
      )}
    </div>
  );
}

export default Rate;
