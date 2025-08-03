import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async(req, res) => {
    let newContact = new Contact(req.body);

    try {
        const contact = await newContact.save();
        res.json(contact);
    } catch(err){
        res.status(500).send(err);
    }
    
}

export const getContacts = async(req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch(err){
        res.status(404).send(err);
    }
}

export const getContactsWithID = async(req, res) => {
    try {
        const contact_id = await Contact.findById(req.params.contactId);
        res.json(contact_id);
    } catch(err){
        res.status(404).send(err);
    }
}

export const updateContact = async(req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true });
        console.log('Records has been updated successfully');
        res.json(contact);
    } catch(err) {
        res.status(404).send(err);
    }
}

export const deleteContact = async(req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete({_id: req.params.contactId});
        res.json({message: 'Successfully deleted contact'});
    } catch(err) {
        res.status(404).send(err);
    }
}