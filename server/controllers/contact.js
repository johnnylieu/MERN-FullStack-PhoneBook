import contact from '../models/contact.js';

export const getContacts = async (req, res) => {
    try {
        const allContacts = await contact.find();
        res.status(200).json(allContacts);
    } catch (error) {
        console.log(error.message);
    }
};

export const createContact = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error.message);   
    }
};