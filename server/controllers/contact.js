import ContactData from '../models/contact.js';

export const getContacts = async (req, res) => {
    try {
        const allContacts = await ContactData.find();
        res.status(200).json(allContacts);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
};

export const createContact = async (req, res) => {
    const contact = req.body;
    const newContact = new ContactData(contact);
    try {
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
};

export const deleteContact = async (req, res) => {
    const id = req.params.id;
    try {
        await ContactData.findByIdAndRemove(id).exec();
        res.send('Deleted');
    } catch (error) {
        console.log(error);
    }
};

export const updateContact = async (req, res) => {
    const id = req.params.id;
    const updates = req.body;

    try {
        await ContactData.findByIdAndUpdate(id, updates).exec();
        res.send('Updated');
    } catch (error) {
        console.log(error);
    }
};