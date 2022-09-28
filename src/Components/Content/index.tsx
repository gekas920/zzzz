import React from 'react';
import { observer } from 'mobx-react-lite';
import Store from '../../Store/store';

const Content = (): JSX.Element => {
  return (
    <div>
      {Store.items.map((item) => (
        <>
          {item}
          <br />
        </>
      ))}
    </div>
  );
};

export default observer(Content);
