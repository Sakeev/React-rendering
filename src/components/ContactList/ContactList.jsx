import React, { useContext, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { contactsContext } from '../../context/Context';
import { FiGithub } from "react-icons/fi";
import { Link } from 'react-router-dom';
import AddContact from './AddContact';





const ContactList = () => {
    const {contacts, getContacts, deleteContact, changeStatus, editContact} = useContext(contactsContext);
    
    useEffect( ()=>{
        getContacts();
    }, [])




    return (
        <div className='d-flex flex-column align-items-center'>
            <AddContact />
        <div className='d-flex flex-wrap justify-content-evenly mt-5'>
            {contacts.map(item=>(
                <Card border="warning" style={{ width: '18rem' }} className="m-3" key={item.id}>
                <Card.Body>
                <Card.Title>name: {item.name}     <FiGithub onClick={()=>changeStatus(item.id)} className='mx-3' style={ item.status ? {color: 'gold', fill: 'black'} : ''} /> </Card.Title>
                  <Card.Subtitle>
                      <Card.Title>{item.number}</Card.Title>
                      <Link to="/edit">
                      <Button variant="warning" onClick={() => editContact(item.id)}>
                Edit
              </Button>
                      </Link>
                      <Button className='mx-3' variant="danger" onClick={()=>deleteContact(item.id)}>Delete</Button>
                      </Card.Subtitle>
                </Card.Body>
              </Card>
            ))}
            </div>
        </div>
    );
};

export default ContactList;