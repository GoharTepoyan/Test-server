import {Router} from "express";
const router =Router();

// import { getAdmin1, getModerator1, isAdmin1 } from "./midlewares1.js";


// import { users,getAdmins,addUser,register } from "./controller1.js";

import { users,register } from "./controller1.js";

router.get('/', users);
// router.get('/admin', getAdmin1, getAdmins)
// router.post('/moderator', getModerator1, addUser)
router.post('/registration', register)

export default router