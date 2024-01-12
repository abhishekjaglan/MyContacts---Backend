const express = require("express");
const router = express.Router();
const { 
    getContacts, 
    getContactId, 
    updateContact, 
    createContact, 
    deleteContact 
} = require("../Controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContactId).put(updateContact).delete(deleteContact);

module.exports = router;