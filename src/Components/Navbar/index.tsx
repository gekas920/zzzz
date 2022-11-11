import React, {useCallback, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import './navbar.css';
// @ts-expect-error
import logo from '../../images/adidas-4-logo.png'
import Store from "../../Store/store";

const getRandomInt = (max:number):number => {
    return Math.floor(Math.random() * max);
}

const Navbar = (): JSX.Element => {
    const [value,setValue] = useState('');
    const onKeyDown = useCallback((event: KeyboardEvent):void=>{
        if(event.key === 'Enter'){
            const input = document.getElementById('text-input') as HTMLInputElement;
            const type = getRandomInt(2) ? 'cats' : 'dogs';
            if(!Store[type].find(item => item === input.value) && input.value){
                Store.addItem(input.value,type);
                input.value = '';
            }
        }
    },[value])
    useEffect(() => {
        const input = document.getElementById('text-input');
        input?.addEventListener("keydown", onKeyDown)
        return ()=>
            input?.removeEventListener("keydown",onKeyDown);
    },[])
  return (
    <div className="navbar">
        <div className='navbar-top'>
            <span className='navbar-top__location'>Воронеж</span>
            <div className='navbar-top__list'>
                <span>Магазины</span>
                <span>Покупателям</span>
                <span>Юридическим лицам</span>
                <span>Клуб ADIDAS</span>
            </div>
            <span className='navbar-top__phone'>8(800)555-35-35</span>
        </div>
        <div className='navbar_bottom'>
            <img src={logo} alt='logo' className='navbar_bottom__logo'/>
            <input id='text-input' type='search' className='navbar_bottom__input'
                   placeholder='Поиск по сайту'
                   onChange={(e)=>setValue(e.target.value)} />
            <div className='navbar_bottom__list'>
                <Link to='/cats'>Кошки</Link>
                <Link to='/dogs'>Собаки</Link>
                <Link to='/'>Статика</Link>
            </div>
        </div>
    </div>
  );
};

export default observer(Navbar);
