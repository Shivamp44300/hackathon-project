import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 max-w-screen-xl mx-auto ">
      <Logo />
      <Navigation />
    </div>
  );
}

export default Header;
