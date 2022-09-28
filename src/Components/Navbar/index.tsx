import React, { useState } from 'react';
import './navbar.css';
import NavbarButton from './NavbarButton';
import Logo from './Logo';
import { AiOutlineUser } from 'react-icons/ai';
import TextInput from '../../ui-components/TextInput';
import Button from '../../ui-components/Button';
import { observer } from 'mobx-react-lite';
import Store from '../../Store/store';

const Navbar = (): JSX.Element => {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  const handleClick = (): void => {
    Store.addItem(value);
    setValue('');
  };
  return (
    <div className="navbar">
      <Logo />
      <div className="navbar-list">
        <NavbarButton text="Lorem" />
        <NavbarButton text="Ipsum" />
        <NavbarButton text="Dolor" />
        <NavbarButton text="Sit" />
        <NavbarButton text="Amet" />
      </div>
      <div className="navbar-text-input-container">
        <TextInput onChange={handleChange} value={value} />
        <Button
          onClick={handleClick}
          style={{
            height: '1.5rem',
          }}
        >
          Add
        </Button>
      </div>
      <div className="navbar-user-container">
        <AiOutlineUser className="navbar-user-icon" />
      </div>
    </div>
  );
};

export default observer(Navbar);
