import { useCursorHover } from "../../hooks/useCursorHover";

export default function Input({
  type,
  placeholder,
  name,
  required
}: {
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
}) {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
      className="border-primary-black h-14 w-full rounded border-2 px-6 py-4 text-base/[125%] tracking-tight text-zinc-400 placeholder:text-zinc-300"
      onMouseEnter={() => handleMouseEnter(30, "primary-black")}
      onMouseLeave={() => handleMouseLeave(30, "primary-white")}
    />
  );
}
