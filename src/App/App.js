import React from "react";
import { TodoProvider } from "../TodoContext"
import { AppUI } from "./AppUI"
// import './App.css';

// const defaultItem = [
//   { text: "Chop onion", completed: false },
//   { text: "Take the React course", completed: false },
//   { text: "Drink Protein", completed: false },
// ]




function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
