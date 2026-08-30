import menuIcon from "../../assets/menu.svg";

type Props = {
  onclick: () => void;
};

export default function BurgerMenu({ onclick }: Props) {
  return (
    <button onClick={onclick} className="md:hidden">
      <img src={menuIcon} alt="open menu icon" />
    </button>
  );
}
