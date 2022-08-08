const express = require('express')

const router = express.Router()
const employeeController = require('../controllers/employees.js')

router.post('/save',employeeController.savEmployeeData)
router.get('/fetch',employeeController.fetchDataBasedOnDeparment)


module.exports = router