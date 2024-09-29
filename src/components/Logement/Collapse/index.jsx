import { useState } from "react";
import arrow from "../../../assets/arrow_back.svg";

function Collapse({ title, content, isEquipment = false }) {
  const [openCollapse, setOpenCollapse] = useState(false);
  console.log(content);

  const displayContent = () => {
    setOpenCollapse((openCollapse) => !openCollapse);
  };
  return (
    <div className="collapse">
      <div>
        <h2 className="collapse__title" onClick={displayContent}>
          {title}
          <span>
            <img src={arrow} alt="fleche" className={openCollapse === true ? "arrow_up" : "arrow_down"} />
          </span>
        </h2>
      </div>
      <div>
        <p className={`${isEquipment ? "collapse__content equipment" : "collapse__content"} ${openCollapse ? "active" : ""}`}>
          {isEquipment ? content.map((equipment, index) => <span key={index}>{equipment}</span>) : content}
        </p>
      </div>
    </div>
  );
}

export default Collapse;
