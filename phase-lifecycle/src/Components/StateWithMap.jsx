import React, { useState } from "react";

const StateWithMap = () => {
  const [generate, setGenerate] = useState([]);
  const handleGenration = () => {
    setGenerate([
      ...generate,
      {
        id: generate.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <h1>useState Hook With Map</h1>
      <button onClick={handleGenration}>Generate</button>
      {generate.map((elem, id) => {
        return (
          <li key={id}>
            {" "}
            Number: {elem.value} ===> ID:{id}{" "}
          </li>
        );
      })}
    </div>
  );
};

export default StateWithMap;
