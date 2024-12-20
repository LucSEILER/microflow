const fs = require('fs');
const path = require('path');

const data = [
  { "id": 1, "name": "Alice", "email": "alice@example.com" },
  { "id": 2, "name": "Bob", "email": "bob@example.com" }
]

const getData = () => {
  return data;
};

const getDataById = (id) => {
  return data.find((user) => user.id === Number(id));
};

module.exports = { getData, getDataById };
