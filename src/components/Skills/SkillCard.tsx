import { ReactNode } from "react";

export default function SkillCard({
  title,
  children
}: {
  title: string;
  children: ReactNode | undefined;
}) {
  return (
    <li className="group bg-primary-white hover:bg-primary-black flex h-40 w-40 flex-col items-center justify-center rounded border-2 p-6 sm:h-[186px] sm:w-[186px] sm:p-10 transition-all duration-300">
      {children}
      <h3 className="group-hover:text-primary-white mt-5 text-xl/[120%] font-bold tracking-tight">
        {title}
      </h3>
    </li>
  );
}
