//INDEX ROUTES

import { Router } from 'express';
import { displayHomePage, 
    displayAboutPage, 
    displayProjectsPage, 
    displayServicesPage, 
    displayContactPage } from '../controllers/index.controller.server.js'

//INSTANTIATING ABOVE ROUTER
const router = new Router();

//ROUTERcan be reused for multiple paths (see below)
//app.use('/', helloWorld); moved from server.js
router.get('/', displayHomePage);          //root or home page link
router.get('/home', displayHomePage);   //can be used for all my route paths
router.get('/about', displayAboutPage);     //synced to matching controller code
router.get('/projects', displayProjectsPage); 
router.get('/services', displayServicesPage); 
router.get('/contact', displayContactPage); 

//needs to be exportable for use
export default router;