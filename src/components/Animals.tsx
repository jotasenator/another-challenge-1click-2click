import { FC } from "react";

type Props = {
  fileName: string;
  alt: string;
};

export const Animals: FC<Props> = ({ fileName, alt }) => {
  return (
    <>
      <img src={`images/${fileName}.jpg`} alt={alt} />
    </>
  );
};
