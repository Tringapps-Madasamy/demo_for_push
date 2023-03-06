import userController from './user.controller'
import express from 'express';
const router = express.Router();

router.post("/",userController.createUser);
// router.get("/",userController.getUser);
router.patch("/updatecolumn",userController.updateUser);
// router.delete("/",userController.deleteUser);
// router.get("/create" ,userController.createTable);

export default router;