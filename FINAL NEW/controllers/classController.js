const { classService } = require('../services');

async function getClasses(req, res) {
    const classes = await classService.getAllClasses();

    res.status(200).json(classes);
}

async function addContact(req, res) {
    const contact = await classService.addContact(req.body);

    res.status(200).json(contact);
}

module.exports = {
    getClasses,
    addContact
};