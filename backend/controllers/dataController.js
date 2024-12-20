const dataModel = require('../models/dataModel');

const getData = (req, res) => {
  try {
    const data = dataModel.getData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving data', error });
  }
};

const getDataById = (req, res) => {
  const { id } = req.params;  // Récupère l'ID depuis les paramètres de l'URL
  try {
    const data = dataModel.getDataById(id);
    if (data) {
      res.json(data);  // Retourne la donnée trouvée
    } else {
      res.status(404).json({ message: 'Data not found' });  // Si la donnée n'est pas trouvée, on retourne une erreur 404
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving data by ID', error });
  }
};

module.exports = { getData, getDataById };
