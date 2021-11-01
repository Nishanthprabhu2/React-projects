import React from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
  return (
    <div>
      <p>Component A</p>
        <ComponentB />
    </div>
  );
}

export default ComponentA;
