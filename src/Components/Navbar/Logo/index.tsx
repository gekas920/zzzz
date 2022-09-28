import React from 'react';
// @ts-expect-error
import logo from '../../../images/SVG_Logo.svg.png';

const Logo = (): JSX.Element => {
  return <img src={logo} alt="logo" />;
};

export default Logo;
