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
    // const newName = req.body.newName;
    // const newPhoneNumber = req.body.newPhoneNumber;
    // const newBirthDate = req.body.newBirthDate;
    // const newAddress = req.body.newAddress;
    const id = req.body.id;
    try {
        await ContactData.findByIdAndUpdate(id).exec();
        // await ContactData.findById((id) => {
        //     ContactData.contactName = newName;
        //     ContactData.phoneNumber = newPhoneNumber;
        //     ContactData.birthDate = newBirthDate;
        //     ContactData.address = newAddress;
        //     ContactData.save();
    } catch (error) {
        console.log(error);
    }
    res.send(`Updated`);
};