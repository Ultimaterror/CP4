const EstateManager = require('../../model/EstateManager');

async function createEstateController(req, res) {
    const {status, message} = await EstateManager.insertEstate(req.body);
    
    return res.status(status).json(message)
}

module.exports = createEstateController;