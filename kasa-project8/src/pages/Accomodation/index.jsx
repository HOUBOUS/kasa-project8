import React, {useState } from "react";
import "../../styles/Accomodation.css";
import Navbar from "../../components/Navbar";
import Collapse from "../../components/Collapse";
import AccomodationSlider from "../../components/AccomodationSlider";
import { useParams,Navigate } from "react-router-dom";
import datas from "../../datas/datas";
import redStar from "../../assets/redStar.png";
import greyStar from "../../assets/greyStar.png";
import Footer from "../../components/Footer";
// import Error from "./../Error";

// import AccomodationSlider from '../../components/AccomodationSlider'

function Accomodation() {
  const [isOpen, setIsOpen] = useState([]);
  const [height, setHeight] = useState([]);
  
  const handleToggle = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    const upDateHeight = [...height];

    setIsOpen(updatedIsOpen);
    if (isOpen[index]) {
      upDateHeight[index] = "230";
    } else {
      upDateHeight[index] = 0;
    }

    setHeight(upDateHeight);

    console.log(isOpen);
  };

  const idAccomodation = useParams("id").id;

 
    const selectedAccomodation = datas.find(
      (datas) => datas.id === idAccomodation
    );
    console.log(selectedAccomodation);
    if (!selectedAccomodation) {
      return <Navigate to="/Error" />
    }


  return (
    <div>
      <Navbar />

      <div className="accomodation_page">
        <AccomodationSlider
          pictures={selectedAccomodation.pictures}
          numberPhotos={selectedAccomodation.pictures.length}
        />

        <section className="accomodation_header">
          <div className="accomodation_title">
            <h1>{selectedAccomodation.title} </h1>
            <h2>{selectedAccomodation.location}</h2>
            <span className="accomodation_tag">
              {selectedAccomodation.tags.map((tag, index) => {
                return <button key={index}>{tag}</button>;
              })}
            </span>
          </div>
          <div className="accomodation_host">
            <div className="accomodation_host_elements">
              <span className="accomodation_host_badge">
                <div className="accomodation_text">
                  <h3>{selectedAccomodation.host.name.split(' ')[0]} </h3>
                  <h3>{selectedAccomodation.host.name.split(' ')[1]}</h3>
                </div>
                <div className="accomodation_badge">
                  <img
                    src={selectedAccomodation.host.picture}
                    alt="hostPicture"
                  />
                </div>
              </span>
              <div className="accomodation_rate">
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <img
                      key={index}
                      src={ratingValue <= selectedAccomodation.rating ? redStar : greyStar}
                      alt=" number of stars"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        
          <section className="appartment_description_banner">
            <span className="collapse_element_description">
              <Collapse
                title="Description"
                height={height[0]}
                content={selectedAccomodation.description}
                isOpen={isOpen[0]}
                onToggle={() => handleToggle(0)}
              />
            </span>
            <span className="collapse_element_equipements">
              <Collapse
                title="Équipements"
                height={height[1]}
                content={selectedAccomodation.equipments}
                isOpen={isOpen[1]}
                onToggle={() => handleToggle(1)}
              />
            </span>
          </section>
        
      </div>

      <Footer />
    </div>
  );
}

export default Accomodation;
