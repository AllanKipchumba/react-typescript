import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

export const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    img: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    //name, age, image url fields should not be empty
    input.name &&
      input.age &&
      input.img &&
      setPeople([
        ...people,
        //+ before age converts age-string type to number type
        { name: input.name, age: +input.age, url: input.img, note: input.note },
      ]);

    //clear input fields
    setInput({
      name: "",
      age: "",
      img: "",
      note: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        name="img"
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        name="note"
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to list
      </button>
    </div>
  );
};
