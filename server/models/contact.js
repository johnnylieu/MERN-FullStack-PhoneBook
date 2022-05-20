import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    name: String,
    phoneNumber: String,
    birthDate: Date,
    address: String
});

const contact = mongoose.model('contact', contactSchema);

export default contact;