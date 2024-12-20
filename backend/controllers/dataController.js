const dataModel = require('../models/dataModel');

const getData = (req, res) => {
  try {
    const data = dataModel.getData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving data', error });
  }
};

module.exports = { getData };
