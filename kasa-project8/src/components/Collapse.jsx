import React from "react";
// import { useState } from "react";
import "../styles/Collapse.css";

function Collapse({ title, content, isOpen, onToggle }) {
  // const [displayCollapse, setDisplayCollapse] = useState(false); //Je defini un state qui prend la valeur  initiale false//

  const toggleCollapse = () => {
    onToggle(!isOpen);
  };
  console.log(content);

  return (
    <div className="collapse_element">
      <h3 className="collapse_title" onClick={toggleCollapse}>
        {title}

        <span>
          {isOpen ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )}
        </span>
      </h3>
      {isOpen && (
        <div className="collapse_content">
          {Array.isArray(content) ? (
            content.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
