import { useContext } from 'react';
import { LoginContext } from '../../App';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const AuthButtons = () => {
  const { isLoggedIn, userType } = useContext(LoginContext);
  const navigate = useNavigate();

  const goToProfile = () => {
    if (userType === "user") {
      navigate('/user-dashboard');
    } else if (userType === "provider") {
      navigate('/provider-dashboard');
    }
  };

  if (isLoggedIn) {
    return (
      <button
        onClick={goToProfile}
        className="font-poppins text-white bg-[#2c8fff] px-4 py-3 rounded-full text-base leading-none hover:bg-emerald-500 hover:text-white transition-all shadow-md hover:shadow-lg cursor-pointer flex gap-2"
      >
        <FaUserCircle /> Profile
      </button>
    );
  }

  return (
    <>
      <NavLink
        to="/login"
        className="font-poppins text-white bg-[#10B981] px-4 py-2 rounded-md text-base leading-none hover:bg-green-500 hover:text-white transition-all shadow-md hover:shadow-lg"
      >
        Login
      </NavLink>
      <NavLink
        to="/signup"
        className="font-poppins text-white bg-[#10B981] px-4 py-2 rounded-md text-base leading-none hover:bg-green-500 hover:text-white transition-all shadow-md hover:shadow-lg"
      >
        Sign Up
      </NavLink>
    </>
  );
};

export default AuthButtons;