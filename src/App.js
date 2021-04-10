import React from "react";
import Site from "./Containers/Site/Site";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Site />
      </BrowserRouter>
    </div>
  );
}

export default App;
