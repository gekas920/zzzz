import React from 'react';
import { observer } from 'mobx-react-lite';
import Store from '../../Store/store';
import './content.css'
import Item from "./Item/Item";

const Content = (): JSX.Element => {
  return (
    <div className='content'>
      {Store.items.map((item) => (
            <Item text={item} key={item}/>
      ))}
    </div>
  );
};

export default observer(Content);
