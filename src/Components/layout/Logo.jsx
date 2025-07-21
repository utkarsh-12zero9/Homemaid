import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/Logo_homemaid.png';

const Logo = () => {
  return (
    <NavLink
      to="/"
      style={({ isActive }) => ({
        color: isActive ? "#10B981" : undefined,
        fontWeight: isActive ? "bold" : undefined
      })}
      className="text-2xl font-bold font-poppins leading-none"
    >
      <img src={logo} alt="HomeMaid Logo" className="h-14 w-auto rounded-lg" />
    </NavLink>
  );
};

export default Logo;