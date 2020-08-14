//ROUTES
const { Router } = require("express");
const router = Router();
const path = require('path');

router.get('/categorias', function(req, res) {
  console.log('entrando al endpoint')
  res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

router.get('/entrega-inmediata', function(req, res) {
  console.log('entrando al endpoint')
  res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

module.exports = router;