//INDEX ROUTES

import { Router } from 'express';
import { helloWorld } from '../controllers/index.controller.server.js'

//INSTANTIATING ABOVE ROUTER
const router = new Router();

//ROUTERcan be reused for multiple paths (see below)
//app.use('/', helloWorld); moved from server.js
router.get('/', helloWorld);    //root or home page link

router.get('/hello', helloWorld);   //can be used for all my route paths
router.get('/these', helloWorld);   //synced to matching controller code
router.get('/work', helloWorld);

//needs to be exportable for use
export default router;