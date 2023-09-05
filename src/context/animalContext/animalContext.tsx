import { createContext, FC, ReactNode, useState } from "react";

type Animal = "pussycat" | "doggy" | "";

type AnimalContextValue = {
  animal: Animal;
  setAnimal: (animal: Animal) => void;
};

export const AnimalContext = createContext<AnimalContextValue>({
  animal: "",
  setAnimal: () => {}
});

type Props = {
  children: ReactNode;
};

export const AnimalProvider: FC<Props> = ({ children }) => {
  const [animal, setAnimal] = useState<Animal>("");
  return (
    <AnimalContext.Provider value={{ animal, setAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
};
