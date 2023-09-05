import { useAnimals } from "../hooks/useAnimals";

export const Button = () => {
  const { handleClick } = useAnimals();
  return <button onClick={handleClick}>1Cat/2Dog</button>;
};
