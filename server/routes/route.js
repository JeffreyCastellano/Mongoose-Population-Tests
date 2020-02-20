const express = require('express');
const router = express.Router();

const testController = require('../controllers/_testController');

//TEST ROUTES//
//--------------------------------------------------

router.post('/test', testController.runTest);
router.post('/test/get', testController.getTest);

router.post('/test/create/goblin/:gname', testController.creatGoblin);
router.post('/test/create/war/:wname', testController.createWar);
router.post('/test/list/goblins', testController.listGoblins);
router.post('/test/list/wars', testController.listWars);
router.post('/test/enlistgoblin', testController.enlistGoblinToWar);

module.exports = router;
