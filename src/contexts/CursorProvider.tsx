import { PropsWithChildren, useState } from "react";
import CursorContext from "./CursorContext";

function CursorProvider({ children }: PropsWithChildren) {
  const [size, setSize] = useState(40);
  const [color, setColor] = useState("primary-white");

  const contextValue = {
    size,
    changeSize: (newValue: number) => {
      setSize(newValue);
    },
    color,
    changeColor: (newValue: string) => {
      setColor(newValue);
    }
  };

  return <CursorContext value={contextValue}>{children}</CursorContext>;
}

export default CursorProvider;
