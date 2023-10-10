import React from "react";
import Navbar from "../../components/Navbar";
import "../../styles/About.css";
import Footer from "../../components/Footer";
import Collapse from "../../components/Collapse";
import aboutDatas from "../../datas/aboutDatas";
import { useState } from "react";

function About() {
  const [isOpen, setIsOpen] = useState([]);
  const [height, setHeight] = useState([]);
  const handleToggle = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    const upDateHeight = [...height];

    setIsOpen(updatedIsOpen);
    if (isOpen[index]) {
      upDateHeight[index] = "150";

    }else { upDateHeight[index]=0} 

    setHeight(upDateHeight)

    console.log(isOpen)

  };

  return (
    <div>
      <Navbar />
      <div className="about_cover_img"></div>
      <main className="about_details">
        {aboutDatas.map((aboutdata, index) => {
          return (
            <div key={aboutdata.id} className="about_collapse">
              <Collapse
                title={aboutdata.title}
                content={aboutdata.content}
                isOpen={isOpen[index]}
                height={height[index]}
                onToggle={() => handleToggle(index)}
              />
            </div>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

export default About;
