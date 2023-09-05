const EstateManager = require('../../model/EstateManager');

async function updateEstateController(req, res) {
    const {status, message} = await EstateManager.updateEstate(req.params.id, req.body);
    
    return res.status(status).json(message)
}

module.exports = updateEstateController;