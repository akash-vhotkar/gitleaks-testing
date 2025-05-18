const { client } = require('./connection');
const LIST_OF_USERS = 'LIST_OF_USERS';

const getAllUsers = async () => {
    const list = await client.get(LIST_OF_USERS);
    return list ? JSON.parse(list) : null;
};

const setAllUsers = async (list) => {
    return client.set(LIST_OF_USERS, JSON.stringify(list), {
        EX: 2 // TTL in seconds
    });
};

module.exports = { getAllUsers, setAllUsers };
