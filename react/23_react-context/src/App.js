import React from "react";

import Display from "./Display";
import Form from "./Form";

import Dummy from "./Dummy";

import { CounterContextProvider } from "./contexts/counterContext";

const App = () => {
  return (
    <>
      <CounterContextProvider>
        <Form />

        <Display />
      </CounterContextProvider>
    </>
  );
};

export default App;
