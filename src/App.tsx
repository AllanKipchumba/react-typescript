import React, { useState } from "react";
import "./app.scss";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

export const App = () => {
  const [people, setPeople] = useState<IState["people"]>([]);

  return (
    <div>
      <h1>People invited to my party</h1>
    </div>
  );
};
