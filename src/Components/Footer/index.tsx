import React from 'react';
import './footer.css';
const Footer = (): JSX.Element => {
  return <div className="footer">
    <div className='footer-column'>
      <span className='footer-column__header'>Компания</span>
      <span>О компании</span>
      <span>Новости</span>
      <span>Партнерам</span>
      <span>Вакансии</span>
      <span>Политика</span>
    </div>
    <div className='footer-column'>
      <span className='footer-column__header'>Покупателям</span>
      <span>Как оформить заказ</span>
      <span>Способы оплаты</span>
      <span>Кредиты</span>
      <span>Доставка</span>
      <span>Статус заказа</span>
    </div>
    <div className='footer-column'>
      <span className='footer-column__header'>Adidas</span>
      <span>Nike</span>
      <span>Reebok</span>
      <span>Fila</span>
      <span>Abibas</span>
      <span>EEEEEE</span>
    </div>
    <div className='footer-column'>
      <span className='footer-column__header'>Text</span>
      <span>EDU</span>
      <span>VSU</span>
      <span>DOT</span>
      <span>RU</span>
      <span>MOODLE</span>
    </div>
    <div className='footer-column'>
      <span className='footer-column__header'>Компания</span>
      <span>11234124</span>
      <span>124124214</span>
      <span>П124124</span>
      <span>124124124</span>
      <span>124124214124</span>
    </div>
  </div>;
};

export default Footer;
