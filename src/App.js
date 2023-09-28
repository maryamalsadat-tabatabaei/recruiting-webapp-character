import { useState } from "react";
import AttributeList from "./components/attributes/AttributeList";
import "./App.css";

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <h2>Character</h2>
      <section className="App-section">
        <div>
          <h1>Attributes</h1>
          <AttributeList
            attributes={attributes}
            onUpdateAttributes={updateAttributes}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
