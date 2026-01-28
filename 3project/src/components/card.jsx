import React from "react";

const Card = ({ name, obj, arr }) => {
  console.log("name:", name);
  console.log("object:", obj);
  console.log("array:", arr);

  return (
    <>
      <h3>Card</h3>
      <p>Name: {name}</p>

      <p>Object value: {obj.username}</p>

      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Card;
