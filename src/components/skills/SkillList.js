import React, { useState, useEffect } from "react";
import { SKILL_LIST } from "../../consts";
import {
  calculateModifier,
  calculateTotalAvailablePoints,
  calculateTotalPoints,
} from "../../utils/helper";

function SkillList({ attributes }) {
  const [skillPoints, setSkillPoints] = useState({});
  const totalAvailablePoints = calculateTotalAvailablePoints(attributes);

  useEffect(() => {
    setSkillPoints({});
  }, [attributes]);

  const calculateSkillValue = (skillName) => {
    const skill = SKILL_LIST.find((s) => s.name === skillName);
    if (!skill) return 0;

    const attributeModifier = calculateModifier(
      attributes[skill.attributeModifier]
    );
    const points = skillPoints[skillName] || 0;
    return attributeModifier + points;
  };

  const allocatePoints = (skillName, value) => {
    const currentPoints = skillPoints[skillName] || 0;

    const totalPoints = calculateTotalPoints(skillPoints);
    if (totalPoints + value <= totalAvailablePoints) {
      const newPoints = Math.max(currentPoints + value, 0);

      setSkillPoints((prevPoints) => ({
        ...prevPoints,
        [skillName]: newPoints,
      }));
    } else {
      window.alert(
        "You need more skill points!Upgrate Intelligence to get more."
      );
    }
  };

  return (
    <div>
      <h4>Total skill poins available:{totalAvailablePoints}</h4>
      {SKILL_LIST.map((skill) => (
        <div key={skill.name}>
          <span>
            {skill.name}:{""}{" "}
          </span>
          <span>{skillPoints[skill.name] || 0}</span>

          <span>
            (modifier:{""} {skill.attributeModifier}):{" "}
            {calculateModifier(attributes[skill.attributeModifier])}
          </span>
          <button onClick={() => allocatePoints(skill.name, 1)}>+</button>
          <button onClick={() => allocatePoints(skill.name, -1)}>-</button>
          <span>total: {calculateSkillValue(skill.name)}</span>
        </div>
      ))}
    </div>
  );
}

export default SkillList;
