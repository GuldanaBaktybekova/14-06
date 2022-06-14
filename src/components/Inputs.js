import { useState } from "react";

function Inputs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function onFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function onLastNameChange(event) {
    setLastName(event.target.value);
  }
  function onClick() {
    alert(`${firstName} ${lastName}`);
  }

  return (
    <div className="Inputs">
      <div>
        <label>
          First name:
          <input type="text" value={firstName} onChange={onFirstNameChange} />
        </label>
        <label>
          Last name:
          <input type="text" value={lastName} onChange={onLastNameChange} />
        </label>
      </div>

      <button onClick={onClick}>OK</button>
    </div>
  );
}

export default Inputs;
