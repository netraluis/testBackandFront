const express = require('express');

const router = express.Router();

const expSubController = require('../controllers/expSubController');



router
  .route('/expedients')
  .get(expSubController.getAllExpedients)
  .post(expSubController.createExpedient)

   router.route('/substitutes')
  .get(expSubController.getAllSubstitutes)
  .post(expSubController.createSubstitut)
  
router
  .route('/expedient/:id')
  .get(expSubController.getExpedient)

  router.route('/substitut/:id')
  .get(expSubController.getSubstitut)

module.exports = router;
