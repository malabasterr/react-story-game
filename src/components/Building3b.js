import React from "react";
import Timer from "./Timer";
import { Link } from "react-router-dom";

function Building3b() {

return (
<div className="build3b">
<p id="PotionsIntro">You wave your wand in a circle and wait to see if anything happens...</p>
    <div className="WandMove-container">
        <div className="WandMove"></div>
    </div>
    <div className="Ending">
        <Timer/>
    </div>
    <p className="ImageRights">
          <a href="https://www.freepik.com/free-vector/alchemist-wizard-room-with-books-potions_36675779.htm#page=9&query=shop&position=47&from_view=author">Image by upklyak</a> on Freepik
        </p>
        <a className="MaddyLink" href="https://github.com/malabasterr" target="_blank" rel="noopener noreferrer">
          Made with love by Maddy
        </a>
        <Link id="StartOver" to="/">Start over</Link>
</div>
);
};

export default Building3b;