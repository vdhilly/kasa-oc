import { Link } from "react-router-dom";
import HomeBannerImg from "../../assets/home_banner.png";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import logements from "../../data.json";

function Home() {
  return (
    <div className="home-container">
      <Banner title="Chez vous, partout et ailleurs" image={HomeBannerImg} />
      <div className="cards-container">
        {logements.map((logement, index) => (
          <div className="card_logement" key={index}>
            <Link className="link_card_logement" to={`/logement/${logement.id}`}>
              <Card title={logement.title} cover={logement.cover} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
