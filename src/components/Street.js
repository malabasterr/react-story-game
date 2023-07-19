import React, { useState } from 'react';
import ThunderSound from './Audio';
import NameInput from './NameComponents/nameInput';
import MadRain from './RainComponents/MadRain';

function Street() {

  const [name, setName] = useState("");

  const handleSaveName = (name) => {
    setName(name);
  };

return (
  <div className="street">
    <div className="StreetBackground">
      <div className="RainWrapper">
      <MadRain />
      </div>
      {/* <ThunderSound /> */}
      <NameInput onSaveName={handleSaveName}/>
      <a className="MaddyLink" href="https://github.com/malabasterr" target="_blank" rel="noopener noreferrer">
        Made with love by Maddy
      </a>
      <h5 className="ImageRights"><a href="https://www.freepik.com/free-vector/medieval-german-night-street-rainy_13924248.htm#query=fantasy%20street&position=39&from_view=keyword&track=ais">Image by upklyak</a> on Freepik
      </h5>
    </div>
  </div>
  )
};

export default Street;