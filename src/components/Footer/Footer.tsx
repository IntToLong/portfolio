import Logo from "../Header/Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary-black text-primary-white flex items-center justify-between px-5 py-5 md:px-20 lg:px-[112px]">
      <Logo color="white" />
      <p className="flex items-center gap-2">
        <span className="text-lg">&#169;</span>{" "}
        <span>{year} Personal Portfolio</span>
      </p>
    </footer>
  );
}
