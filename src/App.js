import { useState, useEffect } from "react";
import AttributeList from "./components/attributes/AttributeList";
import ClassList from "./components/classes/ClassList";
import SkillList from "./components/skills/SkillList";
import "./App.css";

const API_BASE_URL = "https://recruiting.verylongdomaintotestwith.ca/api";

function App() {
  const [attributes, setAttributes] = useState({
    Strength: 10,
    Dexterity: 10,
    Constitution: 10,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 10,
  });

  const updateAttributes = (newAttributes) => {
    setAttributes(newAttributes);
  };

  const saveCharacterData = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/{maryamalsadat-tabatabaei}/character`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(attributes),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save character data");
      }
    } catch (error) {
      console.error("Error saving character data:", error);
    }
  };

  const retrieveCharacterData = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/{maryamalsadat-tabatabaei}/character`
      );

      if (response.ok) {
        const data = await response.json();
        updateAttributes(data.body);
      } else {
        throw new Error("Failed to retrieve character data");
      }
    } catch (error) {
      console.error("Error retrieving character data:", error);
    }
  };

  useEffect(() => {
    retrieveCharacterData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <h2>Character</h2>
      <div>
        <button onClick={saveCharacterData}>Save character</button>
      </div>
      <section className="App-section">
        <div>
          <h1>Attributes</h1>
          <AttributeList
            attributes={attributes}
            onUpdateAttributes={updateAttributes}
          />
        </div>
        <div>
          <h1>Classes</h1>
          <ClassList attributes={attributes} />
        </div>
        <div>
          <h1>Skills</h1>
          <SkillList attributes={attributes} />
        </div>
      </section>
    </div>
  );
}

export default App;
