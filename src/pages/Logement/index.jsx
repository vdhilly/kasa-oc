import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import Carrousel from "../../components/Logement/Carroussel";
import Collapse from "../../components/Logement/Collapse";
import Host from "../../components/Logement/Host";
import Rate from "../../components/Logement/Rate";
import Tag from "../../components/Logement/Tag";
import logements from "../../data.json";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) return <Error />;

  const tags = logement.tags;
  const host = logement.host;
  const rating = logement.rating;

  return (
    <div className="logement-container">
      <Carrousel slides={logement.pictures} />
      <div className="logement__title">
        <span className="logement__title__name">{logement.title}</span>
        <span className="logement__title__location">{logement.location}</span>
      </div>
      <div className="tags-container">
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
      <div className="rate-host-container">
        <div className="rate-container">
          <Rate score={rating} />
        </div>
        <div className="host-container">
          <Host hostName={host.name} hostPic={host.picture} />
        </div>
      </div>
      <div className="logement-collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} isEquipment={true} />
      </div>
    </div>
  );
}

export default Logement;
