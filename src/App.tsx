import React, { useState } from "react";
import "./app.scss";
import { AddToList } from "./components/AddToList";
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
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      url: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/09/22/16638070009361.jpg",
      note: "Allergic to staying in one team",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList />
    </div>
  );
};
