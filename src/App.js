import React from "react";
import "./App.css";
import Header from "./components/Header/index";
import Sidebar from "./components/Sidebar/index";
import Feed from "./components/Feed/index";
import Widgets from "./components/Widgets/index";
import Login from "./components/Login/index";
import { useStateValue } from "./Context_API/stateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
