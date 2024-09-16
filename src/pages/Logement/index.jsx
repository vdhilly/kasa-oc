import { useParams } from "react-router-dom";
import logements from "../../data.json";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  console.log(logement);

  return <div>Logement</div>;
}

export default Logement;
