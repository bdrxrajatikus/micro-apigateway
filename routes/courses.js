const express = require('express');
const router = express.Router();

const coursesHandler = require('./handler/courses');

const verifyToken = require('../middlewares/verifyToken');
const can = require('../middlewares/permissions');

router.post('/', verifyToken, can('admin'), coursesHandler.create);
router.put('/:id', verifyToken, can('admin'), coursesHandler.update);
router.delete('/:id', verifyToken, can('admin'), coursesHandler.destroy);

router.get('/', coursesHandler.getAll);
router.get('/:id', coursesHandler.get);

module.exports = router;
