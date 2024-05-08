import "./App.css";
import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { GoodsList } from "./Components/GoodsList";
import { Spinner } from "./Components/Spinner";
import { Shopping } from "./Components/Shopping";
function App() {
  return (
    <>
      <Header />
      <GoodsList />
      <Shopping />
    </>
  );
}

export default App;
