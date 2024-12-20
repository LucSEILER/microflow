const dataController = require('../controllers/dataController');
const dataModel = require('../models/dataModel');

jest.mock('../models/dataModel');

const mockData = [
  { id: 1, name: 'Data 1' },
  { id: 2, name: 'Data 2' },
  { id: 3, name: 'Data 3' }
];

describe('dataController', () => {

  test('should return data by ID', () => {
    dataModel.getDataById.mockReturnValue(mockData[0]);

    const req = { params: { id: 1 } }; // On passe l'ID 1 dans les paramètres
    const res = {
      json: jest.fn(), // Mock de la méthode json de la réponse
      status: jest.fn().mockReturnThis() // Mock de la méthode status
    };

    dataController.getDataById(req, res);

    expect(res.json).toHaveBeenCalledWith(mockData[0]);
    expect(res.status).not.toHaveBeenCalled(); // Pas d'erreur, donc le status ne doit pas être appelé
  });

  test('should return 404 if data not found', () => {
    dataModel.getDataById.mockReturnValue(null);

    const req = { params: { id: 999 } }; // ID qui n'existe pas
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };

    dataController.getDataById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Data not found' });
  });
});
