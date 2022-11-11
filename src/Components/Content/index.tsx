import React from 'react';
import { observer } from 'mobx-react-lite';
import Store from '../../Store/store';
import './content.css'
import Item from "./Item/Item";


interface ContentProps{
  type:'cats'|'dogs'|'all',
}

const Content:React.FC<ContentProps> = ({type}): JSX.Element => {
  if(type === 'all'){
    return <div className='content'>
      <img src='https://footwearnews.com/wp-content/uploads/2022/07/GettyImages-1023658.jpg?w=700&h=437&crop=1' alt={'adidas'}/>
    </div>
  }
  return (
    <div className='content'>
      {Store[type].map((item) => (
            <Item text={item} key={item} type={type}/>
      ))}
    </div>
  );
};

export default observer(Content);
