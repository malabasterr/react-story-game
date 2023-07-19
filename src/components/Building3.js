import React from "react";
import ToggleElement from "./Visibility";
import Form from "./Form";

function Building3() {

  return (
    <div className="build3">
      <p id="Potions">You enter what appears to be a room belonging to some kind of wizard. The floor is shaking and you notice a cauldron in the corner very nearly bubbling over. It looks like it might explode! You better add something to it, and fast...</p>
        <ToggleElement/>
        <Form id="Forms"/>
        <p className="ImageRights">
          <a href="https://www.freepik.com/free-vector/alchemist-wizard-room-with-books-potions_36675779.htm#page=9&query=shop&position=47&from_view=author">Image by upklyak</a> on Freepik
        </p>
        <a className="MaddyLink" href="https://github.com/malabasterr" target="_blank" rel="noopener noreferrer">
          Made with love by Maddy
        </a>
    </div>
  );
};

export default Building3;