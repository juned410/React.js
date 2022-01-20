import React, { useState } from "react";

const InputValue = () => {
    const[details, setDetails]=useState({});
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [message, setMessage] = useState("");
  return (
    <div>
     
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setDetails({...details, name: e.target.value})}
      />
      <input
        type="text"
        placeholder="Enter Age"
        onChange={(e) => setDetails({...details, age: e.target.value})}
      />
      <input
        type="text"
        placeholder="Enter Message"
        onChange={(e) => setDetails({...details, message: e.target.value})}
      />
      <br />
      <h2>Name: {details.name}</h2>
      <h2>Age: {details.age} </h2>
      <h2>Message: {details.message} </h2>
      <h2>Object:{JSON.stringify(details)} </h2>
    </div>
  );
};

export default InputValue;
