import express from 'express';
import { getContacts, createContact } from '../controllers/contact.js';
import contact from '../models/contact.js';

const router = express.Router();

router.get('/', getContacts);
router.post('/', createContact);

export default router;