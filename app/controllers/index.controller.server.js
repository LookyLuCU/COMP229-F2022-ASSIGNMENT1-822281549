//INDEX CONTROLLER - functions go here

//customer middleware (function) moved from from server.js
export function helloWorld(req, res, next){
    res.render('index', { title: 'Home' });
};