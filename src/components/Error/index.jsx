import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="lost">
      <h2 className="lost__title">404</h2>
      <p className="lost__subtitle">Il semblerait que la page que vous cherchez n’existe pas</p>
      <Link className="lost__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
