import Logo from './Logo';
import NavLinks from './NavLinks';
import AuthButtons from './AuthButtons';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/providers", label: "Providers" },
  ];

  return (
    <nav className="bg-[#00246B] text-white h-20 px-4 shadow-md">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks links={links} />
          <AuthButtons />
        </div>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;