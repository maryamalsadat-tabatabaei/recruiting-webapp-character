import { ATTRIBUTE_LIST } from "../../consts";
import { calculateModifier, calculateTotalPoints } from "../../utils/helper";

function AttributeList({ attributes, onUpdateAttributes }) {
  const totalPoints = calculateTotalPoints(attributes);

  const incrementAttributeHandler = (attribute) => {
    if (totalPoints < 70) {
      onUpdateAttributes({
        ...attributes,
        [attribute]: attributes[attribute] + 1,
      });
    } else {
      window.alert("The maximum total of all attributes is 70.");
    }
  };

  const decrementAttributeHandler = (attribute) => {
    onUpdateAttributes({
      ...attributes,
      [attribute]: attributes[attribute] - 1,
    });
  };

  return (
    <>
      {ATTRIBUTE_LIST.map((attribute) => (
        <div key={attribute}>
          <span>
            {attribute}: {attributes[attribute]}
          </span>
          <span>(Modifier: {calculateModifier(attributes[attribute])})</span>
          <button onClick={() => incrementAttributeHandler(attribute)}>
            +
          </button>
          <button onClick={() => decrementAttributeHandler(attribute)}>
            -
          </button>
        </div>
      ))}
    </>
  );
}

export default AttributeList;
