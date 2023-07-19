import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Building2() {

  const [paper, setPaper] = useState("Transparent");
  const Paper = () => {
      setPaper("Opaque");
  };

  const [hide, setHide] = useState("Opaque");
  const Hide = () => {
      setHide("Transparent");
  };

  const [exit, setExit] = useState("Transparent");
  const Exit = () => {
      setExit("Opaque");
  };

  const [black, setBlack] = useState("build2");
  const Black = () => {
      setBlack("Black");
  };

  return (
    <div className={black}>
        <div className={hide}>
      <p id="LibraryIntro">You head into the library- which you are surprised is open at such a late hour- and are confronted with shelves and shelves of books. After scouring the shelves for what seems like an age, you notice a book that looks very different from the rest...</p>
      <div id="BookBox" onClick={() => {Paper();}}></div>
      <div className={paper}>
          <div id="PaperBox"></div>
          <div id="ExitBtn" onClick={() => {Exit(); Hide(); Black();}}></div>
        </div>
      </div>
      <div className={exit} id="Page">
        <p>Suddenly the library goes dark. Something strange is going on... you can hear a sound from the room out at the back of the building</p>
        <Link id="Building3Link" to="/Building3">Go and investigate</Link>
      </div>
      <p className="ImageRights">
        <a href="https://www.freepik.com/free-vector/white-bookshelf-mockup-books-shelf-library_8548736.htm#page=3&query=shop&position=43&from_view=author">Image by upklyak</a> on Freepik
      </p>
      <a className="MaddyLink" href="https://github.com/malabasterr" target="_blank" rel="noopener noreferrer">
              Made with love by Maddy
            </a>
    </div>
  );
};

export default Building2;