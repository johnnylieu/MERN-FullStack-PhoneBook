import express from 'express';
import { getContacts, createContact, deleteContact, updateContact } from '../controllers/contact.js';
import contact from '../models/contact.js';

const router = express.Router();

router.get('/', getContacts);
router.post('/', createContact);
router.delete('/:id', deleteContact);
router.put('/', updateContact);

export default router;