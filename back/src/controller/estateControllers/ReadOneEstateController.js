const EstateManager = require('../../model/EstateManager');

async function readOneEstateController(req, res) {
    const {status, message} = await EstateManager.fetchOneEstate(req.params.id);
    
    return res.status(status).json(message)
}

module.exports = readOneEstateController;