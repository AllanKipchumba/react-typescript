import React, { useState } from "react";
import "./app.scss";

export const App = () => {
  const [number, setNumber] = useState(5);

  const changeNumber = () => setNumber(10);
  return (
    <div>
      <h1>People invited to my party</h1>
    </div>
  );
};
