import React from 'react';
import Account from './components/Account';
import Counter from './components/Counter';
import Receipts from './components/Receipts';



 const App = () => {
   
  return (
    <div>
      <Counter />
      <Receipts />
      <Account />
    </div>
  );
};

export default App;
