import { CLASS_LIST } from "../../consts";
import { isMeetClassRequirements } from "../../utils/helper";
import { useState } from "react";

function ClassList({ attributes }) {
  const [selectedClass, setSelectedClass] = useState("");

  const classClickHandler = (className) => {
    setSelectedClass(className);
  };
  const classCloseHandler = () => {
    setSelectedClass("");
  };

  return (
    <>
      {Object.entries(CLASS_LIST).map(([className, classAttributes]) => (
        <div
          key={className}
          className={`class-item ${
            isMeetClassRequirements(attributes, classAttributes) && "pass"
          }`}
          onClick={() => classClickHandler(className)}
        >
          <h3>{className}</h3>
        </div>
      ))}

      {selectedClass && (
        <div className="selected-class">
          <h4>{selectedClass} Minimum Requirements:</h4>

          <ul>
            {Object.entries(CLASS_LIST[selectedClass]).map(
              ([attribute, value]) => (
                <li key={attribute}>
                  {attribute}: {value}
                </li>
              )
            )}
          </ul>
          <button onClick={classCloseHandler}>Close</button>
        </div>
      )}
    </>
  );
}

export default ClassList;
