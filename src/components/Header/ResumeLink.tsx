export default function ResumeLink({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <a
      href="https://inttolong.github.io/Resume/"
      target="_blank"
      rel="noopener noreferrer"
      className={`group text-primary-white bg-primary-black hover:text-primary-black hover:bg-primary-white hover:shadow-bottom md:flex-center h-14 w-[153px] gap-2 rounded px-4 py-3 transition-all active:translate-y-1 md:border-2 ${isMenuOpen ? "flex-center" : "hidden"}`}
    >
      <span className="text-[16px]/[20px] font-semibold lg:text-xl/[120%]">
        Resume
      </span>{" "}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8335 9.16671L17.6668 2.33337"
          className="group-hover:stroke-black group-active:stroke-black"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3335 5.66663V1.66663H14.3335"
          className="group-hover:stroke-black group-active:stroke-black"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333"
          className="group-hover:stroke-black group-active:stroke-black"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
