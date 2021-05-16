const { User } = require('../model');

const userdata = [

    {
        username: 'example',
        email: 'mail@mail.com',
        password: 'examplepassword',
    }
];


const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;