import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from '../components/Login/Account';
import Counter from '../components/Counter';
import Home from '../components/Home';
import Receipts from '../components/Receipts';
import ContactList from '../components/ContactList/ContactList';
import EditContact from '../components/ContactList/EditContact';
import AddContact from '../components/ContactList/AddContact';

const MainRouter = () => {
    return (
        <div className='main-routes'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/counter' element={<Counter/>}/>
                <Route path='/receipts' element={<Receipts/>}/>
                <Route path='/contacts' element={<ContactList/>}/>
                <Route path='/login' element={<Account/>}/>
                <Route path='/edit' element={<EditContact />}/>
                <Route path='/add' element={<AddContact />}/>
                <Route/>
            </Routes>
        </div>
    );
};

export default MainRouter;