import React from 'react';
import { observer } from 'mobx-react-lite';
import Store from '../../Store/store';
import './content.css'

const Content = (): JSX.Element => {
  return (
    <div>
      {Store.items.map((item) => (
        <div key={item} className='item'>
          {item}
          <br />
        </div>
      ))}
    </div>
  );
};

export default observer(Content);
