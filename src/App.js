import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="posts">
        <Main />
      </main>
      <Form />
    </div>
  );
}

export default App;
