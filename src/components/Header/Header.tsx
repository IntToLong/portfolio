import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";
import NavBar from "./NavBar";
import ResumeLink from "./ResumeLink";
import crossIcon from "../../assets/cross.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header
      className={`bg-primary-white z-10 flex justify-between px-5 py-6 md:items-center md:px-20 lg:px-[112px] ${
        isMenuOpen ? "h-screen flex-col justify-start gap-8 pl-20" : "h-auto"
      } transition-all duration-300`}
    >
      {isMenuOpen ? (
        <button
          className="absolute right-4 h-[45px] cursor-pointer flex-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={crossIcon} alt="close menu icon" className="w-7" />
        </button>
      ) : (
        <>
          <Logo color="black" />
          <BurgerMenu onclick={() => setIsMenuOpen(true)} />
        </>
      )}
      <NavBar isMenuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
      <ResumeLink isMenuOpen={isMenuOpen} />
    </header>
  );
}
