const express = require('express')
const router = express.Router()
const {addList,updateList, deleteList, getList} = require('../controller/listController')


router.route('/list').post(addList).get(getList)

router.route('/list/:listId').put(updateList).delete(deleteList)



module.exports = router;