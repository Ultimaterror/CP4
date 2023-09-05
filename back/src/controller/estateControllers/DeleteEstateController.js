const EstateManager = require('../../model/EstateManager');

async function deleteEstateController(req, res) {
    const {status, message} = await EstateManager.deleteEstate(req.params.id);
    
    return res.status(status).json(message)
}

module.exports = deleteEstateController;