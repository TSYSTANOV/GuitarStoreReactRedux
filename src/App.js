import "./App.css";
import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { GoodsList } from "./Components/GoodsList";
import { Spinner } from "./Components/Spinner";
import { Shopping } from "./Components/Shopping";
import { Error } from "./Components/Error";
function App() {
  return (
    <>
      <Header />
      <Spinner />
      <GoodsList />
      <Shopping />
      <Error/>
    </>
  );
}

export default App;
