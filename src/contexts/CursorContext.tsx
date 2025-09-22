import { createContext } from "react";

type CursorContextType = {
  size: number;
  changeSize: (value: number) => void;
  color: string;
  changeColor: (value: string) => void;
};

const CursorContext = createContext<CursorContextType>({
  size: 40,
  changeSize: () => {},
  color: "primary-white",
  changeColor: () => {}
});

export default CursorContext;
