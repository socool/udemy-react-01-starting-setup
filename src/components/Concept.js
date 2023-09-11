import React from "react";
function Concept(props) {
  const concepts = props.concepts;
  return (
    <ul id="concepts">
      {concepts.map((concept, index) => (
        <li className="concept" key={index}>
          <img src={concept.image} alt={concept.title} />
          <h2>{concept.title}</h2>
          <p>{concept.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default Concept;
