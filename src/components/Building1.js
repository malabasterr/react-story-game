import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Building1() {

  const [style, setStyle] = useState("Opaque");
  const ChangeOpacity = () => {
      setStyle("Transparent");
  };

  const [reverse, setReverse] = useState("Transparent");
  const ReverseOpacity = () => {
      setReverse("Opaque");
  };

  const [chair, setChair] = useState("Transparent");
  const Chair = () => {
      setChair("Opaque");
  };

  const [lamp, setLamp] = useState("Transparent");
  const Lamp = () => {
      setLamp("Opaque");
  };

  const [mirror, setMirror] = useState("Transparent");
  const Mirror = () => {
      setMirror("Opaque");
  };

  const [wadrobe, setWadrobe] = useState("Transparent");
  const Wadrobe = () => {
      setWadrobe("Opaque");
  };

  const [guitar, setGuitar] = useState("Transparent");
  const Guitar = () => {
      setGuitar("Opaque");
  };

  const [boxes, setBoxes] = useState("Transparent");
  const Boxes = () => {
      setBoxes("Opaque");
  };

  const [bottles, setBottles] = useState("Transparent");
  const Bottles = () => {
      setBottles("Opaque");
  };

  const [light, setLight] = useState("build1-dark");
    const Light = () => {
      setLight("build1-light");
  };

    const [popup, setPopup] = useState([]);
    
    function addPopup() {
      setPopup([...popup, <div className="Popup" onClick={() => {Light(); Vanish(); Final();}}></div>]);
    };

    const [wand, setWand] = useState("Opaque");
    const Wand = () => {
      setWand("Transparent");
  };

    const [vanish, setVanish] = useState("Opaque");
    const Vanish = () => {
      setVanish("Transparent");
  };

    const [final, setFinal] = useState("FinalHidden");
    const Final = () => {
        setFinal("Final");
    };

  return (
      <div className={light}>
        <div className={style}>
          <p className="bd1Text" onClick={() => {ChangeOpacity(); ReverseOpacity();}}>You step into the room and close the door behind you, glad to be out of the rain. You seem to be in some sort of storage unit. You start rooting around to see if you can find anything interesting, though it is quite dark and difficult to move around........(Click here to move on)</p>
        </div>
        <div className={wand}>
          <div className={reverse}>
            <div className="LookBox">
              <p className="Look">Have a look around and see if you can find anything interesting. Click on an object to learn more</p>
            </div>
          </div>
          <div className="SecretBox-Chair" onClick={() => {Chair();}}></div>
          <div className={chair}>
            <p className="ChairText">This chair is very old and dusty. Wiping it makes you sneeze. It could be a fun upholstery project, but apart from that it is not very interesting.</p>
          </div>
          <div className="SecretBox-Lamp" onClick={() => {Lamp();}}></div>
          <div className={lamp}>
            <p className="LampText">There is a lamp balanced on top of some books. The books mostly seem to be old history books. They look pretty dull to you.</p>
          </div>
          <div className="SecretBox-Mirror" onClick={() => {Mirror();}}></div>
          <div className={mirror}>
            <p className="MirrorText">A mirror sits nestled amomngst some boxes which contain various small items. The sort of thing you would find in a chairty shop, disappointingly.</p>
          </div>
          <div className="SecretBox-Wadrobe" onClick={() => {Wadrobe();}}></div>
          <div className={wadrobe}>
            <p className="WadrobeText">You pull open one of the wadrobe doors and it almost falls off it's hinges! Sadly there is no Narnia inside.</p>
          </div>
          <div className="SecretBox-Guitar" onClick={() => {Guitar();}}></div>
          <div className={guitar}>
            <p className="GuitarText">Leaning on the wadrobe is an old banjo. And tucked neatly behind the banjo is a small, thin box..</p>
            <div>
              <button className="OpenButton" onClick={() => {addPopup(); Wand();}}>Open the box</button>
            </div>
          </div>
          <div className="SecretBox-Boxes" onClick={() => {Boxes();}}></div>
          <div className={boxes}>
            <p className="BoxesText">These old crates look very intriguing... but sadly you can't seem to get them open. There is a small ship in a bottle carefully balanced on top which looks like it was put together years ago.</p>
          </div>
          <div className="SecretBox-Bottles" onClick={() => {Bottles();}}></div>
          <div className={bottles}>
            <p className="BottlesText">You would quite like a warming drink right now, but sadly all of these bottles are empty</p>
          </div>
        </div>
        <div className={vanish}>
        {popup}
        </div>
        <div className={final}>
          <p>Wow! This wand really is magic... perhaps you ought to read more about it</p>
          <Link id="Building2Link" to="/Building2">Go to the library</Link>
        </div>
        <p className="ImageRights">
          <a href="https://www.freepik.com/free-vector/house-attic-with-old-broken-furniture-dust-web_6993965.htm#page=5&query=shop&position=38&from_view=author">Image by upklyak</a> on Freepik
        </p>
        <a className="MaddyLink" href="https://github.com/malabasterr" target="_blank" rel="noopener noreferrer">
          Made with love by Maddy
        </a>
      </div>
  );
};

export default Building1;