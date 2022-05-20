import contact from '../models/contact.js';

export const getContacts = async (req, res) => {
    try {
        const allContacts = await contact.find();
        res.status(200).json(allContacts);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
};

export const createContact = async (req, res) => {
    const contact = req.body;
    const newStudent = new contact(contact);
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
};