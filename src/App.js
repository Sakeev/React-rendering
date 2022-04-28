import React from 'react';
import MainRouter from './Routes/MainRouter';
import ContactsContextProvider from './context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar/Header';




 const App = () => {
   
  return (
      <div>
      <ContactsContextProvider> 
        <Header />
        <MainRouter />
      </ContactsContextProvider>
     
    </div>
  );
};

export default App;
