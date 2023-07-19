import { useState } from 'react';
import { Link } from "react-router-dom";

function Form() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input1 === "4" && input2 === "3" && input3 === "1") {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="FlexForm">
      <label className="Input">
        How many frogs legs?
      </label>
      <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
      <label className="Input">
        How many rats tails
      </label>
        <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
      <label className="Input">
        How many leaves from an old oak tree?
      </label>
        <input type="text" value={input3} onChange={(e) => setInput3(e.target.value)} />
      <button id="AddIngredients" type="submit">Add ingredients</button>
      </div>
      <div className="Placement">
      {isCorrect === false && <div className="Outcomes">The cauldron continues bubbling like crazy... perhaps you should try again</div>}
      {isCorrect === true && <div className="Outcomes"><p>After a few seconds the cauldron seems to calm down a little. But it is not quite calm yet! Perhaps you need to use your wand...</p><Link id="Building3bLink" to="/Building3b">Use Wand</Link></div>}
      </div>
    </form>
  );
}

export default Form;
