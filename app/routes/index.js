/*
COMP229-F2022-ASSIGNMENT1-822281549
Sheila Donnelly
Student #822281549
October 7th, 2022
*/

//INDEX ROUTES

import { Router } from 'express';
import { displayHomePage, 
    displayAboutMePage, 
    displayProjectsPage, 
    displayServicesPage, 
    displayContactPage,
    displayThankYouPage } from '../controllers/index.controller.server.js'

//INSTANTIATING ABOVE ROUTER
const router = new Router();

//ROUTER 
router.get('/', displayHomePage);          //home page path
router.get('/home', displayHomePage);   
router.get('/about', displayAboutMePage);     
router.get('/projects', displayProjectsPage); 
router.get('/services', displayServicesPage); 
router.get('/contact', displayContactPage); 
router.get('/message', displayThankYouPage);

//needs to be exportable for use
export default router;