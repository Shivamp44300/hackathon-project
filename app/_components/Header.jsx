import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="bg-[#15374b] text-white">
      <div className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
