import React, { useState } from "react";

function Usestatehook() {
  const initialCount = 0;
  //usestate with primitive value.
  const [count, setCount] = useState(initialCount);

  //usestate with object.
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  //usestate with array
  const [items, setItems] = useState([]);

  //used for conditional rendering with logical && operator.
  const Fullname = name.firstName + name.lastName;

  const addItem = () => {
    setItems([
      ...items,
      {
        key: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <h2>Demo of useState hook</h2>
      <h1>{count}</h1>
      {/* use function inside setCount to update count based on previous count value */}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment </button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <hr />
      <h1>Demo of usestate hook with Object</h1>
      <form action="">
        Firstname:
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        Lastname:
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>firstname- {name.firstName}</h2>
        <h2>Lastname--{name.lastName}</h2>
        {/* conditional rendering */}
        {Fullname && <h2>Fullname = {Fullname} </h2>}
      </form>

      <hr />

      <h2>Demo of useState hook with array</h2>
      <button onClick={addItem}>Add random Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Usestatehook;
