import React, { useState, useRef } from "react";
import "./App.css";
import List from "./components/List";
import { Sub } from "./types";
import Form from "./components/Form";

const INITIAL_ARR = [
  {
    nick: "ds",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=ds",
    description: "doe",
  },
  {
    nick: "john",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=john",
    description: "doe",
  },
]

const App: React.FC = () => {
  const [subs, setSubs] = useState<Array<Sub>>(INITIAL_ARR);
  const divRev = useRef<HTMLDivElement>(null);

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }
  return (
    <div className="App" ref={divRev}>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
};

export default App;
