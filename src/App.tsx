import React, { useState } from "react";
import "./app.scss";
import { List } from "./components/List";

//defining types for state
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
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
    </div>
  );
};
