import React, { useContext, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { contactsContext } from '../../context/Context';

const AddContact = () => {
    const {addContact} = useContext(contactsContext);
    const [person, setPerson] = useState({name: '', number: '', status: false})

    const handleInput = (e) => {
        let obj = {
            ...person, 
            [e.target.name]: e.target.value,
        }
        setPerson(obj)
    }


    return (
        <InputGroup className='w-50 mt-5'>
            <FormControl value={person.name} name='name' placeholder='Enter name' onChange={handleInput}/>
            <FormControl value={person.number} name='number' placeholder='Enter number' onChange={handleInput}/>
            <Button onClick={()=>
            {addContact(person)
            setPerson({name: '', number: ''})
            }} 
            className='mx-2' variant='warning'>Add</Button>
        </InputGroup>
    );
};

export default AddContact;