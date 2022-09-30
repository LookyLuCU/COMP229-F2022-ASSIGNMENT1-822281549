//INDEX CONTROLLER - functions go here

//customer middleware (function) moved from from server.js
export function helloWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World from Controller');
};