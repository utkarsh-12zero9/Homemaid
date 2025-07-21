import { useState, useContext, useEffect } from 'react';
import { LoginContext } from '../../App';
import NavLinks from './NavLinks';
import AuthButtons from './AuthButtons';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    if (!isLoggedIn) {
      setIsOpen(false);
    }
  }, [isLoggedIn]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/providers", label: "Providers" },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none p-1 hover:scale-110 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#00246B] shadow-md z-10">
          <div className="flex flex-col space-y-4 p-4">
            <NavLinks links={links} onClick={() => setIsOpen(false)} />
            <AuthButtons />
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;