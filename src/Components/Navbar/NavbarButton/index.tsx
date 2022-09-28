import React from 'react';
import './navbar-button.css';
interface NavbarButtonProps {
  text: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ text }): JSX.Element => {
  return <button className="navbar-button">{text}</button>;
};

export default NavbarButton;
