const express = require('express');
const router = express.Router();
const createEstateController = require('../controller/estateControllers/CreateEstateController')
const readEstateController = require('../controller/estateControllers/ReadEstateController')
const readOneEstateController = require('../controller/estateControllers/ReadOneEstateController')
const updateEstateController = require('../controller/estateControllers/UpdateEstateController')
const deleteEstateController = require('../controller/estateControllers/DeleteEstateController');

/* POST : create a new estate. */
router.post('/', createEstateController)

/* GET : fetch all estates . */
router.get('/', readEstateController)

/* GET : fetch one estate . */
router.get('/:id', readOneEstateController)

/* PUT : update one estate . */
router.put('/:id', updateEstateController)

/* DELETE : delete one estate . */
router.delete('/:id', deleteEstateController)

module.exports = router;