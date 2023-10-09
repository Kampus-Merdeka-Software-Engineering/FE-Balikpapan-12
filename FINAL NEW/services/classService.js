const { prisma } = require('../config/prisma');

async function getAllClasses() {
    try {
        const classes = await prisma.$queryRaw`
        SELECT * FROM class`;

        return classes;
    } catch (error) {
        console.error(error);

        throw new Error()
    }
}

async function addContact({ nama, email, pesan }) {
    try {
        const result = await prisma.$queryRaw`
        INSERT INTO contact (nama, email, pesan)
        VALUES (${nama}, ${email}, ${pesan})`;

        return result;
    } catch (error) {
        console.error(error);

        throw new Error('Error inserting contact');
    }
}

module.exports = {
    getAllClasses,
    addContact
};