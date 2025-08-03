import { addNewContact, 
         getContacts, 
         getContactsWithID, 
         updateContact, 
         deleteContact} from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        console.log(`Request from ${req.originalUrl}`);
        console.log(`Request from ${req.method}`);
        next();
    }, getContacts)

    .post(addNewContact)

    app.route('/contact/:contactId')
    
    // get specific contact
    .get(getContactsWithID)

    // update a contact
    .put(updateContact)

    // delete a contact
    .delete(deleteContact);
}

export default routes;