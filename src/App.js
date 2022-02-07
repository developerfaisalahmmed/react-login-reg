import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import PageRouter from "./router/PageRouter";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <PageRouter />
        </BrowserRouter>
    </div>
  );
}

export default App;
