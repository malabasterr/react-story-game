import { useState } from "react";
import Neon from "../Neon";
import { Link } from "react-router-dom";

const NameInput = ({ onSaveName }) => {

  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSaveClick = () => {
    onSaveName(name);
  };

  //Opacity functions

  const [style, setStyle] = useState("Opaque");
  const ChangeOpacity = () => {
      setStyle("Transparent");
  };

  const [reverse, setReverse] = useState("Transparent");
  const ReverseOpacity = () => {
      setReverse("Opaque");
  };

  return (
    <>
    <div className={style}>
    <p className="IntroText">
              It is a dark and stormy night. You are wandering along the streets of an old market town, looking for a place to shelter from the rain...
            </p>
      <div className="WhatNameBox">
            <h5 className="WhatName">
              What is your name? 
            </h5>
        </div>
      <div className="EnterBox">
      <input type="text" id="NameBox" value={name} onChange={handleNameChange} placeholder="Enter name"/>
      <button className="btn" onClick={() => {handleSaveClick(); ChangeOpacity(); ReverseOpacity();}}>Confirm</button>
      </div>
    </div>
    <div id="NeonBox" className={reverse}>
      <p className="NeonText">
              You spot a neon sign above a doroway, glowing gently in the dark...
            </p>
            <Neon name={name}/>
            </div>
            <div className="LinkBox">
            <Link id="Building1Link" className={reverse} to="/Building1">Head inside</Link>
            </div>
    </>
  );
};

export default NameInput;