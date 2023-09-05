import "./styles.css";
import { Button } from "../src/components/Button";
import { Animals } from "../src/components/Animals";
import { AnimalContext } from "./context/animalContext/animalContext";
import { useContext } from "react";

export default function App() {
  const { animal } = useContext(AnimalContext);
  return (
    <div className="App">
      <h1>Amazing Interview Question 1</h1>
      <Button />
      <br />
      {animal ? <Animals alt={animal} fileName={animal} /> : null}
    </div>
  );
}
