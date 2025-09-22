import { ReactNode } from "react";

export default function SocialCard({
  path,
  children
}: {
  path: string;
  children?: ReactNode | undefined;
}) {
  return (
    <a
      href={path}
      className="flex-center group bg-primary-white hover:bg-primary-black h-12 w-12 cursor-pointer rounded border-2 p-1 transition-all duration-300 hover:scale-105 active:scale-90 md:h-auto md:w-auto md:p-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
