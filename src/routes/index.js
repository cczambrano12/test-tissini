//ROUTES
const { Router } = require("express");
const router = Router();
const path = require('path');

router.get('/catalogo', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

module.exports = router;