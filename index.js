import React from "react";
import { render } from "react-dom";
import TextInput from "./TextInput";

const App = () => (
  <div style={{ width: "100%" }}>
    <div>
      What year is it? <TextInput placeholder="2050" />
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
