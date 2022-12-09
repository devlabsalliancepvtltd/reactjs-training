import React from "react";

import ChildComponent from "./ChildComponent";

function App() {
  const textBoxRef = React.createRef();

  const setFocus = () => {
    textBoxRef.current.focus();
  };

  return (
    <div>
      <div>
        <button onClick={setFocus}>Set Focus</button>
      </div>

      <div>&nbsp;</div>

      <ChildComponent ref={textBoxRef} />
    </div>
  );
}

export default App;
