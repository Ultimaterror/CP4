const EstateManager = require('../../model/EstateManager');
const qs = require('qs')

async function readEstateController(req, res) {
    const {status, message} = await EstateManager.fetchEstate();
    
    return res.status(status).json(message)
}

module.exports = readEstateController;