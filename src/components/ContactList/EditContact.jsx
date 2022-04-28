import React, { useContext, useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { contactsContext } from '../../context/Context';

const EditContact = () => {
    const {contactToEdit, saveContact} = useContext(contactsContext);
    const [editContact, setEditContact] = useState(contactToEdit);

    const navigate = useNavigate();
    const goBack = () => navigate(-1)

    useEffect(() => {

    setEditContact(contactToEdit)
    }, [contactToEdit])
    
    const handleInp = (e) => {
        let obj = {
            ...editContact,
            [e.target.name]: e.target.value
        }
        setEditContact(obj)
    }


    return (
        <>
        {editContact ? (<div className='d-flex justify-content-center'>
        <InputGroup className='w-50 mt-5 d-flex justify-content-center'>
            <FormControl value={editContact.name}  name='name' placeholder='Enter name' onChange={handleInp}/>
            <FormControl value={editContact.number}  name='number' placeholder='Enter number' onChange={handleInp} />
            <Button onClick={()=>{
                saveContact(editContact);
                navigate('/contacts')
            }} >Save</Button>
                <Button variant='danger' onClick={goBack}>Back</Button>
        </InputGroup>
            </div>
        ) : (
            <div className='mt-5'>
                'Loading...'
            </div>
            )}
        </>
    );
};

export default EditContact;
