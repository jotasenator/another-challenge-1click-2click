import { useContext, useEffect, useState } from "react";
import { AnimalContext } from "../context/animalContext/animalContext";

export const useAnimals = () => {
  const { setAnimal } = useContext(AnimalContext);

  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    let singleClickTimer: ReturnType<typeof setTimeout>;
    if (clicks === 1) {
      singleClickTimer = setTimeout(() => {
        console.log(1);
        setAnimal("pussycat");
        setClicks(0);
      }, 250);
    } else if (clicks === 2) {
      console.log(2);
      setAnimal("doggy");
      setClicks(0);
    }
    return () => clearInterval(singleClickTimer);
    
  }, [clicks]);

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return {
    handleClick
  };
};
