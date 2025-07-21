import { NavLink } from 'react-router-dom';
import { useMemo } from 'react';

const NavLinks = ({ links, onClick }) => {
    const getNavLinkStyle = ({ isActive }) => ({
        color: isActive ? "#10B981" : undefined,
        fontWeight: isActive ? "bold" : undefined
    });

    const renderedLinks = useMemo(() =>
        links.map((link) => (
            <NavLink
                key={link.to}
                to={link.to}
                style={getNavLinkStyle}
                className="font-poppins text-base leading-none hover:text-[#10B981] transition-colors"
                onClick={onClick}
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            >
                {link.label}
            </NavLink>
        )),
        [links, onClick]
    );

    return <>{renderedLinks}</>;
};

export default NavLinks;