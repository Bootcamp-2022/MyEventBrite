import bcrypt from "bcryptjs";


const users = [
    {
        name: 'Admin User',
        email: 'admin@eventbrite.com',
        password: bcrypt.hashSync('123456, 10'),
        isAdmin: true,
    },
    {
        name: 'Michaela',
        email: 'michaela@eventbrite.com',
        password: bcrypt.hashSync('123456, 10'),
        isAdmin: true,
    },

    {
        name: 'Rustam',
        email: 'rustam@eventbrite.com',
        password: bcrypt.hashSync('123456, 10'),
        isAdmin: true,
    },
    {
        name: 'Purnima',
        email: 'purnima@eventbrite.com',
        password: bcrypt.hashSync('123456, 10'),
        isAdmin: true,
    },
    {
        name: 'Barney',
        email: 'barney@eventbrite.com',
        password: bcrypt.hashSync('123456, 10'),
        isAdmin: true,
}
]

export default users