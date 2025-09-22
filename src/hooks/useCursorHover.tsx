import { useContext } from "react";
import CursorContext from "../contexts/CursorContext";

export const useCursorHover = () => {
  const { changeSize, changeColor } = useContext(CursorContext);
  const handleMouseEnter = (size: number, color?: string) => {
    changeSize(size);
    if (color) {
      changeColor(color);
    }
  };
  const handleMouseLeave = (size: number, color?: string) => {
    changeSize(size);
    if (color) {
      changeColor(color);
    }
  };
  return { handleMouseEnter, handleMouseLeave };
};
