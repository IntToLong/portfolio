import menuIcon from "../../assets/menu.svg";

export default function BurgerMenu({ onclick }: { onclick: () => void }) {
  return (
    <button onClick={onclick} className="md:hidden">
      <img src={menuIcon} alt="open menu icon" />
    </button>
  );
}
