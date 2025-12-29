import { useState } from "react";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={toggleCollapse}>
        <span>{title}</span>
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
