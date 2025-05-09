import React from "react";
import Header from "./Header";
import MainMessage from "./MainMessage";
import "../styles/reset.css"
import "../styles/App.css";

function App() {
  return (
    <div className="app-container">
      <Header/>
      <MainMessage/>
    </div>
  );
}

export default App;
